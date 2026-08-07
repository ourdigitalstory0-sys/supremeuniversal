import fs from 'fs';
import path from 'path';

const DOMAIN = 'https://www.supreme-universal.in';
const SITEMAP_PATH = path.join(process.cwd(), 'public', 'sitemap-projects.xml');
const DATE = new Date().toLocaleDateString('sv-SE'); // 'sv-SE' gives 'YYYY-MM-DD'

const projects = [
    { id: 'supreme-towers', name: 'Supreme Towers', location: 'Mundhwa', image: 'https://www.supreme-universal.in/assets/projects/actual-towers.jpg' },
    { id: 'supreme-villagio', name: 'Supreme Villagio', location: 'Somatane', image: 'https://www.supreme-universal.in/assets/projects/actual-villagio.jpg' },
    { id: 'supreme-estia', name: 'Supreme Estia', location: 'Baner', image: 'https://www.supreme-universal.in/assets/projects/actual-estia.jpg' },
    { id: 'supreme-wakad', name: 'Supreme Wakad', location: 'Wakad', image: 'https://www.supreme-universal.in/assets/projects/actual-wakad.jpg' },
    { id: 'supreme-pallacio', name: 'Supreme Pallacio', location: 'Kalyani Nagar', image: 'https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg' },
    { id: 'supreme-vivero', name: 'Supreme Vivero', location: 'Baner', image: 'https://www.supreme-universal.in/assets/projects/actual-towers.jpg' },
    { id: 'supreme-amadore', name: 'Supreme Amadore', location: 'Baner', image: 'https://cdn.supremeuniversal.com/media/SupremeVillagioDesktopBanner_5z4eED.jpeg' },
    { id: 'supreme-estado', name: 'Supreme Estado', location: 'Baner', image: 'https://www.supreme-universal.in/assets/projects/actual-wakad.jpg' },
    { id: 'supreme-esteban', name: 'Supreme Esteban', location: 'Koregaon Park', image: 'https://www.supreme-universal.in/assets/projects/actual-towers.jpg' }
];

const configs = ['2bhk', '3bhk', '4bhk', '5bhk', 'simplex', 'duplex', 'penthouse'];
const themes = ['price', 'reviews', 'floor-plan', 'possession-date', 'amenities', 'location-map', 'brochure', 'rera'];

const configLabels = {
    '2bhk': '2 BHK',
    '3bhk': '3 BHK',
    '4bhk': '4 BHK',
    '5bhk': '5 BHK',
    'simplex': 'Simplex',
    'duplex': 'Duplex',
    'penthouse': 'Penthouse'
};

const themeLabels = {
    'price': 'Price & Cost Sheet',
    'reviews': 'Reviews & Ratings',
    'floor-plan': 'Floor Plans & Layouts',
    'possession-date': 'Possession Date & Timelines',
    'amenities': 'Amenities & Features',
    'location-map': 'Location Map & Connectivity',
    'brochure': 'Download Brochure',
    'rera': 'MahaRERA Registration Details'
};

function generateSitemapProjects() {
    console.log('⏳ Starting generation of brand portfolio sitemap...');

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;

    let count = 0;

    for (const proj of projects) {
        for (const config of configs) {
            for (const theme of themes) {
                let activeConfig = config;
                let activeConfigLabel = configLabels[config];

                if (proj.id === 'supreme-villagio' && config === 'penthouse') {
                    activeConfig = 'townhouses';
                    activeConfigLabel = 'Townhouses';
                }

                const slug = `${proj.id}-${activeConfig}-${theme}`;
                const title = `${proj.name} ${activeConfigLabel} - ${themeLabels[theme]}`;
                const caption = proj.id === 'supreme-villagio' && activeConfig === 'townhouses'
                    ? `View verified ${themeLabels[theme].toLowerCase()} details for Townhouses at ${proj.name} in ${proj.location} by Supreme Universal.`
                    : `View verified ${themeLabels[theme].toLowerCase()} details for ${configLabels[config]} configurations at ${proj.name} in ${proj.location} by Supreme Universal.`;

                xml += `
  <url>
    <loc>${DOMAIN}/pune-projects/${slug}</loc>
    <lastmod>${DATE}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>${proj.image}</image:loc>
      <image:title>${title.replace(/&/g, '&amp;')}</image:title>
      <image:caption>${caption.replace(/&/g, '&amp;')}</image:caption>
    </image:image>
  </url>`;
                count++;
            }
        }
    }

    xml += `
</urlset>`;

    fs.writeFileSync(SITEMAP_PATH, xml.trim());
    console.log(`✅ Successfully generated sitemap-projects.xml with ${count} URLs`);
}

generateSitemapProjects();
