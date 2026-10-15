/**
 * Job: SEO Health Monitor
 * Schedule: 0 0 * * * (00:00 UTC / 05:30 IST daily)
 *
 * Checks HTTP status and response latency for critical flagship pages.
 * Sends an alert webhook if any page returns non-200 or responds in >3s.
 * Results persisted to KV for the admin dashboard.
 */

import type { Env, JobResult } from '../env.ts';
import { saveHealthState, getHealthState } from '../lib/kv-state.ts';
import type { HealthCheckResult } from '../lib/kv-state.ts';
import { Logger } from '../lib/logger.ts';

const DOMAIN = 'https://www.supreme-universal.in';
const LATENCY_WARN_MS  = 2000;  // warn if response >2s
const LATENCY_ERROR_MS = 5000;  // error if response >5s

// ── Pages to monitor ──────────────────────────────────────────────────────
const MONITORED_PAGES = [
    { url: `${DOMAIN}/`,                                          label: 'Homepage' },
    { url: `${DOMAIN}/supreme-rivana-punawale-overview`,          label: 'Overview' },
    { url: `${DOMAIN}/supreme-rivana-punawale-price-list`,        label: 'Price List' },
    { url: `${DOMAIN}/supreme-rivana-punawale-floor-plans`,       label: 'Floor Plans' },
    { url: `${DOMAIN}/supreme-rivana-punawale-amenities`,         label: 'Amenities' },
    { url: `${DOMAIN}/supreme-rivana-punawale-location`,          label: 'Location' },
    { url: `${DOMAIN}/supreme-rivana-punawale-gallery`,           label: 'Gallery' },
    { url: `${DOMAIN}/supreme-rivana-punawale-contact`,           label: 'Contact' },
    { url: `${DOMAIN}/supreme-rivana-punawale-brochure`,          label: 'Brochure' },
    { url: `${DOMAIN}/supreme-rivana-punawale-master-plan`,        label: 'Master Plan' },
    { url: `${DOMAIN}/supreme-rivana-punawale-rera`,               label: 'MahaRERA Page' },
    { url: `${DOMAIN}/supreme-rivana-punawale-sample-flat`,        label: 'Sample Flat' },
    { url: `${DOMAIN}/supreme-2bhk-punawale-flats`,               label: '2 BHK Page' },
    { url: `${DOMAIN}/supreme-3bhk-punawale-flats`,               label: '3 BHK Page' },
    { url: `${DOMAIN}/pune-real-estate`,                          label: 'Pune Real Estate Hub' },
    // Google Web Stories
    { url: `${DOMAIN}/web-stories/supreme-rivana-overview`,       label: 'Web Story: Overview' },
    // API endpoints
    { url: `${DOMAIN}/api/pricing`,                               label: 'Pricing API' },
    // pSEO spot-checks
    { url: `${DOMAIN}/pune-real-estate/2bhk-apartments-in-punawale-price`, label: 'pSEO: 2BHK Punawale' },
    { url: `${DOMAIN}/pune-real-estate/3bhk-apartments-in-hinjewadi-price`, label: 'pSEO: 3BHK Hinjewadi' },
    { url: `${DOMAIN}/pune-projects/supreme-rivana-2bhk-price`,             label: 'pSEO: Project 2BHK' },
    // Sitemaps
    { url: `${DOMAIN}/sitemap.xml`,               label: 'Sitemap Index' },
    { url: `${DOMAIN}/sitemap-core.xml`,          label: 'Core Sitemap' },
    { url: `${DOMAIN}/sitemap-web-stories.xml`,   label: 'Web Stories Sitemap' },
    { url: `${DOMAIN}/robots.txt`,                label: 'Robots.txt' },
];

async function checkPage(url: string): Promise<HealthCheckResult> {
    const start = Date.now();
    const checkedAt = new Date().toISOString();
    try {
        const resp = await fetch(url, {
            method: 'GET',
            headers: {
                'User-Agent': 'Supreme-Universal-Health-Monitor/2.0 (Cloudflare-Worker)',
                'Accept': 'text/html,application/xml,application/json',
            },
            redirect: 'follow',
        });
        const latencyMs = Date.now() - start;
        return {
            url,
            status: resp.status,
            ok: resp.ok,
            latencyMs,
            checkedAt,
        };
    } catch (e) {
        return {
            url,
            status: 0,
            ok: false,
            latencyMs: Date.now() - start,
            checkedAt,
        };
    }
}

