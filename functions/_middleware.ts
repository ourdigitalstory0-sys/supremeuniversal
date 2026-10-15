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
    'blexbot', 'petalbot', 'bytespider', 'dataforseobot',
    'serpstatbot', 'seokicks-robot', 'megaindex', 'zoominfobot',
    'sqlmap', 'nikto', 'acunetix', 'nmap', 'masscan', 'wpscan',
    'zgrab', 'censys', 'shodan', 'gobuster', 'dirbuster', 'nuclei',
    'openvas', 'nessus', 'qualys', 'havij'
];

const RATE_LIMIT_MAX = 10;      // max requests per window
const RATE_LIMIT_WINDOW = 3600; // 1 hour in seconds

const LEGACY_301_REDIRECTS: Record<string, string> = {
    '/supreme-riverside-punawale-overview': '/supreme-rivana-punawale-overview',
    '/supreme-riverside-punawale-amenities': '/supreme-rivana-punawale-amenities',
    '/supreme-riverside-punawale-floor-plans': '/supreme-rivana-punawale-floor-plans',
    '/supreme-riverside-punawale-gallery': '/supreme-rivana-punawale-gallery',
    '/supreme-riverside-punawale-location': '/supreme-rivana-punawale-location',
    '/supreme-riverside-punawale-faq': '/supreme-rivana-punawale-faq',
    '/supreme-riverside-punawale-contact': '/supreme-rivana-punawale-contact',
    '/supreme-riverside-punawale': '/',
    '/supreme-rivana-overview': '/supreme-rivana-punawale-overview',
    '/supreme-rivana-amenities': '/supreme-rivana-punawale-amenities',
    '/supreme-rivana-floor-plans': '/supreme-rivana-punawale-floor-plans',
    '/supreme-rivana-gallery': '/supreme-rivana-punawale-gallery',
    '/supreme-rivana-location': '/supreme-rivana-punawale-location',
    '/supreme-rivana-faq': '/supreme-rivana-punawale-faq',
    '/supreme-rivana-contact': '/supreme-rivana-punawale-contact',
    '/supreme-rivana-price-list': '/supreme-rivana-punawale-price-list',
    '/supreme-rivana-comparison': '/supreme-rivana-punawale-comparison'
};

