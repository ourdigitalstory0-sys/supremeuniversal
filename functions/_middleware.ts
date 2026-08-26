/**
 * Cloudflare Pages Global Edge Middleware
 * Runs before every page request across the entire site.
 *
 * Features:
 * - Bot scraper detection & blocking
 * - Injects security hardening headers
 * - IP-based rate limiting via KV store
 */

interface Env {
    PRICE_STORE: KVNamespace;
}

const BLOCKED_BOT_PATTERNS = [
    'scrapy', 'ahrefsbot', 'semrushbot', 'dotbot', 'mj12bot',
    'blexbot', 'petalbot', 'baiduspider', 'yandexbot', 'bytespider',
    'dataforseobot', 'serpstatbot', 'seokicks-robot'
];

const RATE_LIMIT_MAX = 5;       // max requests per window
const RATE_LIMIT_WINDOW = 3600; // 1 hour in seconds

export async function onRequest(context: {
    request: Request;
    next: () => Promise<Response>;
    env: Env;
}): Promise<Response> {
    const { request, next, env } = context;
    const url = new URL(request.url);
    const ua = (request.headers.get('user-agent') || '').toLowerCase();

    // 1. Block known scraper bots
    const isBot = BLOCKED_BOT_PATTERNS.some(bot => ua.includes(bot));
    if (isBot) {
        return new Response('Access denied.', {
            status: 403,
            headers: { 'Content-Type': 'text/plain' }
        });
    }

    // 2. IP Rate Limiting for API routes only
    if (url.pathname.startsWith('/api/') && env.PRICE_STORE) {
        const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
        const rateLimitKey = `rate:${ip}:${url.pathname}`;

        const current = parseInt((await env.PRICE_STORE.get(rateLimitKey)) || '0', 10);

        if (current >= RATE_LIMIT_MAX) {
            return new Response(JSON.stringify({
                success: false,
                message: 'Too many requests. Please try again in an hour.'
            }), {
                status: 429,
                headers: {
                    'Content-Type': 'application/json',
                    'Retry-After': String(RATE_LIMIT_WINDOW)
                }
            });
        }

        // Increment counter with TTL
        await env.PRICE_STORE.put(rateLimitKey, String(current + 1), {
            expirationTtl: RATE_LIMIT_WINDOW
        });
    }

    // 3. Serve the page/asset normally
    const response = await next();

    // 4. Inject additional Edge-level security headers
    const newHeaders = new Headers(response.headers);
    newHeaders.set('X-Robots-Tag', 'index, follow');
    newHeaders.set('X-DNS-Prefetch-Control', 'on');
    newHeaders.set('X-XSS-Protection', '1; mode=block');

    return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders
    });
}