export async function runHealthMonitorJob(env: Env): Promise<JobResult> {
    const startTime = Date.now();
    const log = new Logger(env, 'health-monitor');
    const now = new Date().toISOString();

    log.info(`Running health checks on ${MONITORED_PAGES.length} pages`);

    // ── Run all checks in parallel (respect CF Workers fan-out limits) ────
    const CHUNK_SIZE = 6;
    const results: HealthCheckResult[] = [];

    for (let i = 0; i < MONITORED_PAGES.length; i += CHUNK_SIZE) {
        const chunk = MONITORED_PAGES.slice(i, i + CHUNK_SIZE);
        const chunkResults = await Promise.all(chunk.map(p => checkPage(p.url)));
        results.push(...chunkResults);
    }

    // ── Classify ──────────────────────────────────────────────────────────
    const failed   = results.filter(r => !r.ok);
    const slowWarn = results.filter(r => r.ok && r.latencyMs >= LATENCY_WARN_MS && r.latencyMs < LATENCY_ERROR_MS);
    const slowErr  = results.filter(r => r.ok && r.latencyMs >= LATENCY_ERROR_MS);
    const healthy  = results.filter(r => r.ok && r.latencyMs < LATENCY_WARN_MS);

    const avgLatency = Math.round(results.reduce((s, r) => s + r.latencyMs, 0) / results.length);
    const maxLatency = Math.max(...results.map(r => r.latencyMs));

    // ── Log ───────────────────────────────────────────────────────────────
    log.info(`Health check summary`, {
        total: results.length,
        healthy: healthy.length,
        failed: failed.length,
        slowWarn: slowWarn.length,
        slowErr: slowErr.length,
        avgLatencyMs: avgLatency,
        maxLatencyMs: maxLatency,
    });

    for (const r of failed) {
        log.error(`❌ FAILED [${r.status}] ${r.url} (${r.latencyMs}ms)`);
    }
    for (const r of slowErr) {
        log.error(`🐌 SLOW ERROR [${r.status}] ${r.url} (${r.latencyMs}ms)`);
    }
    for (const r of slowWarn) {
        log.warn(`⚠️ SLOW [${r.status}] ${r.url} (${r.latencyMs}ms)`);
    }

    // ── Persist results ───────────────────────────────────────────────────
    const failedUrls = [...failed, ...slowErr].map(r => r.url);
    await saveHealthState(env, {
        lastCheck: now,
        results,
        failedUrls,
    });

    // ── Send alert if issues found ────────────────────────────────────────
    const hasIssues = failed.length > 0 || slowErr.length > 0;
    if (hasIssues) {
        const lines: string[] = [];
        if (failed.length > 0) {
            lines.push(`**❌ Down (${failed.length}):**`);
            failed.forEach(r => lines.push(`• \`${r.url.replace(DOMAIN, '')}\` → HTTP ${r.status}`));
        }
        if (slowErr.length > 0) {
            lines.push(`\n**🐌 Too Slow >5s (${slowErr.length}):**`);
            slowErr.forEach(r => lines.push(`• \`${r.url.replace(DOMAIN, '')}\` → ${r.latencyMs}ms`));
        }
        lines.push(`\nAvg latency: ${avgLatency}ms | Max: ${maxLatency}ms`);

        await log.sendWebhookAlert(
            '🚨 SEO Health Alert — Supreme Rivana',
            lines.join('\n'),
            'error'
        );
    } else if (slowWarn.length > 0) {
        const lines = slowWarn.map(r => `• \`${r.url.replace(DOMAIN, '')}\` → ${r.latencyMs}ms`);
        await log.sendWebhookAlert(
            '⚠️ Performance Warning — Supreme Rivana',
            `${slowWarn.length} pages slow (>2s):\n${lines.join('\n')}\n\nAvg: ${avgLatency}ms`,
            'warn'
        );
    }

    await log.flush();

    const summary = [
        `✅ ${healthy.length} healthy | ⚠️ ${slowWarn.length} slow | ❌ ${failed.length + slowErr.length} critical`,
        `Avg latency: ${avgLatency}ms | Max: ${maxLatency}ms`,
    ].join(' | ');

    return {
        job: 'health-monitor',
        status: failed.length > 0 ? 'error' : slowErr.length > 0 ? 'partial' : 'success',
        message: summary,
        data: {
            total: results.length,
            healthy: healthy.length,
            failed: failed.length,
            slowWarn: slowWarn.length,
            slowErr: slowErr.length,
            avgLatencyMs: avgLatency,
            maxLatencyMs: maxLatency,
            failedUrls,
        },
        durationMs: Date.now() - startTime,
        timestamp: now,
    };
}
