/**
 * Job: Sitemap Ping — Google & Bing Search Console
 * Schedule: 0 1 * * * (01:00 UTC / 06:30 IST daily)
 *
 * Pings both Google and Bing with every sitemap URL declared in robots.txt.
 * Validates ping responses and logs results to KV.
 */

import type { Env, JobResult } from '../env.ts';
import { kvSet } from '../lib/kv-state.ts';
import { Logger } from '../lib/logger.ts';

const SITEMAPS = [
    'https://www.supreme-universal.in/sitemap.xml',
    'https://www.supreme-universal.in/sitemap-core.xml',
    'https://www.supreme-universal.in/sitemap-projects.xml',
    'https://www.supreme-universal.in/sitemap-pune-1.xml',
    'https://www.supreme-universal.in/sitemap-pune-2.xml',
    'https://www.supreme-universal.in/sitemap-pune-3.xml',
    'https://www.supreme-universal.in/sitemap-pune-4.xml',
    'https://www.supreme-universal.in/sitemap-pune-5.xml',
];

interface PingEndpoint {
    name: string;
    url: (sitemap: string) => string;
}

const PING_ENDPOINTS: PingEndpoint[] = [
    {
        name: 'Google',
        url: (s) => `https://www.google.com/ping?sitemap=${encodeURIComponent(s)}`,
    },
    {
        name: 'Bing',
        url: (s) => `https://www.bing.com/ping?sitemap=${encodeURIComponent(s)}`,
    },
];

export async function runSitemapPingJob(env: Env): Promise<JobResult> {
    const startTime = Date.now();
    const log = new Logger(env, 'sitemap-ping');
    const results: Record<string, { google: number; bing: number }> = {};
    let totalSuccess = 0;
    let totalFailed  = 0;

    log.info(`Pinging ${SITEMAPS.length} sitemaps across ${PING_ENDPOINTS.length} search engines`);

    for (const sitemap of SITEMAPS) {
        const sitemapResults: Record<string, number> = {};

        for (const endpoint of PING_ENDPOINTS) {
            const pingUrl = endpoint.url(sitemap);
            try {
                const resp = await fetch(pingUrl, {
                    method: 'GET',
                    headers: { 'User-Agent': 'Supreme-Universal-SEO-Bot/2.0' },
                    // Cloudflare Workers have a 30s fetch timeout by default
                });
                sitemapResults[endpoint.name] = resp.status;

                if (resp.ok) {
                    totalSuccess++;
                    log.info(`✅ ${endpoint.name} ping OK [${resp.status}] — ${sitemap.split('/').pop()}`);
                } else {
                    totalFailed++;
                    log.warn(`⚠️ ${endpoint.name} ping [${resp.status}] — ${sitemap.split('/').pop()}`);
                }
            } catch (e) {
                sitemapResults[endpoint.name] = 0;
                totalFailed++;
                log.error(`❌ ${endpoint.name} ping FAILED — ${sitemap}`, e instanceof Error ? e.message : String(e));
            }
        }

        results[sitemap] = {
            google: sitemapResults['Google'] ?? 0,
            bing:   sitemapResults['Bing'] ?? 0,
        };
    }

    // ── Persist ping log ──────────────────────────────────────────────────
    await kvSet(env.CRON_STATE, 'cron:sitemap:last_ping', {
        pinnedAt: new Date().toISOString(),
        sitemapCount: SITEMAPS.length,
        totalSuccess,
        totalFailed,
        results,
    }, 60 * 60 * 48); // 48h TTL

    const summary = `Pinged ${SITEMAPS.length} sitemaps → ${totalSuccess} OK / ${totalFailed} failed`;
    log.info(summary);

    if (totalFailed > 0) {
        await log.sendWebhookAlert(
            '⚠️ Sitemap Ping Failures',
            `${summary}\n\nFailed pings:\n${Object.entries(results)
                .filter(([, r]) => r.google !== 200 || r.bing !== 200)
                .map(([sm, r]) => `• ${sm.split('/').pop()}: G=${r.google} B=${r.bing}`)
                .join('\n')}`,
            'warn'
        );
    }

    await log.flush();

    return {
        job: 'sitemap-ping',
        status: totalFailed === 0 ? 'success' : 'partial',
        message: summary,
        data: { totalSuccess, totalFailed, results },
        durationMs: Date.now() - startTime,
        timestamp: new Date().toISOString(),
    };
}
