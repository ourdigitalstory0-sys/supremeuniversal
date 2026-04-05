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

// Check if credentials exist
if (!fs.existsSync(KEY_FILE)) {
    console.log('❌ ERROR: Missing service-account.json');
    console.log('You must place the Google Service Account JSON key in the root directory.');
    process.exit(1);
}

// These are the absolute highest priority URLs that need instant indexing
const PRIORITY_URLS = [
    'https://www.supreme-universal.in/blog/supreme-rivana-punawale-vs-all-competitors-2026',
    'https://www.supreme-universal.in/',
    'https://www.supreme-universal.in/supreme-rivana-punawale-overview',
    'https://www.supreme-universal.in/supreme-rivana-punawale-price-list',
    'https://www.supreme-universal.in/supreme-rivana-punawale-comparison',
];

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
