/**
 * Structured Logger for the Cron Worker
 *
 * Logs to:
 *  1. console (visible in `wrangler tail`)
 *  2. Cloudflare KV (last N entries per job, queryable via admin endpoint)
 */

import type { Env } from '../env.ts';
import { kvGet, kvSet } from './kv-state.ts';

export type LogLevel = 'info' | 'warn' | 'error' | 'debug';

interface LogEntry {
    ts: string;
    level: LogLevel;
    job: string;
    msg: string;
    data?: unknown;
}

export class Logger {
    private entries: LogEntry[] = [];

    constructor(
        private readonly env: Env,
        private readonly job: string = 'system'
    ) {}

    log(level: LogLevel, msg: string, data?: unknown) {
        const entry: LogEntry = {
            ts: new Date().toISOString(),
            level,
            job: this.job,
            msg,
            data,
        };
        this.entries.push(entry);

        // Console output for wrangler tail
        const prefix = `[${entry.ts}] [${level.toUpperCase()}] [${this.job}]`;
        if (level === 'error') {
            console.error(prefix, msg, data ?? '');
        } else if (level === 'warn') {
            console.warn(prefix, msg, data ?? '');
        } else {
            console.log(prefix, msg, data ?? '');
        }
    }

    info(msg: string, data?: unknown)  { this.log('info',  msg, data); }
    warn(msg: string, data?: unknown)  { this.log('warn',  msg, data); }
    error(msg: string, data?: unknown) { this.log('error', msg, data); }
    debug(msg: string, data?: unknown) { this.log('debug', msg, data); }

    /** Persist last 200 log entries to KV for the dashboard endpoint */
    async flush(): Promise<void> {
        if (this.entries.length === 0) return;
        const key = `cron:log:${this.job}`;
        const existing = await kvGet<LogEntry[]>(this.env.CRON_STATE, key) ?? [];
        const updated = [...this.entries, ...existing].slice(0, 200);
        await kvSet(this.env.CRON_STATE, key, updated, 60 * 60 * 24 * 7); // 7 days
        this.entries = [];
    }

    /** Send a Slack/Discord/Telegram webhook alert */
    async sendWebhookAlert(title: string, body: string, level: 'info' | 'warn' | 'error' = 'info'): Promise<void> {
        if (!this.env.NOTIFICATION_WEBHOOK_URL) return;

        const COLORS: Record<string, string> = { info: '#2563eb', warn: '#f59e0b', error: '#dc2626' };
        const EMOJIS: Record<string, string> = { info: 'ℹ️', warn: '⚠️', error: '🚨' };

        const payload = {
            embeds: [{
                title:       `${EMOJIS[level]} ${title}`,
                description: body,
                color:       parseInt(COLORS[level].replace('#', ''), 16),
                footer:      { text: `Supreme Universal Cron • ${new Date().toISOString()}` },
            }],
        };

        try {
            await fetch(this.env.NOTIFICATION_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
        } catch (e) {
            console.error('[Logger] Webhook delivery failed:', e);
        }
    }
}
