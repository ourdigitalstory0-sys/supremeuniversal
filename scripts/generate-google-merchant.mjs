import fs from 'fs';
import path from 'path';

const DOMAIN = 'https://www.supreme-universal.in';
const FEED_PATH = path.join(process.cwd(), 'public', 'google-merchant-feed.xml');

export function generateGoogleMerchantFeed() {
    console.log('⏳ Generating Google Merchant Center Product Feed (google-merchant-feed.xml)...');

    const products = [
        {
            id: 'SR-PUNAWALE-2BHK',
            title: 'Supreme Rivana 2 BHK Luxury Riverside Apartment Punawale',
            description: 'Luxury 2 BHK residences (746-786 sq.ft carpet) at Supreme Rivana by Supreme Universal, Punawale, Pune West. 12.6-acre development with 60,000 sq.ft clubhouse, 50+ amenities, 10 mins to Hinjewadi IT Park. MahaRERA: PM1261012502656.',
            link: `${DOMAIN}/supreme-2bhk-punawale-flats`,
            imageLink: 'https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg',
            additionalImageLink: 'https://cdn.supremeuniversal.com/media/SupremeVillagioDesktopBanner_5z4eED.jpeg',
            price: '9700000.00 INR',
            productType: 'Real Estate &gt; Residential Property &gt; 2 BHK Apartments'
        },
        {
            id: 'SR-PUNAWALE-3BHK',
            title: 'Supreme Rivana 3 BHK Grand Riverside Apartment Punawale',
            description: 'Expansive 3 BHK residences (1100-1166 sq.ft carpet) at Supreme Rivana by Supreme Universal, Punawale, Pune West. Riverfront living with panoramic views, 60,000 sq.ft clubhouse, 50+ amenities, only 6 flats per floor. MahaRERA: PM1261012502656.',
            link: `${DOMAIN}/supreme-3bhk-punawale-flats`,
            imageLink: 'https://cdn.supremeuniversal.com/media/SupremeVillagioDesktopBanner_5z4eED.jpeg',
            additionalImageLink: 'https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg',
            price: '14200000.00 INR',
            productType: 'Real Estate &gt; Residential Property &gt; 3 BHK Apartments'
        }
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
  <channel>
    <title>Supreme Rivana Punawale | Luxury Real Estate &amp; Residences Pune</title>
    <link>${DOMAIN}</link>
    <description>Official residential inventory and verified pricing for Supreme Rivana luxury riverside apartments in Punawale, Pune West by Supreme Universal. MahaRERA: PM1261012502656.</description>
${products.map(p => `    <item>
      <g:id>${p.id}</g:id>
      <g:title>${p.title}</g:title>
      <g:description>${p.description}</g:description>
      <g:link>${p.link}</g:link>
      <g:image_link>${p.imageLink}</g:image_link>
      <g:additional_image_link>${p.additionalImageLink}</g:additional_image_link>
      <g:availability>in_stock</g:availability>
      <g:price>${p.price}</g:price>
      <g:brand>Supreme Universal</g:brand>
      <g:condition>new</g:condition>
      <g:google_product_category>Real Estate</g:google_product_category>
      <g:product_type>${p.productType}</g:product_type>
      <g:identifier_exists>no</g:identifier_exists>
      <g:custom_label_0>Punawale</g:custom_label_0>
      <g:custom_label_1>Pune West</g:custom_label_1>
      <g:custom_label_2>MahaRERA: PM1261012502656</g:custom_label_2>
      <g:custom_label_3>Near Hinjewadi IT Park</g:custom_label_3>
      <g:custom_label_4>Luxury Riverside</g:custom_label_4>
    </item>`).join('\n')}
  </channel>
</rss>`;

    fs.writeFileSync(FEED_PATH, xml.trim());
    console.log(`✅ Google Merchant Center Product Feed written successfully at ${FEED_PATH}`);
}

generateGoogleMerchantFeed();
