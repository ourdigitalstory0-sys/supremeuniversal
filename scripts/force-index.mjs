import https from 'https';

/**
 * Supreme Rivana — Hard-Force Indexing Engine v2
 * 
 * Methods:
 *   1. IndexNow API (Bing/Yandex/Naver) — batch URL submission ✅
 *   2. Google Search Console URL Inspection — manual trigger required
 * 
 * NOTE: Google deprecated their sitemap ping endpoint in June 2023.
 * For Google, use Search Console > URL Inspection > Request Indexing
 * OR set up the Google Indexing API with a service account.
 * 
 * Usage: node scripts/force-index.mjs
 */

const DOMAIN = 'https://www.supreme-universal.in';
const INDEXNOW_KEY = 'supremerivana2026indexkey';

// ===== ALL URLS TO FORCE-INDEX =====
const URLS = [
    // Core Pages
    '/',
    '/supreme-rivana-punawale-overview',
    '/supreme-rivana-punawale-amenities',
    '/supreme-rivana-punawale-floor-plans',
    '/supreme-rivana-punawale-gallery',
    '/supreme-rivana-punawale-location',
    '/supreme-rivana-punawale-faq',
    '/supreme-rivana-punawale-contact',
    '/supreme-rivana-punawale-price-list',
    '/supreme-rivana-punawale-comparison',
    '/blog',

    // HIGH-PRIORITY: Supremacy Report
    '/blog/supreme-rivana-punawale-vs-all-competitors-2026',

    // Blog Posts
    '/blog/ultimate-guide-buying-property-punawale-pune',
    '/blog/punawale-infrastructure-connectivity-updates-2026',
    '/blog/supreme-universal-luxury-legacy-west-pune',
    '/blog/top-schools-hospitals-near-punawale',
    '/blog/punawale-vs-wakad-real-estate-investment-2026',
    '/blog/luxury-amenities-pune-apartments',
    '/blog/supreme-rivana-punawale-definitive-guide-15-acre-legacy',
    '/blog/supreme-rivana-rera-number-price-list-booking-2026',
    '/blog/best-2-bhk-flats-punawale-under-1-crore-2026',
    '/blog/nri-guide-buying-property-punawale-pune-2026',
    '/blog/future-of-punawale-real-estate-pune-2026-2030',
    '/blog/property-investment-near-hinjewadi-it-hub-pune',
    '/blog/benefits-of-riverside-living-pune-luxury-lifestyle',
    '/blog/2-bhk-vs-3-bhk-investment-punawale-pune-2026',
    '/blog/supreme-rivana-vs-puneville-comparison-2026',
    '/blog/supreme-rivana-punawale-price-list-2026-all-configurations',

    // pSEO Landing Pages
    '/supreme-rivana-punawale-price',
    '/supreme-rivana-punawale-reviews',
    '/supreme-rivana-punawale-floor-plan',
    '/supreme-rivana-punawale-possession-date',
    '/supreme-riverside-punawale-photos',
    '/supreme-2bhk-punawale-flats',
    '/supreme-3bhk-punawale-flats',

    // Portfolio
    '/projects/supreme-towers',
    '/projects/supreme-villagio',
    '/projects/supreme-estia',
    '/projects/supreme-wakad',
    '/projects/supreme-pallacio',
    '/projects/supreme-vivero',
    '/projects/supreme-amadore',
    '/projects/supreme-estado',
    '/projects/supreme-esteban',
];

// ============================================
// IndexNow API (Bing, Yandex, Naver, Seznam)
// ============================================
async function submitIndexNow() {
    const fullUrls = URLS.map(u => `${DOMAIN}${u}`);
    
    const payload = JSON.stringify({
        host: 'www.supreme-universal.in',
        key: INDEXNOW_KEY,
        keyLocation: `${DOMAIN}/${INDEXNOW_KEY}.txt`,
        urlList: fullUrls
    });

    const engines = [
        { host: 'api.indexnow.org', name: 'IndexNow (Bing/Yandex/Naver)' },
        { host: 'www.bing.com', name: 'Bing Direct' },
    ];

    for (const engine of engines) {
        await new Promise((resolve) => {
            console.log(`\n🚀 [INDEXNOW] Submitting ${fullUrls.length} URLs to ${engine.name}...`);
            
            const options = {
                hostname: engine.host,
                port: 443,
                path: '/indexnow',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Content-Length': Buffer.byteLength(payload),
                }
            };

            const req = https.request(options, (res) => {
                let body = '';
                res.on('data', (chunk) => body += chunk);
                res.on('end', () => {
                    if (res.statusCode === 200 || res.statusCode === 202) {
                        console.log(`   ✅ ${engine.name}: ${res.statusCode} — ${fullUrls.length} URLs accepted for indexing`);
                    } else {
                        console.log(`   ⚠️ ${engine.name}: ${res.statusCode} — ${body || res.statusMessage}`);
                    }
                    resolve();
                });
            });

            req.on('error', (err) => {
                console.log(`   ❌ ${engine.name} Error: ${err.message}`);
                resolve();
            });

            req.write(payload);
            req.end();
        });
    }
}

// ============================================
// Google Search Console Priority URLs
// ============================================
function printGoogleInstructions() {
    const priorityUrls = [
        `${DOMAIN}/blog/supreme-rivana-punawale-vs-all-competitors-2026`,
        `${DOMAIN}/`,
        `${DOMAIN}/supreme-rivana-punawale-overview`,
        `${DOMAIN}/supreme-rivana-punawale-price-list`,
        `${DOMAIN}/supreme-rivana-punawale-comparison`,
        `${DOMAIN}/blog/supreme-rivana-vs-puneville-comparison-2026`,
    ];

    console.log('\n═══════════════════════════════════════════════════');
    console.log('  📋 GOOGLE SEARCH CONSOLE — MANUAL STEPS');
    console.log('═══════════════════════════════════════════════════');
    console.log('\n  Google deprecated the sitemap ping API.');
    console.log('  For instant Google indexing, do the following:\n');
    console.log('  1. Go to: https://search.google.com/search-console');
    console.log('  2. Select property: www.supreme-universal.in');
    console.log('  3. Use URL Inspection tool for these PRIORITY URLs:\n');
    
    priorityUrls.forEach((url, i) => {
        console.log(`     ${i + 1}. ${url}`);
    });
    
    console.log('\n  4. Click "Request Indexing" for each URL');
    console.log('  5. Submit updated sitemap: Sitemaps > Add > /sitemap.xml');
    console.log('\n  💡 TIP: Also resubmit sitemap to trigger full re-crawl');
    console.log('═══════════════════════════════════════════════════\n');
}

// ============================================
// EXECUTE
// ============================================
async function main() {
    console.log('═══════════════════════════════════════════════════');
    console.log('  SUPREME RIVANA — HARD-FORCE INDEXING ENGINE v2');
    console.log('  Target: www.supreme-universal.in');
    console.log(`  Total URLs: ${URLS.length}`);
    console.log(`  Timestamp: ${new Date().toISOString()}`);
    console.log('═══════════════════════════════════════════════════');

    // Step 1: IndexNow API (Bing/Yandex/Naver)
    await submitIndexNow();

    // Step 2: Google instructions
    printGoogleInstructions();

    console.log('  🏁 AUTOMATED INDEXING COMPLETE');
    console.log('  Bing/Yandex/Naver: URLs submitted via IndexNow ✅');
    console.log('  Google: Follow manual steps above ☝️');
    console.log('═══════════════════════════════════════════════════\n');
}

main();
