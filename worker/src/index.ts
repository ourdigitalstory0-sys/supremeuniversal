/**
 * Supreme Universal - Advanced Cloudflare Cron Worker v2.0
 *
 * Orchestrates 6 scheduled jobs via Cloudflare Cron Triggers:
 *
 *  Cron              | Job
 *  ------------------|----------------------------------------------
 *  0 0 every day     | SEO Health Monitor (05:30 IST)
 *  0 1 every day     | Sitemap Ping - Google + Bing (06:30 IST)
 *  0 2 every day     | Google Indexing API Batch 190 URLs (07:30 IST)
 *  0 every-6h        | KV Price Store Refresh (every 6h)
 *  0 3 every Monday  | Weekly Lead Digest Email (Mon 08:30 IST)
 *  0 4 every day     | Web Stories Metadata Refresh (09:30 IST)
 *
 * Admin HTTP endpoints (for manual triggers and monitoring):
 *  GET  /          — Worker info + last run status
 *  GET  /status    — Full cron state from KV (JSON)
 *  POST /trigger   — Manually trigger any job (body: { job: "job-name" })
 *  GET  /logs/:job — Last 200 log entries for a job (JSON)
 *
 * Deploy:
 *   cd worker && wrangler deploy
 *
 * Secrets required:
 *   wrangler secret put GOOGLE_SERVICE_ACCOUNT_EMAIL
 *   wrangler secret put GOOGLE_PRIVATE_KEY
 *   wrangler secret put NOTIFICATION_WEBHOOK_URL  (optional)
 *   wrangler secret put EMAIL_API_KEY             (optional)
 * ═══════════════════════════════════════════════════════════════════════════
 */

import type { Env, JobResult } from './env.ts';
import { appendCronRunLog, kvGet } from './lib/kv-state.ts';
import { Logger }                   from './lib/logger.ts';

// ── Job Imports ───────────────────────────────────────────────────────────
import { runGoogleIndexingJob }    from './jobs/google-indexing.ts';
import { runSitemapPingJob }       from './jobs/sitemap-ping.ts';
import { runKvPriceSyncJob }       from './jobs/kv-price-sync.ts';
import { runLeadDigestJob }        from './jobs/lead-digest.ts';
import { runWebStoriesRefreshJob } from './jobs/web-stories-refresh.ts';
import { runHealthMonitorJob }     from './jobs/health-monitor.ts';

// ── Cron → Job mapping ────────────────────────────────────────────────────
type JobName =
    | 'health-monitor'
    | 'sitemap-ping'
    | 'google-indexing'
    | 'kv-price-sync'
    | 'lead-digest'
    | 'web-stories-refresh';

const CRON_JOB_MAP: Record<string, JobName[]> = {
    '0 0 * * *':    ['health-monitor', 'sitemap-ping'],
    '0 2 * * *':    ['google-indexing'],
    '0 */6 * * *':  ['kv-price-sync'],
    '0 3 * * 1':    ['lead-digest'],
    '0 4 * * *':    ['web-stories-refresh'],
};

// ── Job Runner ────────────────────────────────────────────────────────────
async function runJob(jobName: JobName, env: Env): Promise<JobResult> {
    switch (jobName) {
        case 'health-monitor':      return runHealthMonitorJob(env);
        case 'sitemap-ping':        return runSitemapPingJob(env);
        case 'google-indexing':     return runGoogleIndexingJob(env);
        case 'kv-price-sync':       return runKvPriceSyncJob(env);
        case 'lead-digest':         return runLeadDigestJob(env);
        case 'web-stories-refresh': return runWebStoriesRefreshJob(env);
        default:
            return {
                job: jobName,
                status: 'error',
                message: `Unknown job: ${jobName}`,
                durationMs: 0,
                timestamp: new Date().toISOString(),
            };
    }
}

