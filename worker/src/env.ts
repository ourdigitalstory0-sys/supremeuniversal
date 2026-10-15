/**
 * Cloudflare Worker Environment Interface
 * All bindings, secrets, and vars declared here for full TypeScript intellisense.
 */

export interface Env {
    // ── KV Namespaces ──────────────────────────────────────────────
    /** Shared pricing + lead store (same namespace as Pages site) */
    PRICE_STORE: KVNamespace;
    /** Cron-exclusive state: indexing progress, health results, digests */
    CRON_STATE: KVNamespace;

    // ── Workers AI ─────────────────────────────────────────────────
    AI?: Ai;

    // ── Secrets (set via: wrangler secret put <NAME>) ──────────────
    /** Google Service Account client_email (from service-account.json) */
    GOOGLE_SERVICE_ACCOUNT_EMAIL: string;
    /** Google Service Account private_key PEM (from service-account.json) */
    GOOGLE_PRIVATE_KEY: string;
    /** Slack / Discord / Telegram webhook URL for SEO alerts */
    NOTIFICATION_WEBHOOK_URL?: string;
    /** SendGrid / Mailgun API key for lead digest emails */
    EMAIL_API_KEY?: string;

    // ── Vars (non-secret, set in wrangler.toml [vars]) ─────────────
    DOMAIN: string;
    PROJECT_NAME: string;
    RERA_NUMBER: string;
    PRICE_2BHK: string;
    PRICE_3BHK: string;
    ALERT_EMAIL_TO: string;
}

// ── KV State Key Constants ─────────────────────────────────────────────────
export const KV_KEYS = {
    // Google Indexing
    INDEXING_STATE:      'cron:indexing:state',
    INDEXING_URL_CURSOR: 'cron:indexing:cursor',

    // Sitemap ping
    SITEMAP_PING_LOG:    'cron:sitemap:last_ping',

    // KV Price sync
    PRICE_LAST_SYNC:     'cron:price:last_sync',

    // Lead digest
    LEAD_DIGEST_CURSOR:  'cron:leads:digest_cursor',
    LEAD_DIGEST_LOG:     'cron:leads:last_digest',

    // Web stories
    STORIES_LAST_REFRESH: 'cron:stories:last_refresh',

    // Health monitor
    HEALTH_LAST_CHECK:   'cron:health:last_check',
    HEALTH_ALERT_SENT:   'cron:health:alert_sent_at',

    // Master log
    CRON_RUN_LOG:        'cron:run:log',
} as const;

// ── Shared Result Type ─────────────────────────────────────────────────────
export interface JobResult {
    job: string;
    status: 'success' | 'partial' | 'skipped' | 'error';
    message: string;
    data?: Record<string, unknown>;
    durationMs: number;
    timestamp: string;
}
