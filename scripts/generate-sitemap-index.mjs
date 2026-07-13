import fs from 'fs';
import path from 'path';

const DOMAIN = 'https://www.supreme-universal.in';
const INDEX_PATH = path.join(process.cwd(), 'public', 'sitemap.xml');
const DATE = new Date().toLocaleDateString('sv-SE'); // 'sv-SE' gives 'YYYY-MM-DD'

function generateSitemapIndex() {
    console.log('⏳ Generating parent Sitemap Index (sitemap.xml)...');
    
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <sitemap>
      <loc>${DOMAIN}/sitemap-core.xml</loc>
      <lastmod>${DATE}</lastmod>
   </sitemap>
   <sitemap>
      <loc>${DOMAIN}/sitemap-pune-1.xml</loc>
      <lastmod>${DATE}</lastmod>
   </sitemap>
   <sitemap>
      <loc>${DOMAIN}/sitemap-pune-2.xml</loc>
      <lastmod>${DATE}</lastmod>
   </sitemap>
   <sitemap>
      <loc>${DOMAIN}/sitemap-pune-3.xml</loc>
      <lastmod>${DATE}</lastmod>
   </sitemap>
   <sitemap>
      <loc>${DOMAIN}/sitemap-pune-4.xml</loc>
      <lastmod>${DATE}</lastmod>
   </sitemap>
   <sitemap>
      <loc>${DOMAIN}/sitemap-pune-5.xml</loc>
      <lastmod>${DATE}</lastmod>
   </sitemap>
</sitemapindex>`;

    fs.writeFileSync(INDEX_PATH, xml.trim());
    console.log(`✅ Sitemap Index successfully written at ${INDEX_PATH}`);
}

generateSitemapIndex();
