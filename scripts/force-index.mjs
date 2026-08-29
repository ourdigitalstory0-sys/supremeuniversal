import https from 'https';
import fs from 'fs';
import path from 'path';

const DOMAIN = 'https://www.supreme-universal.in';
const INDEXNOW_KEY = 'supremerivana2026indexkey';
const SITEMAP_FILE = path.join(process.cwd(), 'public', 'sitemap.xml');

// ===== DYNAMICALLY EXTRACT ALL ACTUAL PAGE URLS FROM SUB-SITEMAPS =====
function getUrlsFromSitemap() {
    const urls = new Set();
    const publicDir = path.join(process.cwd(), 'public');
    const sitemapFiles = fs.readdirSync(publicDir)
        .filter(f => f.startsWith('sitemap-') && f.endsWith('.xml'));

    if (sitemapFiles.length === 0) {
        console.log('⚠️ WARNING: No sub-sitemaps found. Using fallback URL.');
        return [`${DOMAIN}/`];
    }

    const urlRegex = /<loc>(.*?)<\/loc>/g;
    for (const file of sitemapFiles) {
        const filePath = path.join(publicDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        let match;
        while ((match = urlRegex.exec(content)) !== null) {
            urls.add(match[1]);
        }
    }

    const urlArray = Array.from(urls);
    console.log(`📊 Loaded ${urlArray.length} actual page URLs across ${sitemapFiles.length} sitemaps.`);
    return urlArray.slice(0, 10000); // IndexNow supports up to 10,000 URLs per batch
}

const ALL_URLS = getUrlsFromSitemap();

// ============================================
// IndexNow API (Bing, Yandex, Naver, Seznam)
// ============================================
async function submitIndexNow() {
    const fullUrls = ALL_URLS; // Already absolute URLs from sitemap
    
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
    console.log(`  Total URLs: ${ALL_URLS.length}`);
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