// ── Admin HTTP handler ────────────────────────────────────────────────────
async function handleAdminRequest(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Require simple bearer token (the GOOGLE_SERVICE_ACCOUNT_EMAIL as a proxy secret)
    const auth = request.headers.get('Authorization') ?? '';
    const isAuthed = auth.startsWith('Bearer ') && auth.slice(7) === (env.GOOGLE_SERVICE_ACCOUNT_EMAIL ?? '');

    // ── GET / ─────────────────────────────────────────────────────────────
    if (url.pathname === '/') {
        return new Response(JSON.stringify({
            worker: 'Supreme Universal Cron Worker v2.0',
            domain: env.DOMAIN,
            project: env.PROJECT_NAME,
            jobs: Object.values(CRON_JOB_MAP).flat(),
            crons: Object.keys(CRON_JOB_MAP),
            docsUrl: 'https://github.com/supremeuniversal/cron-worker#readme',
        }, null, 2), {
            headers: { 'Content-Type': 'application/json' },
        });
    }

    // All other admin routes require auth
    if (!isAuthed) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json', 'WWW-Authenticate': 'Bearer' },
        });
    }

    // ── GET /status ───────────────────────────────────────────────────────
    if (url.pathname === '/status' && request.method === 'GET') {
        const [indexingState, healthState, runLog] = await Promise.all([
            kvGet(env.CRON_STATE, 'cron:indexing:state'),
            kvGet(env.CRON_STATE, 'cron:health:last_check'),
            kvGet(env.CRON_STATE, 'cron:run:log'),
        ]);
        return new Response(JSON.stringify({
            timestamp: new Date().toISOString(),
            indexing: indexingState,
            health: healthState,
            recentRuns: runLog,
        }, null, 2), {
            headers: { 'Content-Type': 'application/json' },
        });
    }

    // ── GET /logs/:job ────────────────────────────────────────────────────
    if (url.pathname.startsWith('/logs/') && request.method === 'GET') {
        const job = url.pathname.replace('/logs/', '');
        const logs = await kvGet(env.CRON_STATE, `cron:log:${job}`);
        return new Response(JSON.stringify({ job, logs: logs ?? [] }, null, 2), {
            headers: { 'Content-Type': 'application/json' },
        });
    }

    // ── POST /trigger ─────────────────────────────────────────────────────
    if (url.pathname === '/trigger' && request.method === 'POST') {
        let body: { job?: string };
        try {
            body = await request.json() as { job?: string };
        } catch {
            return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const jobName = body.job as JobName | undefined;
        const validJobs: JobName[] = [
            'health-monitor', 'sitemap-ping', 'google-indexing',
            'kv-price-sync', 'lead-digest', 'web-stories-refresh',
        ];

        if (!jobName || !validJobs.includes(jobName)) {
            return new Response(JSON.stringify({
                error: 'Invalid job name',
                validJobs,
            }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const result = await runJob(jobName, env);
        return new Response(JSON.stringify(result, null, 2), {
            status: result.status === 'error' ? 500 : 200,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    return new Response(JSON.stringify({ error: 'Not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
    });
}

// ── Worker Export ─────────────────────────────────────────────────────────
export default {
    /**
     * Scheduled handler — called by Cloudflare Cron Triggers.
     * Dispatches to the correct job(s) based on the cron expression.
     */
    async scheduled(event: ScheduledEvent, env: Env, ctx: ExecutionContext): Promise<void> {
        const runStart = Date.now();
        const cron = event.cron;
        const log = new Logger(env, 'scheduler');

        log.info(`⏰ Cron fired: "${cron}"`, { scheduledTime: new Date(event.scheduledTime).toISOString() });

        const jobNames = CRON_JOB_MAP[cron] ?? [];
        if (jobNames.length === 0) {
            log.warn(`No job mapped to cron "${cron}"`);
            await log.flush();
            return;
        }

        const results: JobResult[] = [];

        ctx.waitUntil(
            (async () => {
                for (const jobName of jobNames) {
                    log.info(`▶ Starting job: ${jobName}`);
                    try {
                        const result = await runJob(jobName, env);
                        results.push(result);
                        log.info(`✅ Job ${jobName} finished in ${result.durationMs}ms → ${result.status}: ${result.message}`);
                    } catch (e) {
                        const err = e instanceof Error ? e.message : String(e);
                        log.error(`💥 Job ${jobName} threw an unhandled exception`, err);
                        results.push({
                            job: jobName,
                            status: 'error',
                            message: `Unhandled exception: ${err}`,
                            durationMs: 0,
                            timestamp: new Date().toISOString(),
                        });
                        await log.sendWebhookAlert(
                            `💥 Cron Job Crash: ${jobName}`,
                            `**Cron:** \`${cron}\`\n**Error:** ${err}`,
                            'error'
                        );
                    }
                }

                // Persist run log
                await appendCronRunLog(env, {
                    runAt:      new Date(event.scheduledTime).toISOString(),
                    cron,
                    jobs:       jobNames,
                    success:    results.every(r => r.status !== 'error'),
                    durationMs: Date.now() - runStart,
                });

                await log.flush();
            })()
        );
    },

    /**
     * HTTP fetch handler — admin endpoints for manual triggers & monitoring.
     */
    async fetch(request: Request, env: Env): Promise<Response> {
        return handleAdminRequest(request, env);
    },
};
