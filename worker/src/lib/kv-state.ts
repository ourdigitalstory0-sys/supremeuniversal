/**
 * KV State Management — Cloudflare KV helpers for the cron worker
 *
 * Provides typed get/set helpers for all cron job state objects,
 * with safe JSON parsing and automatic TTL management.
 */

import type { Env } from '../env.ts';

// ── Generic typed KV helpers ──────────────────────────────────────────────

export async function kvGet<T>(kv: KVNamespace, key: string): Promise<T | null> {
    const raw = await kv.get(key, 'text');
    if (!raw) return null;
    try {
        return JSON.parse(raw) as T;
    } catch {
        return null;
    }
}

export async function kvSet<T>(
    kv: KVNamespace,
    key: string,
    value: T,
    expirationTtl?: number
): Promise<void> {
    await kv.put(key, JSON.stringify(value), expirationTtl ? { expirationTtl } : undefined);
}

// ── Google Indexing State ─────────────────────────────────────────────────

export interface IndexingState {
    /** Running cursor: how many URLs have been submitted so far */
    cursor: number;
    /** Total URLs in the catalog (refreshed when cursor resets) */
    totalUrls: number;
    /** How many batches have been run total */
    totalBatches: number;
    /** ISO timestamp of last successful run */
    lastRun: string;
    /** ISO timestamp of cycle start (when cursor was last reset) */
    cycleStartedAt: string;
    /** URLs submitted in the last batch */
    lastBatchUrls: string[];
    /** API response codes from last batch {url: statusCode} */
    lastBatchResults: Record<string, number>;
    /** Cumulative error count for alerting */
    errorCount: number;
}

export async function getIndexingState(env: Env): Promise<IndexingState> {
    const stored = await kvGet<IndexingState>(env.CRON_STATE, 'cron:indexing:state');
    return stored ?? {
        cursor: 0,
        totalUrls: 0,
        totalBatches: 0,
        lastRun: '',
        cycleStartedAt: new Date().toISOString(),
        lastBatchUrls: [],
        lastBatchResults: {},
        errorCount: 0,
    };
}

export async function saveIndexingState(env: Env, state: IndexingState): Promise<void> {
    // Keep indexing state for 90 days
    await kvSet(env.CRON_STATE, 'cron:indexing:state', state, 60 * 60 * 24 * 90);
}

// ── Health Monitor State ──────────────────────────────────────────────────

export interface HealthCheckResult {
    url: string;
    status: number;
    ok: boolean;
    latencyMs: number;
    checkedAt: string;
}

export interface HealthState {
    lastCheck: string;
    results: HealthCheckResult[];
    failedUrls: string[];
    alertSentAt?: string;
}

export async function getHealthState(env: Env): Promise<HealthState | null> {
    return kvGet<HealthState>(env.CRON_STATE, 'cron:health:last_check');
}

export async function saveHealthState(env: Env, state: HealthState): Promise<void> {
    await kvSet(env.CRON_STATE, 'cron:health:last_check', state, 60 * 60 * 48);
}

// ── Lead Digest State ─────────────────────────────────────────────────────

export interface LeadDigestState {
    lastDigestSentAt: string;
    totalLeadsSent: number;
    lastLeadCount: number;
}

export async function getLeadDigestState(env: Env): Promise<LeadDigestState | null> {
    return kvGet<LeadDigestState>(env.CRON_STATE, 'cron:leads:digest_cursor');
}

export async function saveLeadDigestState(env: Env, state: LeadDigestState): Promise<void> {
    await kvSet(env.CRON_STATE, 'cron:leads:digest_cursor', state, 60 * 60 * 24 * 30);
}

// ── Cron Run Log ──────────────────────────────────────────────────────────

export interface CronRunEntry {
    runAt: string;
    cron: string;
    jobs: string[];
    success: boolean;
    durationMs: number;
}

export async function appendCronRunLog(env: Env, entry: CronRunEntry): Promise<void> {
    const existing = await kvGet<CronRunEntry[]>(env.CRON_STATE, 'cron:run:log') ?? [];
    // Keep last 50 entries
    const updated = [entry, ...existing].slice(0, 50);
    await kvSet(env.CRON_STATE, 'cron:run:log', updated, 60 * 60 * 24 * 30);
}
