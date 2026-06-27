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

// Function to extract URLs from sitemap
function getUrlsFromSitemap() {
    if (!fs.existsSync(SITEMAP_FILE)) {
        console.log('⚠️ WARNING: sitemap.xml not found. Generating dummy list or skipping.');
        return [
            'https://www.supreme-universal.in/'
        ];
    }
    
    const sitemapContent = fs.readFileSync(SITEMAP_FILE, 'utf-8');
    const urlRegex = /<loc>(.*?)<\/loc>/g;
    const urls = [];
    let match;
    
    while ((match = urlRegex.exec(sitemapContent)) !== null) {
        urls.push(match[1]);
    }
    
    // Google Indexing API limit is 200 URLs per request batch/day.
    // We will slice the array to the first 200 just in case to avoid API limit errors.
    return urls.slice(0, 200);
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
