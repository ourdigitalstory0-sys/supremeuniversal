import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

/**
 * Supreme Rivana — Google Indexing API Integration
 * 
 * This script programmaticably hard-forces Google to crawl/index specific URLs
 * using the official Google Indexing API. This bypasses the wait time for Googlebot 
 * to naturally discover new/updated pages.
 * 
 * PREREQUISITE: You MUST have a `service-account.json` file in the root directory.
 * 1. Go to Google Cloud Console
 * 2. Create a project and enable Web Search Indexing API
 * 3. Create a Service Account and download the JSON key as `service-account.json`
 * 4. Add the Service Account email as an "Owner" in Google Search Console!
 * 
 * Usage: node scripts/google-indexing-api.mjs
 */

const KEY_FILE = path.join(process.cwd(), 'service-account.json');
const SITEMAP_FILE = path.join(process.cwd(), 'public', 'sitemap.xml');

// Check if credentials exist
if (!fs.existsSync(KEY_FILE)) {
    console.log('❌ ERROR: Missing service-account.json');
    console.log('You must place the Google Service Account JSON key in the root directory.');
    process.exit(1);
}

// Function to extract URLs from core and projects sitemaps
function getUrlsFromSitemap() {
    const urls = new Set();
    const coreSitemap = path.join(process.cwd(), 'public', 'sitemap-core.xml');
    const projectsSitemap = path.join(process.cwd(), 'public', 'sitemap-projects.xml');
    
    const urlRegex = /<loc>(.*?)<\/loc>/g;
    
    // Add core URLs
    if (fs.existsSync(coreSitemap)) {
        const content = fs.readFileSync(coreSitemap, 'utf-8');
        let match;
        while ((match = urlRegex.exec(content)) !== null) {
            urls.add(match[1]);
        }
    }
    
    // Add project programmatic URLs
    if (fs.existsSync(projectsSitemap)) {
        const content = fs.readFileSync(projectsSitemap, 'utf-8');
        let match;
        // Reset regex index
        urlRegex.lastIndex = 0;
        while ((match = urlRegex.exec(content)) !== null) {
            urls.add(match[1]);
        }
    }

    // High-priority core & tier-1 intent pages to guarantee daily indexation
    const topPriorityList = [
        'https://www.supreme-universal.in/',
        'https://www.supreme-universal.in/pune-real-estate',
        'https://www.supreme-universal.in/supreme-rivana-punawale-price-list',
        'https://www.supreme-universal.in/supreme-rivana-punawale-overview',
        'https://www.supreme-universal.in/supreme-rivana-punawale-floor-plan',
        'https://www.supreme-universal.in/pune-real-estate/2bhk-apartments-in-punawale-price',
        'https://www.supreme-universal.in/pune-real-estate/3bhk-apartments-in-punawale-price',
        'https://www.supreme-universal.in/pune-real-estate/2bhk-apartments-in-wakad-price',
        'https://www.supreme-universal.in/pune-real-estate/3bhk-apartments-in-wakad-price',
        'https://www.supreme-universal.in/pune-real-estate/2bhk-apartments-in-hinjewadi-price',
        'https://www.supreme-universal.in/pune-real-estate/3bhk-apartments-in-hinjewadi-price',
        'https://www.supreme-universal.in/pune-real-estate/2bhk-apartments-in-baner-price',
        'https://www.supreme-universal.in/pune-real-estate/3bhk-apartments-in-baner-price',
        'https://www.supreme-universal.in/pune-real-estate/2bhk-apartments-in-balewadi-price',
        'https://www.supreme-universal.in/pune-real-estate/3bhk-apartments-in-balewadi-price',
        'https://www.supreme-universal.in/pune-real-estate/2bhk-apartments-in-tathawade-price',
        'https://www.supreme-universal.in/pune-real-estate/3bhk-apartments-in-tathawade-price',
        'https://www.supreme-universal.in/pune-real-estate/2bhk-apartments-in-ravet-price',
        'https://www.supreme-universal.in/pune-real-estate/3bhk-apartments-in-ravet-price',
        'https://www.supreme-universal.in/pune-real-estate/2bhk-apartments-in-kiwale-price',
        'https://www.supreme-universal.in/pune-real-estate/3bhk-apartments-in-kiwale-price',
        'https://www.supreme-universal.in/pune-real-estate/2bhk-apartments-in-mahalunge-price',
        'https://www.supreme-universal.in/pune-real-estate/3bhk-apartments-in-mahalunge-price',
        'https://www.supreme-universal.in/pune-real-estate/2bhk-apartments-in-pimple-saudagar-price',
        'https://www.supreme-universal.in/pune-real-estate/3bhk-apartments-in-pimple-saudagar-price',
    ];
    topPriorityList.forEach(u => urls.add(u));

    const urlArray = Array.from(urls);
    if (urlArray.length === 0) {
        return ['https://www.supreme-universal.in/'];
    }
    
    // Google Indexing API limit is 200 URLs per request batch/day.
    // We reserve 10 slots for safety and return the first 190 high-priority page URLs.
    return urlArray.slice(0, 190);
}

const PRIORITY_URLS = getUrlsFromSitemap();

async function submitIndexRequest() {
    try {
        console.log('🔑 Authenticating with Google Cloud...');
        const auth = new google.auth.GoogleAuth({
            keyFile: KEY_FILE,
            scopes: ['https://www.googleapis.com/auth/indexing'],
        });

        const client = await auth.getClient();
        const indexing = google.indexing({ version: 'v3', auth: client });

        console.log(`\n🚀 Submitting ${PRIORITY_URLS.length} URLs to Google Indexing API...`);

        for (const url of PRIORITY_URLS) {
            try {
                const response = await indexing.urlNotifications.publish({
                    requestBody: {
                        url: url,
                        type: 'URL_UPDATED', // Use URL_UPDATED for new AND modified pages
                    },
                });
                console.log(`   ✅ SUCCESS: ${url}`);
                console.log(`      Timestamp: ${response.data.urlNotificationMetadata?.latestUpdate?.notifyTime}`);
            } catch (err) {
                console.log(`   ❌ ERROR submitting ${url}`);
                if (err.errors) {
                    console.log(`      Reason: ${err.errors[0].message}`);
                } else {
                    console.log(`      Reason: ${err.message}`);
                }
            }
        }

        console.log('\n✅ Script Complete. URLs submitted to Google Indexing API.');
        
    } catch (error) {
        console.error('Fatal Error:', error.message);
    }
}

submitIndexRequest();
