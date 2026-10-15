/**
 * Job: Google Indexing API Batch Submission
 * Schedule: 0 2 * * * (02:00 UTC / 07:30 IST daily)
 *
 * Submits up to BATCH_SIZE URLs per day to the Google Indexing API v3.
 * Uses the Cloudflare CRON_STATE KV to persist cursor position across runs.
 * Automatically cycles back to the beginning when all URLs are submitted.
 *
 * Quota: Google allows 200 URL_UPDATED notifications/day per project.
 * We use 190 to stay safely under the limit.
 */

import type { Env, JobResult } from '../env.ts';
import { getGoogleAccessToken } from '../lib/google-auth.ts';
import { getIndexingState, saveIndexingState } from '../lib/kv-state.ts';
import { getAllUrls, FLAGSHIP_URLS } from '../lib/url-generator.ts';
import { Logger } from '../lib/logger.ts';

const BATCH_SIZE           = 190;   // Stay under Google's 200/day quota
const QUOTA_RETRY_DELAY_MS = 2000;  // 2s delay between individual API calls
const INDEXING_API_BASE    = 'https://indexing.googleapis.com/v3/urlNotifications:publish';
const INDEXING_SCOPE       = 'https://www.googleapis.com/auth/indexing';

interface IndexingApiResponse {
    urlNotificationMetadata?: {
        url: string;
        latestUpdate?: { url: string; type: string; notifyTime: string };
    };
    error?: { code: number; message: string; status: string };
}

/**
 * Submit a single URL to the Google Indexing API.
 * Returns the HTTP status code.
 */
async function submitUrl(url: string, accessToken: string): Promise<number> {
    const resp = await fetch(INDEXING_API_BASE, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url, type: 'URL_UPDATED' }),
    });
    return resp.status;
}

export async function runGoogleIndexingJob(env: Env): Promise<JobResult> {
    const startTime = Date.now();
    const log = new Logger(env, 'google-indexing');

    // ── Validate secrets ──────────────────────────────────────────────────
    if (!env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !env.GOOGLE_PRIVATE_KEY) {
        log.error('Missing GOOGLE_SERVICE_ACCOUNT_EMAIL or GOOGLE_PRIVATE_KEY secrets');
        await log.flush();
        return {
            job: 'google-indexing',
            status: 'error',
            message: 'Missing Google service account secrets',
            durationMs: Date.now() - startTime,
            timestamp: new Date().toISOString(),
        };
    }

    // ── Load state ────────────────────────────────────────────────────────
    const state = await getIndexingState(env);
    const allUrls = getAllUrls();
    const totalUrls = allUrls.length;

    log.info(`Catalog size: ${totalUrls} URLs | Current cursor: ${state.cursor} | Total batches run: ${state.totalBatches}`);

    // ── Determine this batch ──────────────────────────────────────────────
    // If cursor is at the end, reset and start a fresh cycle
    let cursor = state.cursor;
    if (cursor >= totalUrls) {
        cursor = 0;
        log.info('✅ Full catalog cycle complete — resetting cursor to 0');
        await log.sendWebhookAlert(
            'Indexing Cycle Complete',
            `All **${totalUrls}** URLs submitted to Google Indexing API.\nStarting a new cycle. Total batches: ${state.totalBatches}`,
            'info'
        );
    }

    const batchUrls = allUrls.slice(cursor, cursor + BATCH_SIZE);
    log.info(`Submitting batch: URLs ${cursor + 1}–${cursor + batchUrls.length} of ${totalUrls}`);

    // ── Get OAuth2 token ──────────────────────────────────────────────────
    let accessToken: string;
    try {
        accessToken = await getGoogleAccessToken(
            env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            env.GOOGLE_PRIVATE_KEY,
            INDEXING_SCOPE
        );
        log.info('OAuth2 token acquired successfully');
    } catch (e) {
        const err = e instanceof Error ? e.message : String(e);
        log.error('OAuth2 token acquisition failed', err);
        await log.sendWebhookAlert('Indexing Auth Failed', err, 'error');
        await log.flush();
        return {
            job: 'google-indexing',
            status: 'error',
            message: `OAuth2 failed: ${err}`,
            durationMs: Date.now() - startTime,
            timestamp: new Date().toISOString(),
        };
    }

    // ── Submit URLs ───────────────────────────────────────────────────────
    const results: Record<string, number> = {};
    let successCount = 0;
    let errorCount   = 0;
    let quotaHit     = false;

    for (const url of batchUrls) {
        try {
            const statusCode = await submitUrl(url, accessToken);
            results[url] = statusCode;

            if (statusCode === 200) {
                successCount++;
            } else if (statusCode === 429) {
                // Quota exceeded — stop submitting today
                log.warn(`Quota limit hit at URL ${url}. Stopping batch early.`);
                quotaHit = true;
                break;
            } else {
                errorCount++;
                log.warn(`Non-200 response [${statusCode}] for ${url}`);
            }

            // Small delay to be polite to the API
            await new Promise(r => setTimeout(r, 50));
        } catch (e) {
            errorCount++;
            results[url] = 0;
            log.error(`Fetch error for ${url}`, e instanceof Error ? e.message : String(e));
        }
    }

    // ── Update and persist state ──────────────────────────────────────────
    const newCursor = cursor + batchUrls.length;
    state.cursor         = newCursor;
    state.totalUrls      = totalUrls;
    state.totalBatches   = state.totalBatches + 1;
    state.lastRun        = new Date().toISOString();
    state.lastBatchUrls  = batchUrls;
    state.lastBatchResults = results;
    state.errorCount     = (state.errorCount ?? 0) + errorCount;
    await saveIndexingState(env, state);

    const cyclePercent = Math.min(100, Math.round((newCursor / totalUrls) * 100));
    const summary = [
        `Submitted: ${successCount} ✅ | Errors: ${errorCount} ❌ | Quota hit: ${quotaHit ? 'YES' : 'No'}`,
        `Cursor: ${newCursor}/${totalUrls} (${cyclePercent}% of cycle complete)`,
        `Batch #${state.totalBatches} | URLs ${cursor + 1}–${newCursor}`,
    ].join('\n');

    log.info(summary);

    // ── Alert if high error rate ──────────────────────────────────────────
    if (errorCount > 20 || quotaHit) {
        await log.sendWebhookAlert(
            quotaHit ? '⚠️ Indexing Quota Hit' : '⚠️ High Indexing Error Rate',
            summary,
            'warn'
        );
    } else {
        // Daily success ping
        await log.sendWebhookAlert(
            '✅ Google Indexing Batch Complete',
            `**Supreme Rivana** indexing run finished.\n${summary}`,
            'info'
        );
    }

    await log.flush();

    return {
        job: 'google-indexing',
        status: errorCount > batchUrls.length / 2 ? 'partial' : 'success',
        message: summary,
        data: { cursor: newCursor, totalUrls, successCount, errorCount, quotaHit },
        durationMs: Date.now() - startTime,
        timestamp: new Date().toISOString(),
    };
}