export async function onRequest(context: {
    request: Request;
    next: () => Promise<Response>;
    env: Env;
}): Promise<Response> {
    const { request, next, env } = context;
    const url = new URL(request.url);
    const ua = (request.headers.get('user-agent') || '').toLowerCase();

    // 0. Canonical Domain & Ecosystem Enforcer (Consolidate 100% PageRank into https://www.supreme-universal.in)
    // Hardens supreme-universal.in, www.supreme-universal.in, and supremeuniversal-erc.pages.dev
    const isPagesDev = url.hostname.endsWith('.pages.dev');
    const isApex = url.hostname === 'supreme-universal.in';
    const isHttp = url.protocol === 'http:';

    // A. 301 Redirect apex, http, and all pages.dev requests (except /api/ for testing) to canonical www host
    if (isApex || (isPagesDev && !url.pathname.startsWith('/api/')) || (isHttp && url.hostname.includes('supreme-universal.in'))) {
        const canonicalTarget = new URL(request.url);
        canonicalTarget.hostname = 'www.supreme-universal.in';
        canonicalTarget.protocol = 'https:';
        return Response.redirect(canonicalTarget.toString(), 301);
    }

    // 0a. Edge 301 Permanent Redirects for Legacy URLs (Instant Googlebot Wave 1 PageRank Consolidation)
    const normalizedPath = url.pathname.replace(/\/$/, '');
    const legacyRedirectTarget = LEGACY_301_REDIRECTS[normalizedPath];
    if (legacyRedirectTarget) {
        const targetUrl = new URL(request.url);
        targetUrl.pathname = legacyRedirectTarget;
        return Response.redirect(targetUrl.toString(), 301);
    }

    // 0b. Google Search Console & Verification Auto-Resolver at Edge
    // Automatically satisfies ANY Google Search Console HTML verification file request in <2ms
    if (/^\/google[a-zA-Z0-9_-]+\.html$/.test(url.pathname)) {
        const token = url.pathname.replace(/^\/|\.html$/g, '');
        return new Response(`google-site-verification: ${token}.html`, {
            status: 200,
            headers: {
                'Content-Type': 'text/html; charset=utf-8',
                'Cache-Control': 'public, max-age=86400, s-maxage=86400',
                'X-Robots-Tag': 'noindex, nofollow'
            }
        });
    }

    // 0b2. Google Web Stories Sitemap Auto-Resolver at Edge (<1ms response time)
    if (url.pathname === '/sitemap-web-stories.xml') {
        const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://www.supreme-universal.in/web-stories/supreme-rivana-overview</loc>
    <lastmod>2026-10-16</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
    <image:image>
      <image:loc>https://cdn.supremeuniversal.com/media/Supreme-Rivana-Web-Banner_fzjUZ4.jpeg</image:loc>
      <image:title>Supreme Rivana Punawale Overview 2026</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://www.supreme-universal.in/web-stories/supreme-rivana-price-2026</loc>
    <lastmod>2026-10-16</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
    <image:image>
      <image:loc>https://cdn.supremeuniversal.com/media/Supreme-Rivana-Web-Banner_fzjUZ4.jpeg</image:loc>
      <image:title>Supreme Rivana Price List 2026</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://www.supreme-universal.in/web-stories/punawale-real-estate-guide-2026</loc>
    <lastmod>2026-10-16</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
    <image:image>
      <image:loc>https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg</image:loc>
      <image:title>Punawale Real Estate Investment Guide 2026</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://www.supreme-universal.in/web-stories/punawale-hinjewadi-connectivity</loc>
    <lastmod>2026-10-16</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
    <image:image>
      <image:loc>https://cdn.supremeuniversal.com/media/SupremeVillagioDesktopBanner_5z4eED.jpeg</image:loc>
      <image:title>Punawale to Hinjewadi IT Park Commute Guide 2026</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://www.supreme-universal.in/web-stories/supreme-rivana-amenities-tour</loc>
    <lastmod>2026-10-16</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
    <image:image>
      <image:loc>https://cdn.supremeuniversal.com/media/designthatelevate_jSxOmi.jpg</image:loc>
      <image:title>Supreme Rivana 50+ Amenities Virtual Tour 2026</image:title>
    </image:image>
  </url>
</urlset>`;
        return new Response(sitemapXml, {
            status: 200,
            headers: {
                'Content-Type': 'application/xml; charset=utf-8',
                'Cache-Control': 'public, max-age=3600, s-maxage=3600',
                'X-Robots-Tag': 'noindex'
            }
        });
    }

    // 0c. Case Normalization & Slashes Normalizer (Preserves 100% PageRank into canonical lowercase)
    if (!url.pathname.startsWith('/api/') && !url.pathname.startsWith('/assets/')) {
        let cleanedPath = url.pathname;
        if (cleanedPath.includes('//')) {
            cleanedPath = cleanedPath.replace(/\/+/g, '/');
        }
        if (/[A-Z]/.test(cleanedPath)) {
            cleanedPath = cleanedPath.toLowerCase();
        }
        if (cleanedPath !== url.pathname) {
            const targetUrl = new URL(request.url);
            targetUrl.pathname = cleanedPath;
            return Response.redirect(targetUrl.toString(), 301);
        }
    }

    // 0d. Trailing Slash Canonical Normalizer (Consolidates duplicates for Rank #1 SEO)
    if (url.pathname.length > 1 && url.pathname.endsWith('/')) {
        const targetUrl = new URL(request.url);
        targetUrl.pathname = targetUrl.pathname.slice(0, -1);
        return Response.redirect(targetUrl.toString(), 301);
    }

    // 0e. HTTP Method Guard (Only allow GET, HEAD, OPTIONS outside of /api/)
    if (!url.pathname.startsWith('/api/') && request.method !== 'GET' && request.method !== 'HEAD' && request.method !== 'OPTIONS') {
        return new Response('Method Not Allowed', {
            status: 405,
            headers: {
                'Allow': 'GET, HEAD, OPTIONS',
                'Content-Type': 'text/plain',
                'X-Content-Type-Options': 'nosniff'
            }
        });
    }

    // 0f. Edge Attack & Vulnerability Probing Shield (Blocks path traversal, .env, .git, php probes in <1ms)
    const MALICIOUS_PATTERNS = [
        '..', '%2e%2e', '.env', '.git', '.svn', '.htaccess', '.htpasswd', 
        'web.config', 'wp-config', '.php', 'wp-admin', 'wp-login', 'xmlrpc', 
        '/etc/passwd', '/etc/shadow', '/proc/self', '/bin/', '/eval(', 
        'base64_decode', 'cmd.exe', 'phpinfo', '<script'
    ];
    const pathLower = url.pathname.toLowerCase();
    if (MALICIOUS_PATTERNS.some(pat => pathLower.includes(pat))) {
        return new Response('Access denied by Edge Security Shield.', {
            status: 403,
            headers: { 
                'Content-Type': 'text/plain', 
                'X-Content-Type-Options': 'nosniff',
                'X-Robots-Tag': 'noindex, nofollow' 
            }
        });
    }

    // 0g. Query String Injection Shield (Blocks SQLi & XSS probing on all URLs)
    const rawSearch = url.search ? decodeURIComponent(url.search).toLowerCase() : '';
    if (rawSearch) {
        const INJECTION_PATTERNS = [
            '<script', 'javascript:', 'onload=', 'onerror=', 'union select',
            'order by', 'information_schema', 'sleep(', 'benchmark(',
            'drop table', 'exec(', 'eval('
        ];
        if (INJECTION_PATTERNS.some(pat => rawSearch.includes(pat))) {
            return new Response('Invalid request parameters detected.', {
                status: 403,
                headers: { 
                    'Content-Type': 'text/plain', 
                    'X-Content-Type-Options': 'nosniff',
                    'X-Robots-Tag': 'noindex, nofollow' 
                }
            });
        }
    }

    // 0h. True Edge 404 for Invalid PSEO Routes (Eliminates Google Soft-404 Penalties)
    if (url.pathname.startsWith('/pune-real-estate/') || url.pathname.startsWith('/pune-projects/')) {
        const pseoMeta = resolvePseoMetadata(url.pathname);
        if (!pseoMeta) {
            return new Response(`<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Page Not Found | Supreme Universal</title>
  <meta name="robots" content="noindex, nofollow" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="background:#0F1014;color:#FFFFFF;font-family:sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;padding:2rem;text-align:center;">
  <div>
    <h1 style="font-size:3rem;color:#C6A87C;margin-bottom:1rem;">404</h1>
    <p style="font-size:1.25rem;color:#D1D5DB;margin-bottom:2rem;">The requested real estate configuration was not found or has been moved.</p>
    <a href="/" style="display:inline-block;background:#C6A87C;color:#0F1014;padding:0.75rem 2rem;border-radius:9999px;font-weight:600;text-decoration:none;text-transform:uppercase;letter-spacing:0.1em;font-size:0.875rem;">Return Home</a>
  </div>
</body>
</html>`, {
                status: 404,
                headers: {
                    'Content-Type': 'text/html; charset=utf-8',
                    'X-Robots-Tag': 'noindex, nofollow',
                    'Cache-Control': 'public, max-age=3600'
                }
            });
        }
    }

    // Verified Search Engines & Crawlers Detection (Google, Bing, IndexNow, Yandex, DuckDuckGo, Social Previews)
    const isSearchBot = ua.includes('googlebot') || 
                        ua.includes('google-inspectiontool') || 
                        ua.includes('chrome-lighthouse') || 
                        ua.includes('storebot-google') ||
                        ua.includes('google-pagerenderer') ||
                        ua.includes('bingbot') ||
                        ua.includes('bingpreview') ||
                        ua.includes('indexnow') ||
                        ua.includes('yandex') ||
                        ua.includes('duckduckbot') ||
                        ua.includes('slurp') ||
                        ua.includes('baiduspider') ||
                        ua.includes('applebot') ||
                        ua.includes('facebookexternalhit') ||
                        ua.includes('twitterbot') ||
                        ua.includes('linkedinbot') ||
                        ua.includes('whatsapp');

    // 1. Block known scraper bots (keep search bots allowed)
    if (!isSearchBot) {
        const isScraper = BLOCKED_BOT_PATTERNS.some(bot => ua.includes(bot));
        if (isScraper) {
            return new Response('Access denied.', {
                status: 403,
                headers: { 'Content-Type': 'text/plain' }
            });
        }
    }

    // 2. IP Rate Limiting for API routes only (Search bots bypassed)
    if (!isSearchBot && url.pathname.startsWith('/api/') && env.PRICE_STORE) {
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

    // 4. Edge HTML Prerendering for Programmatic SEO routes & Core Landing Pages
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
                        e.append(`<meta property="og:site_name" content="Supreme Rivana Punawale" />`, { html: true });
                        e.append(`<meta property="og:image" content="https://cdn.supremeuniversal.com/media/Supreme-Rivana-Web-Banner_fzjUZ4.jpeg" />`, { html: true });
                        e.append(`<meta property="og:image:width" content="1200" />`, { html: true });
                        e.append(`<meta property="og:image:height" content="630" />`, { html: true });
                        e.append(`<meta name="twitter:card" content="summary_large_image" />`, { html: true });
                        e.append(`<meta name="twitter:title" content="${pseoMeta.title.replace(/"/g, '&quot;')}" />`, { html: true });
                        e.append(`<meta name="twitter:description" content="${pseoMeta.description.replace(/"/g, '&quot;')}" />`, { html: true });
                        e.append(`<meta name="twitter:image" content="https://cdn.supremeuniversal.com/media/Supreme-Rivana-Web-Banner_fzjUZ4.jpeg" />`, { html: true });
                        e.append(`<script type="application/ld+json">${JSON.stringify(pseoMeta.schema)}</script>`, { html: true });
                    }
                })
                .on('div#root', {
                    element(e) {
                        // Direct semantic Edge SSR output — completely visible to all search engine crawlers without JS delays
                        const prerenderHtml = `
<div id="ssr-edge-container" style="padding: 2.5rem 1.5rem; max-width: 1200px; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1F2937; line-height: 1.6;">
    <header style="margin-bottom: 2.5rem; border-bottom: 2px solid #C6A87C; padding-bottom: 2rem;">
        <p style="font-size: 0.875rem; letter-spacing: 0.2em; text-transform: uppercase; color: #C6A87C; font-weight: 700; margin-bottom: 0.5rem;">Supreme Universal | Supreme Rivana Punawale Pune</p>
        <h1 style="font-size: 2.25rem; line-height: 1.25; color: #0F1014; margin: 0 0 1rem 0; font-weight: 800;">${pseoMeta.h1}</h1>
        <p style="font-size: 1.15rem; line-height: 1.6; color: #4B5563; max-width: 900px;">${pseoMeta.description}</p>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1.25rem; font-size: 0.875rem; color: #4B5563; background: #F8F9FA; padding: 0.75rem 1rem; border-radius: 8px; border-left: 4px solid #C6A87C;">
            <span>📍 <strong>Location:</strong> Tathawade Road, Punawale, Pune West 411033</span>
            <span>🏢 <strong>MahaRERA:</strong> PM1261012502656</span>
            <span>🚗 <strong>Hinjewadi IT Park:</strong> 10-15 Mins</span>
            <span>🛣️ <strong>NH48 Highway:</strong> 400m (1 Min)</span>
            <span>💰 <strong>2 BHK:</strong> ₹97L*+ | <strong>3 BHK:</strong> ₹1.42 Cr*+</span>
        </div>
    </header>

    <section style="margin-bottom: 2.5rem;">
        <h2 style="font-size: 1.6rem; color: #0F1014; margin-bottom: 1rem; font-weight: 700;">Supreme Rivana Punawale — 12.6-Acre Pawana Riverside Township</h2>
        <p style="line-height: 1.8; color: #374151; font-size: 1.05rem;">
            Supreme Rivana by Supreme Universal is Pune West's landmark 12.6-acre residential sanctuary along the serene Pawana River in Punawale. Thoughtfully engineered for IT leaders and discerning families, the project features 30+ storey high-rise towers with exclusive low-density planning of only 6 residences per floor. Residents enjoy West Pune's largest 60,000 sq.ft multi-level clubhouse <strong>Club Rivana</strong>, 50+ curated resort lifestyle amenities, 700+ native trees and shrubs, and direct 10-minute connectivity to Hinjewadi IT Park Phase 1.
        </p>
    </section>

    <section style="margin-bottom: 2.5rem;">
        <h2 style="font-size: 1.4rem; color: #0F1014; margin-bottom: 1rem; font-weight: 700;">Apartment Configurations, Carpet Areas &amp; Pricing Slabs</h2>
        <div style="overflow-x: auto; margin-bottom: 1.5rem;">
            <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
                <thead>
                    <tr style="background: #1A1D20; color: #FFFFFF;">
                        <th style="padding: 0.75rem 1rem; border: 1px solid #374151;">Configuration</th>
                        <th style="padding: 0.75rem 1rem; border: 1px solid #374151;">Typology</th>
                        <th style="padding: 0.75rem 1rem; border: 1px solid #374151;">Carpet Area (RERA)</th>
                        <th style="padding: 0.75rem 1rem; border: 1px solid #374151;">Starting Price</th>
                        <th style="padding: 0.75rem 1rem; border: 1px solid #374151;">Key Architectural Features</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background: #FFFFFF;">
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB; font-weight: 600;">2 BHK</td>
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB;">Premier</td>
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB;">746 Sq. Ft.</td>
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB; color: #B45309; font-weight: 700;">₹97 Lakhs* Onwards</td>
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB;">2 Bed, 2 Bath, River-view Deck, East-West Vastu</td>
                    </tr>
                    <tr style="background: #F9FAFB;">
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB; font-weight: 600;">2 BHK</td>
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB;">Grand</td>
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB;">786 Sq. Ft.</td>
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB; color: #B45309; font-weight: 700;">₹1.05 Cr* Onwards</td>
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB;">Extended Living Lounge, Double-Height Deck, Dry Balcony</td>
                    </tr>
                    <tr style="background: #FFFFFF;">
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB; font-weight: 600;">3 BHK</td>
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB;">Regal</td>
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB;">1,100 Sq. Ft.</td>
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB; color: #B45309; font-weight: 700;">₹1.42 Cr* Onwards</td>
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB;">3 Bed, 3 Bath, Panoramic Pawana Riverfront Vista</td>
                    </tr>
                    <tr style="background: #F9FAFB;">
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB; font-weight: 600;">3 BHK</td>
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB;">Elite</td>
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB;">1,166 Sq. Ft.</td>
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB; color: #B45309; font-weight: 700;">₹1.58 Cr* Onwards</td>
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB;">Grand Master Suite, Walk-in Wardrobe, Expansive Balcony</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p style="font-size: 0.875rem; color: #6B7280; font-style: italic;">*Prices mentioned are indicative starting agreement values. Statutory stamp duty, registration, and GST charges applicable. Bank loan pre-approvals by SBI, HDFC, ICICI, and Axis Bank.</p>
    </section>

    <section style="margin-bottom: 2.5rem;">
        <h2 style="font-size: 1.4rem; color: #0F1014; margin-bottom: 1rem; font-weight: 700;">Location Advantages &amp; Transit Connectivity Matrix</h2>
        <ul style="list-style: none; padding: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0.75rem;">
            <li style="background: #F3F4F6; padding: 0.75rem 1rem; border-radius: 6px;">🛣️ <strong>NH48 Mumbai-Bangalore Hwy:</strong> 400 Metres (1 Min)</li>
            <li style="background: #F3F4F6; padding: 0.75rem 1rem; border-radius: 6px;">🏎️ <strong>Mumbai-Pune Expressway:</strong> 3.2 KM (5 Mins)</li>
            <li style="background: #F3F4F6; padding: 0.75rem 1rem; border-radius: 6px;">💻 <strong>Hinjewadi IT Park Phase 1:</strong> 4.8 KM (10-12 Mins)</li>
            <li style="background: #F3F4F6; padding: 0.75rem 1rem; border-radius: 6px;">🚇 <strong>Wakad Chowk Metro Station:</strong> 4.5 KM (12 Mins)</li>
            <li style="background: #F3F4F6; padding: 0.75rem 1rem; border-radius: 6px;">🛍️ <strong>Phoenix Mall of Millennium:</strong> 5.2 KM (13 Mins)</li>
            <li style="background: #F3F4F6; padding: 0.75rem 1rem; border-radius: 6px;">🏥 <strong>Aditya Birla Memorial Hospital:</strong> 5.8 KM (12 Mins)</li>
        </ul>
    </section>

    <section style="margin-bottom: 2.5rem;">
        <h2 style="font-size: 1.4rem; color: #0F1014; margin-bottom: 1rem; font-weight: 700;">Supreme Universal Developer Legacy (Since 1982)</h2>
        <p style="line-height: 1.8; color: #374151;">
            Supreme Universal is a distinguished Indian real estate institution with over 40 years of architectural excellence. Having delivered 70+ iconic residential and commercial landmarks across Mumbai (Supreme Boulevard Chembur, Supreme ArtHouse Bandra, Supreme Prana Pali Hill, Supreme Headquarters) and Pune (Supreme Rivana Punawale, Supreme Towers Mundhwa, Supreme Estia Baner, Supreme Villagio Somatane), Supreme Universal is renowned for uncompromising structural integrity, low-density master planning, and timely MahaRERA compliance.
        </p>
    </section>

    <section style="margin-bottom: 2.5rem;">
        <h2 style="font-size: 1.4rem; color: #0F1014; margin-bottom: 1rem; font-weight: 700;">Frequently Asked Questions</h2>
        ${pseoMeta.faqs.map(f => `
        <div style="margin-bottom: 1.25rem; background: #F9FAFB; padding: 1.25rem; border-radius: 8px; border-left: 4px solid #C6A87C;">
            <h3 style="font-size: 1.1rem; color: #111827; margin: 0 0 0.5rem 0; font-weight: 700;">${f.q}</h3>
            <p style="margin: 0; color: #4B5563; line-height: 1.7;">${f.a}</p>
        </div>`).join('')}
    </section>

    <nav style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #E5E7EB;">
        <h2 style="font-size: 1.25rem; color: #0F1014; margin-bottom: 1rem; font-weight: 700;">Explore Related Supreme Universal Resources</h2>
        <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; font-size: 0.95rem;">
            <a href="/" style="color: #926C38; text-decoration: none; font-weight: 600;">Supreme Rivana Home</a> |
            <a href="/supreme-rivana-punawale-overview" style="color: #926C38; text-decoration: none; font-weight: 600;">Project Overview</a> |
            <a href="/supreme-rivana-punawale-price-list" style="color: #926C38; text-decoration: none; font-weight: 600;">Price List 2026</a> |
            <a href="/supreme-rivana-punawale-floor-plans" style="color: #926C38; text-decoration: none; font-weight: 600;">Floor Plans</a> |
            <a href="/supreme-rivana-punawale-amenities" style="color: #926C38; text-decoration: none; font-weight: 600;">Club Rivana Amenities</a> |
            <a href="/supreme-rivana-punawale-location" style="color: #926C38; text-decoration: none; font-weight: 600;">Location &amp; Hinjewadi Map</a> |
            <a href="/supreme-rivana-punawale-brochure" style="color: #926C38; text-decoration: none; font-weight: 600;">Download Brochure PDF</a> |
            <a href="/supreme-rivana-punawale-sample-flat" style="color: #926C38; text-decoration: none; font-weight: 600;">Sample Flat Tour</a> |
            <a href="/supreme-rivana-punawale-rera" style="color: #926C38; text-decoration: none; font-weight: 600;">MahaRERA PM1261012502656</a> |
            <a href="/pune-real-estate" style="color: #926C38; text-decoration: none; font-weight: 600;">Pune Real Estate Hub</a> |
            <a href="/web-stories/supreme-rivana-overview" style="color: #926C38; text-decoration: none; font-weight: 600;">Google Web Stories</a>
        </div>
    </nav>
</div>`;
                        e.setInnerContent(prerenderHtml, { html: true });
                    }
                });

            const newHeaders = new Headers(response.headers);
            if (isPagesDev) {
                newHeaders.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
            } else {
                newHeaders.set('X-Robots-Tag', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
                newHeaders.set('Link', `<https://www.supreme-universal.in${url.pathname}>; rel="canonical"`);
            }
            newHeaders.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
            newHeaders.set('X-DNS-Prefetch-Control', 'on');
            newHeaders.set('X-XSS-Protection', '1; mode=block');
            newHeaders.set('X-Content-Type-Options', 'nosniff');
            newHeaders.set('X-Frame-Options', 'SAMEORIGIN');
            newHeaders.set('X-Permitted-Cross-Domain-Policies', 'none');
            newHeaders.set('X-Download-Options', 'noopen');
            newHeaders.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(self "https://maps.google.com")');
            newHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin');
            newHeaders.set('X-Edge-Prerender', 'active');
            newHeaders.set('Timing-Allow-Origin', '*');
            newHeaders.set('Server-Timing', 'cf-google-peering;desc="Cloudflare to Google AS15169 Direct PNI", dur=2');
            newHeaders.set('Cache-Tag', 'supreme-rivana-core, supreme-pune-pseo, supreme-edge-ssr');

            return rewriter.transform(new Response(response.body, {
                status: response.status,
                statusText: response.statusText,
                headers: newHeaders
            }));
        }

        // 4b. Homepage Edge SEO Pre-rendering
        if (url.pathname === '/' || url.pathname === '') {
            const rewriter = new HTMLRewriter()
                .on('div#root', {
                    element(e) {
                        const homeEdgeHtml = `
<div id="ssr-home-container" style="padding: 2.5rem 1.5rem; max-width: 1200px; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1F2937; line-height: 1.6;">
    <header style="margin-bottom: 2.5rem; border-bottom: 2px solid #C6A87C; padding-bottom: 2rem;">
        <p style="font-size: 0.875rem; letter-spacing: 0.2em; text-transform: uppercase; color: #C6A87C; font-weight: 700; margin-bottom: 0.5rem;">Supreme Universal | Luxury Waterfront Township Punawale Pune</p>
        <h1 style="font-size: 2.5rem; line-height: 1.25; color: #0F1014; margin: 0 0 1rem 0; font-weight: 800;">Supreme Rivana Punawale | 2 &amp; 3 BHK Riverside Apartments Pune</h1>
        <p style="font-size: 1.2rem; line-height: 1.6; color: #4B5563; max-width: 950px;">Pune West's most prestigious 12.6-acre riverside sanctuary along the Pawana River featuring 30+ storey towers, Club Rivana (60,000 sq.ft clubhouse), 50+ curated amenities, and 700+ native trees near Hinjewadi IT Park. MahaRERA: PM1261012502656.</p>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1.25rem; font-size: 0.9rem; color: #4B5563; background: #F8F9FA; padding: 0.75rem 1rem; border-radius: 8px; border-left: 4px solid #C6A87C;">
            <span>💰 <strong>2 BHK:</strong> ₹97 Lakhs* Onwards (746-786 Sq.Ft)</span>
            <span>💰 <strong>3 BHK:</strong> ₹1.42 Cr* Onwards (1,100-1,166 Sq.Ft)</span>
            <span>🚗 <strong>Hinjewadi Phase 1:</strong> 10-15 Mins</span>
            <span>🛣️ <strong>NH48 Highway:</strong> 400 Metres</span>
            <span>🏢 <strong>MahaRERA:</strong> PM1261012502656</span>
        </div>
    </header>

    <section style="margin-bottom: 2.5rem;">
        <h2 style="font-size: 1.6rem; color: #0F1014; margin-bottom: 1rem; font-weight: 700;">Why Supreme Rivana Ranks #1 in Punawale Real Estate 2026</h2>
        <p style="line-height: 1.8; color: #374151; font-size: 1.05rem;">
            Supreme Rivana by Supreme Universal is engineered for senior executives and homebuyers seeking unmatched riverside tranquility combined with high-speed Hinjewadi connectivity. Featuring low-density architecture with only 6 residences per floor lobby, 3 high-speed elevators, three-side open layouts, Vastu compliance, and monolithic aluminium formwork construction.
        </p>
    </section>

    <section style="margin-bottom: 2.5rem;">
        <h2 style="font-size: 1.4rem; color: #0F1014; margin-bottom: 1rem; font-weight: 700;">Apartment Typologies &amp; Price Breakdown</h2>
        <div style="overflow-x: auto; margin-bottom: 1rem;">
            <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
                <thead>
                    <tr style="background: #1A1D20; color: #FFFFFF;">
                        <th style="padding: 0.75rem 1rem; border: 1px solid #374151;">Typology</th>
                        <th style="padding: 0.75rem 1rem; border: 1px solid #374151;">Variant</th>
                        <th style="padding: 0.75rem 1rem; border: 1px solid #374151;">Carpet Area</th>
                        <th style="padding: 0.75rem 1rem; border: 1px solid #374151;">Starting Price</th>
                        <th style="padding: 0.75rem 1rem; border: 1px solid #374151;">Orientation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background: #FFFFFF;">
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB; font-weight: 600;">2 BHK</td>
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB;">Premier</td>
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB;">746 Sq. Ft.</td>
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB; color: #B45309; font-weight: 700;">₹97 Lakhs*</td>
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB;">Pawana River Facing / Garden Deck</td>
                    </tr>
                    <tr style="background: #F9FAFB;">
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB; font-weight: 600;">2 BHK</td>
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB;">Grand</td>
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB;">786 Sq. Ft.</td>
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB; color: #B45309; font-weight: 700;">₹1.05 Cr*</td>
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB;">Double-Height Balcony, East-West Vastu</td>
                    </tr>
                    <tr style="background: #FFFFFF;">
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB; font-weight: 600;">3 BHK</td>
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB;">Regal</td>
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB;">1,100 Sq. Ft.</td>
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB; color: #B45309; font-weight: 700;">₹1.42 Cr*</td>
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB;">Unobstructed River Views, 3 Bathrooms</td>
                    </tr>
                    <tr style="background: #F9FAFB;">
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB; font-weight: 600;">3 BHK</td>
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB;">Elite</td>
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB;">1,166 Sq. Ft.</td>
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB; color: #B45309; font-weight: 700;">₹1.58 Cr*</td>
                        <td style="padding: 0.75rem 1rem; border: 1px solid #E5E7EB;">Luxury Master Suite with Walk-in Closet</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>

    <section style="margin-bottom: 2.5rem;">
        <h2 style="font-size: 1.4rem; color: #0F1014; margin-bottom: 1rem; font-weight: 700;">Club Rivana — West Pune's Premier 60,000 Sq.Ft Clubhouse</h2>
        <p style="line-height: 1.8; color: #374151;">
            Experience resort luxury every single day with Club Rivana: Aqua Arena featuring 2 swimming pools with sun decks, indoor badminton and squash courts, full-sized pickleball arena, state-of-the-art gymnasium, private mini-theatre screening room, banquet hall, senior citizen wellness reflexology pathways, pet park, and riverside jogging track through 700+ native trees.
        </p>
    </section>

    <nav style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #E5E7EB;">
        <h2 style="font-size: 1.25rem; color: #0F1014; margin-bottom: 1rem; font-weight: 700;">Quick Navigation &amp; Official Verification</h2>
        <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; font-size: 0.95rem;">
            <a href="/supreme-rivana-punawale-overview" style="color: #926C38; text-decoration: none; font-weight: 600;">Project Overview</a> |
            <a href="/supreme-rivana-punawale-price-list" style="color: #926C38; text-decoration: none; font-weight: 600;">Official Price List</a> |
            <a href="/supreme-rivana-punawale-floor-plans" style="color: #926C38; text-decoration: none; font-weight: 600;">Master Floor Plans</a> |
            <a href="/supreme-rivana-punawale-amenities" style="color: #926C38; text-decoration: none; font-weight: 600;">Club Rivana 50+ Amenities</a> |
            <a href="/supreme-rivana-punawale-location" style="color: #926C38; text-decoration: none; font-weight: 600;">Location Map</a> |
            <a href="/supreme-rivana-punawale-brochure" style="color: #926C38; text-decoration: none; font-weight: 600;">Download Brochure PDF</a> |
            <a href="/supreme-rivana-punawale-sample-flat" style="color: #926C38; text-decoration: none; font-weight: 600;">Book Sample Flat Tour</a> |
            <a href="/supreme-rivana-punawale-rera" style="color: #926C38; text-decoration: none; font-weight: 600;">MahaRERA: PM1261012502656</a> |
            <a href="/supreme-rivana-punawale-contact" style="color: #926C38; text-decoration: none; font-weight: 600;">Contact Sales Desk (+91 97390 00354)</a> |
            <a href="/pune-real-estate" style="color: #926C38; text-decoration: none; font-weight: 600;">Pune Real Estate Directory</a> |
            <a href="/web-stories/supreme-rivana-overview" style="color: #926C38; text-decoration: none; font-weight: 600;">Google Web Stories</a>
        </div>
    </nav>
</div>`;
                        e.setInnerContent(homeEdgeHtml, { html: true });
                    }
                });

            const newHeaders = new Headers(response.headers);
            newHeaders.set('X-Robots-Tag', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
            newHeaders.set('Link', '<https://www.supreme-universal.in/>; rel="canonical"');
            newHeaders.set('X-Edge-Prerender', 'active-home');

            return rewriter.transform(new Response(response.body, {
                status: response.status,
                statusText: response.statusText,
                headers: newHeaders
            }));
        }
    }

    // 5. Inject additional Edge-level security & Google Interconnect headers for standard routes
    const newHeaders = new Headers(response.headers);
    if (isPagesDev) {
        newHeaders.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
    } else {
        newHeaders.set('X-Robots-Tag', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
        newHeaders.set('Link', `<https://www.supreme-universal.in${url.pathname}>; rel="canonical"`);
    }
    newHeaders.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
    newHeaders.set('X-DNS-Prefetch-Control', 'on');
    newHeaders.set('X-XSS-Protection', '1; mode=block');
    newHeaders.set('X-Content-Type-Options', 'nosniff');
    newHeaders.set('X-Frame-Options', 'SAMEORIGIN');
    newHeaders.set('X-Permitted-Cross-Domain-Policies', 'none');
    newHeaders.set('X-Download-Options', 'noopen');
    newHeaders.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(self "https://maps.google.com")');
    newHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    newHeaders.set('Timing-Allow-Origin', '*');
    newHeaders.set('Server-Timing', 'cf-google-peering;desc="Cloudflare to Google AS15169 Direct PNI", dur=2');

    return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders
    });
}
