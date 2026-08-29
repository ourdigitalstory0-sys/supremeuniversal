/**
 * Cloudflare Pages Global Edge Middleware
 * Runs before every page request across the entire site.
 *
 * Features:
 * - Bot scraper detection & blocking
 * - Edge HTMLRewriter for Programmatic SEO Pre-rendering (Instant Googlebot Indexation)
 * - Injects security hardening headers
 * - IP-based rate limiting via KV store
 */

import { resolvePseoMetadata } from './lib/pseoEdgeMeta';

interface Env {
    PRICE_STORE: KVNamespace;
}

const BLOCKED_BOT_PATTERNS = [
    'scrapy', 'ahrefsbot', 'semrushbot', 'dotbot', 'mj12bot',
    'blexbot', 'petalbot', 'baiduspider', 'yandexbot', 'bytespider',
    'dataforseobot', 'serpstatbot', 'seokicks-robot'
];

const RATE_LIMIT_MAX = 10;      // max requests per window
const RATE_LIMIT_WINDOW = 3600; // 1 hour in seconds

export async function onRequest(context: {
    request: Request;
    next: () => Promise<Response>;
    env: Env;
}): Promise<Response> {
    const { request, next, env } = context;
    const url = new URL(request.url);
    const ua = (request.headers.get('user-agent') || '').toLowerCase();

    // 1. Block known scraper bots (keep search bots allowed)
    const isScraper = BLOCKED_BOT_PATTERNS.some(bot => ua.includes(bot));
    if (isScraper) {
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

    // 4. Edge HTML Prerendering for Programmatic SEO routes
    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('text/html')) {
        const pseoMeta = resolvePseoMetadata(url.pathname);
        if (pseoMeta) {
            const rewriter = new HTMLRewriter()
                .on('title', {
                    element(e) {
                        e.setInnerContent(pseoMeta.title);
                    }
                })
                .on('meta[name="description"]', {
                    element(e) {
                        e.setAttribute('content', pseoMeta.description);
                    }
                })
                .on('link[rel="canonical"]', {
                    element(e) {
                        e.setAttribute('href', pseoMeta.canonical);
                    }
                })
                .on('head', {
                    element(e) {
                        e.append(`<meta property="og:title" content="${pseoMeta.title.replace(/"/g, '&quot;')}" />`, { html: true });
                        e.append(`<meta property="og:description" content="${pseoMeta.description.replace(/"/g, '&quot;')}" />`, { html: true });
                        e.append(`<meta property="og:url" content="${pseoMeta.canonical}" />`, { html: true });
                        e.append(`<meta property="og:type" content="website" />`, { html: true });
                        e.append(`<meta name="twitter:card" content="summary_large_image" />`, { html: true });
                        e.append(`<meta name="twitter:title" content="${pseoMeta.title.replace(/"/g, '&quot;')}" />`, { html: true });
                        e.append(`<meta name="twitter:description" content="${pseoMeta.description.replace(/"/g, '&quot;')}" />`, { html: true });
                        e.append(`<script type="application/ld+json">${JSON.stringify(pseoMeta.schema)}</script>`, { html: true });
                    }
                })
                .on('div#root', {
                    element(e) {
                        // Pre-rendered semantic crawler fallback for Googlebot Wave 1 crawl
                        const prerenderHtml = `
<div id="ssr-edge-preview" style="display:none;" aria-hidden="true">
    <h1>${pseoMeta.h1}</h1>
    <p>${pseoMeta.description}</p>
    ${pseoMeta.faqs.map(f => `<div><h3>${f.q}</h3><p>${f.a}</p></div>`).join('')}
</div>`;
                        e.append(prerenderHtml, { html: true });
                    }
                });

            const newHeaders = new Headers(response.headers);
            newHeaders.set('X-Robots-Tag', 'index, follow');
            newHeaders.set('X-DNS-Prefetch-Control', 'on');
            newHeaders.set('X-XSS-Protection', '1; mode=block');
            newHeaders.set('X-Edge-Prerender', 'active');

            return rewriter.transform(new Response(response.body, {
                status: response.status,
                statusText: response.statusText,
                headers: newHeaders
            }));
        }
    }

    // 5. Inject additional Edge-level security headers for standard routes
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
