import fs from 'fs';
import path from 'path';

const DOMAIN = 'https://www.supreme-universal.in';
const SITEMAP_PATH = path.join(process.cwd(), 'public', 'sitemap-pune.xml');
const DATE = new Date().toLocaleDateString('sv-SE'); // 'sv-SE' gives 'YYYY-MM-DD'

const locations = [
    'punawale', 'hinjewadi', 'wakad', 'baner', 'mahalunge', 'balewadi', 'tathawade', 'ravet', 'kiwale', 'akurdi',
    'chinchwad', 'pimpri', 'somatane', 'talegaon', 'koregaon-park', 'kalyani-nagar', 'viman-nagar', 'kharadi',
    'hadapsar', 'undri', 'nibm', 'katraj', 'kothrud', 'shivajinagar', 'camp', 'swargate', 'dhanori', 'vishrantwadi',
    'lohegaon', 'wagholi', 'mundhwa', 'keshav-nagar', 'manjri', 'chakan', 'bhosari', 'moshi', 'alandi', 'sangvi',
    'pimple-saudagar', 'pimple-gurav', 'pimple-nilakh', 'rahatani', 'thergaon', 'bavdhan', 'pashan', 'sus',
    'balewadi-high-street', 'maandvi', 'marunji', 'gahunje'
];

const configs = ['2bhk', '3bhk', '4bhk', '5bhk', 'simplex', 'duplex', 'penthouse'];
const propertyTypes = ['flats', 'apartments', 'homes', 'residences', 'projects'];
const themes = ['price', 'reviews', 'floor-plan', 'possession-date', 'amenities', 'location-map', 'brochure', 'rera'];

function generateSitemap10k() {
    console.log('⏳ Starting generation of 14,000+ programmatic SEO URLs...');
    
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    let count = 0;
    for (const loc of locations) {
        for (const config of configs) {
            for (const type of propertyTypes) {
                for (const theme of themes) {
                    const slug = `${config}-${type}-in-${loc}-${theme}`;
                    xml += `
  <url>
    <loc>${DOMAIN}/pune-real-estate/${slug}</loc>
    <lastmod>${DATE}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
                    count++;
                }
            }
        }
    }

    xml += `
</urlset>`;

    fs.writeFileSync(SITEMAP_PATH, xml.trim());
    console.log(`✅ Successfully generated ${count} programmatic URLs at ${SITEMAP_PATH}`);
}

generateSitemap10k();
