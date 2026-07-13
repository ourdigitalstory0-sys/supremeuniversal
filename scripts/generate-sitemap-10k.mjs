import fs from 'fs';
import path from 'path';

const DOMAIN = 'https://www.supreme-universal.in';
const DATE = new Date().toLocaleDateString('sv-SE'); // 'sv-SE' gives 'YYYY-MM-DD'

const locations = [
    { id: 'punawale', name: 'Punawale' },
    { id: 'hinjewadi', name: 'Hinjewadi' },
    { id: 'wakad', name: 'Wakad' },
    { id: 'baner', name: 'Baner' },
    { id: 'mahalunge', name: 'Mahalunge' },
    { id: 'balewadi', name: 'Balewadi' },
    { id: 'tathawade', name: 'Tathawade' },
    { id: 'ravet', name: 'Ravet' },
    { id: 'kiwale', name: 'Kiwale' },
    { id: 'akurdi', name: 'Akurdi' },
    { id: 'chinchwad', name: 'Chinchwad' },
    { id: 'pimpri', name: 'Pimpri' },
    { id: 'somatane', name: 'Somatane' },
    { id: 'talegaon', name: 'Talegaon' },
    { id: 'koregaon-park', name: 'Koregaon Park' },
    { id: 'kalyani-nagar', name: 'Kalyani Nagar' },
    { id: 'viman-nagar', name: 'Viman Nagar' },
    { id: 'kharadi', name: 'Kharadi' },
    { id: 'hadapsar', name: 'Hadapsar' },
    { id: 'undri', name: 'Undri' },
    { id: 'nibm', name: 'NIBM' },
    { id: 'katraj', name: 'Katraj' },
    { id: 'kothrud', name: 'Kothrud' },
    { id: 'shivajinagar', name: 'Shivajinagar' },
    { id: 'camp', name: 'Camp' },
    { id: 'swargate', name: 'Swargate' },
    { id: 'dhanori', name: 'Dhanori' },
    { id: 'vishrantwadi', name: 'Vishrantwadi' },
    { id: 'lohegaon', name: 'Lohegaon' },
    { id: 'wagholi', name: 'Wagholi' },
    { id: 'mundhwa', name: 'Mundhwa' },
    { id: 'keshav-nagar', name: 'Keshav Nagar' },
    { id: 'manjri', name: 'Manjri' },
    { id: 'chakan', name: 'Chakan' },
    { id: 'bhosari', name: 'Bhosari' },
    { id: 'moshi', name: 'Moshi' },
    { id: 'alandi', name: 'Alandi' },
    { id: 'sangvi', name: 'Sangvi' },
    { id: 'pimple-saudagar', name: 'Pimple Saudagar' },
    { id: 'pimple-gurav', name: 'Pimple Gurav' },
    { id: 'pimple-nilakh', name: 'Pimple Nilakh' },
    { id: 'rahatani', name: 'Rahatani' },
    { id: 'thergaon', name: 'Thergaon' },
    { id: 'bavdhan', name: 'Bavdhan' },
    { id: 'pashan', name: 'Pashan' },
    { id: 'sus', name: 'Sus' },
    { id: 'balewadi-high-street', name: 'Balewadi High Street' },
    { id: 'maandvi', name: 'Maandvi' },
    { id: 'marunji', name: 'Marunji' },
    { id: 'gahunje', name: 'Gahunje' }
];

const configs = ['2bhk', '3bhk', '4bhk', '5bhk', 'simplex', 'duplex', 'penthouse'];
const propertyTypes = ['flats', 'apartments', 'homes', 'residences', 'projects'];
const themes = ['price', 'reviews', 'floor-plan', 'possession-date', 'amenities', 'location-map', 'brochure', 'rera'];

const bannerImages = [
    'https://cdn.supremeuniversal.com/media/Supreme-Rivana-Web-Banner_fzjUZ4.jpeg',
    'https://cdn.supremeuniversal.com/media/SupremeVillagioDesktopBanner_5z4eED.jpeg',
    'https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg'
];

const configLabels = {
    '2bhk': '2 BHK',
    '3bhk': '3 BHK',
    '4bhk': '4 BHK',
    '5bhk': '5 BHK',
    'simplex': 'Simplex',
    'duplex': 'Duplex',
    'penthouse': 'Penthouse'
};

const typeLabels = {
    'flats': 'Flats',
    'apartments': 'Apartments',
    'homes': 'Homes',
    'residences': 'Residences',
    'projects': 'Projects'
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

function generateSitemap10k() {
    console.log('⏳ Starting generation of segmented, image-enhanced programmatic SEO sitemaps...');

    // Chunk size: 10 localities per file (resulting in 5 files total)
    const chunkSize = 10;
    
    for (let index = 0; index < 5; index++) {
        const start = index * chunkSize;
        const end = start + chunkSize;
        const chunkLocs = locations.slice(start, end);
        const sitemapFile = path.join(process.cwd(), 'public', `sitemap-pune-${index + 1}.xml`);
        
        let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;

        let count = 0;
        let imgIdx = 0;

        for (const loc of chunkLocs) {
            for (const config of configs) {
                for (const type of propertyTypes) {
                    for (const theme of themes) {
                        const slug = `${config}-${type}-in-${loc.id}-${theme}`;
                        const imageUrl = bannerImages[imgIdx % bannerImages.length];
                        const title = `${configLabels[config]} ${typeLabels[type]} in ${loc.name} - ${themeLabels[theme]}`;
                        const caption = `Explore premium ${configLabels[config]} layouts, pricing models, and connectivity parameters in ${loc.name} with reference to Supreme Rivana Punawale.`;

                        xml += `
  <url>
    <loc>${DOMAIN}/pune-real-estate/${slug}</loc>
    <lastmod>${DATE}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
    <image:image>
      <image:loc>${imageUrl}</image:loc>
      <image:title>${title.replace(/&/g, '&amp;')}</image:title>
      <image:caption>${caption.replace(/&/g, '&amp;')}</image:caption>
    </image:image>
  </url>`;
                        count++;
                        imgIdx++;
                    }
                }
            }
        }

        xml += `
</urlset>`;

        fs.writeFileSync(sitemapFile, xml.trim());
        console.log(`✅ Successfully generated sitemap-pune-${index + 1}.xml with ${count} URLs`);
    }

    // Clean up old sitemap-pune.xml if it exists to avoid confusion
    const oldSitemap = path.join(process.cwd(), 'public', 'sitemap-pune.xml');
    if (fs.existsSync(oldSitemap)) {
        fs.unlinkSync(oldSitemap);
    }
}

generateSitemap10k();
