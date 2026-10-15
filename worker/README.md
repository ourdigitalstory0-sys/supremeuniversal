# Supreme Universal — Advanced Cloudflare Cron Worker v2.0

## Overview

A standalone **Cloudflare Worker** (`/worker`) running 6 scheduled cron jobs that power the complete SEO automation pipeline for **Supreme Rivana Punawale** and the Pune Real Estate programmatic SEO catalog.

---

## Architecture

```
worker/
├── wrangler.toml              ← Worker config + 6 cron triggers + KV bindings
├── package.json
├── tsconfig.json
└── src/
    ├── index.ts               ← Main orchestrator (scheduled + fetch handlers)
    ├── env.ts                 ← Cloudflare env types, KV key constants
    ├── lib/
    │   ├── google-auth.ts     ← RS256 JWT via Web Crypto (no googleapis)
    │   ├── kv-state.ts        ← Typed KV read/write helpers
    │   ├── url-generator.ts   ← Full 14,500+ URL catalog generator
    │   └── logger.ts          ← Structured logger → console + KV + Webhook
    └── jobs/
        ├── google-indexing.ts ← 190 URLs/day Google Indexing API
        ├── sitemap-ping.ts    ← Ping Google + Bing with all 8 sitemaps
        ├── kv-price-sync.ts   ← Refresh 5 KV keys every 6 hours
        ├── lead-digest.ts     ← Weekly HTML email digest via SendGrid
        ├── web-stories-refresh.ts ← Schema.org data for 5 Web Stories
        └── health-monitor.ts  ← 18-page latency + status checker
```

---

## Cron Schedule

| Cron | IST Time | Job | Description |
|------|----------|-----|-------------|
| `0 0 * * *` | 05:30 IST | **SEO Health Monitor** | Checks 18 critical pages for HTTP 200 + latency |
| `0 1 * * *` | 06:30 IST | **Sitemap Ping** | Pings Google & Bing with all 8 sitemaps |
| `0 2 * * *` | 07:30 IST | **Google Indexing API** | Submits 190 URLs/day, cursor-based cycle |
| `0 */6 * * *` | Every 6h | **KV Price Sync** | Refreshes pricing + metadata in PRICE_STORE KV |
| `0 3 * * 1` | Mon 08:30 IST | **Lead Digest** | Weekly HTML email with lead breakdown |
| `0 4 * * *` | 09:30 IST | **Web Stories Refresh** | Schema.org data for 5 Google Web Stories |

---

## One-Time Setup

### 1. Create the CRON_STATE KV namespace

```bash
cd worker
npx wrangler kv:namespace create CRON_STATE
```

Copy the returned `id` and `preview_id` into `wrangler.toml` under the `CRON_STATE` binding.

### 2. Set secrets from your `service-account.json`

```bash
# Google Indexing API (from service-account.json)
npx wrangler secret put GOOGLE_SERVICE_ACCOUNT_EMAIL
# → paste: the client_email value

npx wrangler secret put GOOGLE_PRIVATE_KEY
# → paste: the private_key value (full PEM including \n)

# Optional: Slack/Discord/Telegram webhook for alerts
npx wrangler secret put NOTIFICATION_WEBHOOK_URL
# → paste: https://hooks.slack.com/... or https://discord.com/api/webhooks/...

# Optional: SendGrid API key for weekly lead digest
npx wrangler secret put EMAIL_API_KEY
# → paste: SG.xxxxx
```

### 3. Deploy

```bash
cd worker
npm install
npm run deploy
```

---

## Google Indexing API — How It Works

The worker uses **Web Crypto API** (native to Cloudflare Workers) to:
1. Sign RS256 JWT using your service account's PKCS#8 private key
2. Exchange JWT for OAuth2 access token via `https://oauth2.googleapis.com/token`
3. Submit up to **190 URLs/day** to `https://indexing.googleapis.com/v3/urlNotifications:publish`

**Cursor logic:** Progress is stored in `CRON_STATE` KV (`cron:indexing:state`). The cursor advances by 190 each day. When it reaches the end of the 14,576-URL catalog, it resets to 0 and starts a new cycle.

**Full cycle time:** ~77 days to submit all URLs once (14,576 ÷ 190/day)

---

## Admin HTTP Endpoints

The Worker also serves HTTP for manual management:

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/` | Worker info (public) |
| `GET` | `/status` | Full cron state from KV (auth required) |
| `GET` | `/logs/:job` | Last 200 log entries (auth required) |
| `POST` | `/trigger` | Manually run any job (auth required) |

**Auth:** `Authorization: Bearer <GOOGLE_SERVICE_ACCOUNT_EMAIL>`

**Manual trigger example:**
```bash
curl -X POST https://supremeuniversal-cron.<account>.workers.dev/trigger \
  -H "Authorization: Bearer <your-service-account-email>" \
  -H "Content-Type: application/json" \
  -d '{"job": "health-monitor"}'
```

**Valid job names:** `health-monitor`, `sitemap-ping`, `google-indexing`, `kv-price-sync`, `lead-digest`, `web-stories-refresh`

---

## KV Namespaces

| Binding | Purpose |
|---------|---------|
| `PRICE_STORE` | Shared with Pages site — pricing, metadata, web stories |
| `CRON_STATE` | Cron-exclusive — indexing state, health results, logs |

### PRICE_STORE keys written by cron

| Key | TTL | Contents |
|-----|-----|----------|
| `rivana:pricing:v2` | 7h | Full pricing object |
| `rivana:price:2bhk` | 7h | Quick 2BHK price lookup |
| `rivana:price:3bhk` | 7h | Quick 3BHK price lookup |
| `rivana:meta:v2` | 24h | Project metadata + developer info |
| `rivana:amenities` | 7d | Amenities array |
| `rivana:web-stories:catalog` | 25h | Stories catalog list |
| `rivana:web-story:schema:<id>` | 25h | Per-story Schema.org JSON |
| `rivana:web-stories:sitemap` | 25h | Sitemap entries for stories |

---

## Monitoring & Alerts

Set `NOTIFICATION_WEBHOOK_URL` to a **Slack, Discord, or Telegram** webhook to receive:

- ✅ Daily indexing batch completion (URLs submitted, cursor position)
- 🚨 Site down or response time >5s
- ⚠️ Performance warning >2s
- ⚠️ Sitemap ping failures
- 📬 Weekly lead digest sent confirmation
- 🔄 Full indexing cycle complete (every ~77 days)

---

## Development & Testing

```bash
# Run locally with cron simulation
cd worker
npm run dev
# → Visit http://localhost:8787

# Trigger a cron manually in local dev
curl http://localhost:8787/__scheduled?cron=0+2+*+*+*

# Tail live logs after deploying
npm run tail

# Type check
npx tsc --noEmit
```

---

## Cost

Cloudflare Workers Free tier includes **100,000 requests/day** and **1,000 cron invocations/month** — this worker uses **6 cron invocations/day (~180/month)**, well within the free tier. KV reads/writes: 6 cron runs × ~20 KV ops = ~120/day vs. 100k free limit.

**Total cost: $0/month** on the Workers Free plan.
