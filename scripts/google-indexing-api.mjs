import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

/**
 * Supreme Rivana — Automated Google Indexing Engine v2
 * 
 * Automatically iterates across the entire 14,500+ programmatic SEO catalog,
 * submitting optimal batches of 190 URLs/day (matching Google's 200/day quota limit).
 * State is persisted in `scripts/indexing_state.json`.
 */

const KEY_FILE = path.join(process.cwd(), 'service-account.json');
const STATE_FILE = path.join(process.cwd(), 'scripts', 'indexing_state.json');
const PUBLIC_DIR = path.join(process.cwd(), 'public');

if (!fs.existsSync(KEY_FILE)) {
    console.error('❌ ERROR: Missing service-account.json in root directory.');
    process.exit(1);
}

// 1. Load indexing state
function loadState() {
    if (fs.existsSync(STATE_FILE)) {
        try {
            return JSON.parse(fs.readFileSync(STATE_FILE, 'utf-8'));
        } catch (e) {
            console.warn('⚠️ Could not parse indexing_state.json, starting fresh.');
        }
    }
    return {
        submittedUrls: [],
        lastRun: null,
        totalBatches: 0
    };
}

function saveState(state) {
    fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2), 'utf-8');
}

// 2. Extract and prioritize all URLs from all sitemaps
function getAllSitemapUrls() {
    const urls = new Set();
    const urlRegex = /<loc>(.*?)<\/loc>/g;

    const sitemapFiles = fs.readdirSync(PUBLIC_DIR)
        .filter(f => f.startsWith('sitemap-') && f.endsWith('.xml'));

    // Priority 1: Flagship Supreme Rivana pages
    const flagshipPriority = [
        'https://www.supreme-universal.in/',
        'https://www.supreme-universal.in/supreme-rivana-punawale-overview',
        'https://www.supreme-universal.in/supreme-rivana-punawale-price-list',
        'https://www.supreme-universal.in/supreme-rivana-punawale-floor-plans',
        'https://www.supreme-universal.in/supreme-rivana-punawale-floor-plan',
        'https://www.supreme-universal.in/supreme-rivana-punawale-comparison',
        'https://www.supreme-universal.in/supreme-rivana-punawale-location',
        'https://www.supreme-universal.in/supreme-rivana-punawale-amenities',
        'https://www.supreme-universal.in/supreme-rivana-punawale-gallery',
        'https://www.supreme-universal.in/supreme-rivana-punawale-reviews',
        'https://www.supreme-universal.in/supreme-rivana-punawale-possession-date',
        'https://www.supreme-universal.in/supreme-rivana-punawale-contact',
        'https://www.supreme-universal.in/supreme-rivana-punawale-faq',
        'https://www.supreme-universal.in/supreme-2bhk-punawale-flats',
        'https://www.supreme-universal.in/supreme-3bhk-punawale-flats',
        'https://www.supreme-universal.in/pune-real-estate'
    ];
    flagshipPriority.forEach(u => urls.add(u));

    // Priority 2: Core sitemap and projects sitemap
    const priorityFiles = ['sitemap-core.xml', 'sitemap-projects.xml'];
    for (const pf of priorityFiles) {
        const fp = path.join(PUBLIC_DIR, pf);
        if (fs.existsSync(fp)) {
            const content = fs.readFileSync(fp, 'utf-8');
            let match;
            urlRegex.lastIndex = 0;
            while ((match = urlRegex.exec(content)) !== null) {
                urls.add(match[1]);
            }
        }
    }

    // Priority 3: Bulk programmatic micro-market sitemaps (sitemap-pune-*.xml)
    for (const f of sitemapFiles) {
        if (!priorityFiles.includes(f)) {
            const fp = path.join(PUBLIC_DIR, f);
            const content = fs.readFileSync(fp, 'utf-8');
            let match;
            urlRegex.lastIndex = 0;
            while ((match = urlRegex.exec(content)) !== null) {
                urls.add(match[1]);
            }
        }
    }

    return Array.from(urls);
}

// 3. Main indexing runner
async function runIndexing() {
    const state = loadState();
    const allUrls = getAllSitemapUrls();
    const submittedSet = new Set(state.submittedUrls);

    // Pick next batch of unsubmitted URLs (up to 190)
    const unsubmitted = allUrls.filter(u => !submittedSet.has(u));
    const BATCH_SIZE = 190;
    const batch = unsubmitted.slice(0, BATCH_SIZE);

    console.log('════════════════════════════════════════════════════════════');
    console.log('       SUPREME RIVANA — GOOGLE INDEXING AUTOMATION          ');
    console.log('════════════════════════════════════════════════════════════');
    console.log(`📊 Total URLs in Catalog : ${allUrls.length.toLocaleString()}`);
    console.log(`✅ Previously Submitted   : ${submittedSet.size.toLocaleString()}`);
    console.log(`⏳ Remaining Unsubmitted : ${unsubmitted.length.toLocaleString()}`);
    console.log(`🚀 Current Batch Size    : ${batch.length}`);
    console.log('────────────────────────────────────────────────────────────\n');

    if (batch.length === 0) {
        console.log('🎉 100% of URLs have been submitted to Google Indexing API!');
        return;
    }

    const auth = new google.auth.GoogleAuth({
        keyFile: KEY_FILE,
        scopes: ['https://www.googleapis.com/auth/indexing'],
    });
    const client = await auth.getClient();
    const indexing = google.indexing({ version: 'v3', auth: client });

    let successCount = 0;
    let quotaHit = false;

    for (let i = 0; i < batch.length; i++) {
        const url = batch[i];
        try {
            await indexing.urlNotifications.publish({
                requestBody: { url, type: 'URL_UPDATED' },
            });
            submittedSet.add(url);
            successCount++;
            console.log(`[${i + 1}/${batch.length}] ✅ Pushed: ${url}`);
        } catch (err) {
            const msg = err.errors ? err.errors[0].message : err.message;
            if (msg.includes('Quota exceeded')) {
                console.log(`\n⚠️ Google Indexing daily quota (200 requests/day) reached.`);
                console.log(`   Quota automatically resets at 00:00 PST.`);
                console.log(`   Next batch will automatically resume remaining ${unsubmitted.length - successCount} URLs.`);
                quotaHit = true;
                break;
            } else {
                console.error(`[${i + 1}/${batch.length}] ❌ Error for ${url}:`, msg);
            }
        }
    }

    state.submittedUrls = Array.from(submittedSet);
    state.lastRun = new Date().toISOString();
    state.totalBatches = (state.totalBatches || 0) + (successCount > 0 ? 1 : 0);
    saveState(state);

    const progressPct = ((state.submittedUrls.length / allUrls.length) * 100).toFixed(2);
    console.log('\n────────────────────────────────────────────────────────────');
    console.log(`🏁 Batch Complete: ${successCount} URLs pushed successfully.`);
    console.log(`📈 Overall Catalog Indexing Progress: ${state.submittedUrls.length}/${allUrls.length} (${progressPct}%)`);
    if (quotaHit) {
        console.log(`⏰ Daily limit reached. Next cron/run will continue from URL #${state.submittedUrls.length + 1}.`);
    }
    console.log('════════════════════════════════════════════════════════════\n');
}

runIndexing().catch(err => {
    console.error('Fatal error during indexing run:', err.message);
    process.exit(1);
});
