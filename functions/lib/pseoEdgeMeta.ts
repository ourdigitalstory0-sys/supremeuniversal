/**
 * Edge Metadata Generator for Cloudflare Workers / Pages
 * Provides microsecond metadata resolution for programmatic SEO routes
 * without external database queries or runtime lag.
 */

export interface EdgePseoMeta {
    title: string;
    description: string;
    canonical: string;
    h1: string;
    faqs: { q: string; a: string }[];
    schema: Record<string, unknown>[];
}

const LOCALITIES: Record<string, { name: string; nearbyIT: string; avgRate: string }> = {
    'punawale': { name: 'Punawale', nearbyIT: '10 Mins', avgRate: '₹6,800 - ₹7,500/Sq.ft' },
    'hinjewadi': { name: 'Hinjewadi', nearbyIT: '0 Mins', avgRate: '₹7,500 - ₹8,800/Sq.ft' },
    'wakad': { name: 'Wakad', nearbyIT: '12 Mins', avgRate: '₹8,500 - ₹9,800/Sq.ft' },
    'baner': { name: 'Baner', nearbyIT: '18 Mins', avgRate: '₹9,800 - ₹11,500/Sq.ft' },
    'mahalunge': { name: 'Mahalunge', nearbyIT: '8 Mins', avgRate: '₹7,800 - ₹8,600/Sq.ft' },
    'balewadi': { name: 'Balewadi', nearbyIT: '15 Mins', avgRate: '₹9,200 - ₹10,800/Sq.ft' },
    'tathawade': { name: 'Tathawade', nearbyIT: '12 Mins', avgRate: '₹7,000 - ₹7,800/Sq.ft' },
    'ravet': { name: 'Ravet', nearbyIT: '15 Mins', avgRate: '₹6,800 - ₹7,600/Sq.ft' },
    'kiwale': { name: 'Kiwale', nearbyIT: '18 Mins', avgRate: '₹6,200 - ₹6,800/Sq.ft' },
    'akurdi': { name: 'Akurdi', nearbyIT: '20 Mins', avgRate: '₹7,200 - ₹8,000/Sq.ft' },
    'chinchwad': { name: 'Chinchwad', nearbyIT: '22 Mins', avgRate: '₹7,800 - ₹8,500/Sq.ft' },
    'pimpri': { name: 'Pimpri', nearbyIT: '25 Mins', avgRate: '₹7,500 - ₹8,200/Sq.ft' },
    'somatane': { name: 'Somatane', nearbyIT: '25 Mins', avgRate: '₹5,500 - ₹6,200/Sq.ft' },
    'talegaon': { name: 'Talegaon', nearbyIT: '30 Mins', avgRate: '₹4,800 - ₹5,500/Sq.ft' },
    'koregaon-park': { name: 'Koregaon Park', nearbyIT: '30 Mins', avgRate: '₹14,000 - ₹18,000/Sq.ft' },
    'kalyani-nagar': { name: 'Kalyani Nagar', nearbyIT: '30 Mins', avgRate: '₹12,500 - ₹15,500/Sq.ft' },
    'viman-nagar': { name: 'Viman Nagar', nearbyIT: '28 Mins', avgRate: '₹11,000 - ₹13,500/Sq.ft' },
    'kharadi': { name: 'Kharadi', nearbyIT: '25 Mins', avgRate: '₹9,000 - ₹10,500/Sq.ft' },
    'hadapsar': { name: 'Hadapsar', nearbyIT: '28 Mins', avgRate: '₹8,000 - ₹9,500/Sq.ft' },
    'undri': { name: 'Undri', nearbyIT: '35 Mins', avgRate: '₹6,000 - ₹6,800/Sq.ft' },
    'nibm': { name: 'NIBM', nearbyIT: '32 Mins', avgRate: '₹7,500 - ₹8,800/Sq.ft' },
    'katraj': { name: 'Katraj', nearbyIT: '30 Mins', avgRate: '₹6,800 - ₹7,600/Sq.ft' },
    'kothrud': { name: 'Kothrud', nearbyIT: '25 Mins', avgRate: '₹12,000 - ₹14,500/Sq.ft' },
    'shivajinagar': { name: 'Shivajinagar', nearbyIT: '25 Mins', avgRate: '₹15,000 - ₹19,000/Sq.ft' },
    'camp': { name: 'Camp', nearbyIT: '28 Mins', avgRate: '₹13,000 - ₹16,000/Sq.ft' },
    'swargate': { name: 'Swargate', nearbyIT: '28 Mins', avgRate: '₹11,000 - ₹13,000/Sq.ft' },
    'dhanori': { name: 'Dhanori', nearbyIT: '28 Mins', avgRate: '₹6,800 - ₹7,500/Sq.ft' },
    'vishrantwadi': { name: 'Vishrantwadi', nearbyIT: '25 Mins', avgRate: '₹7,200 - ₹8,000/Sq.ft' },
    'lohegaon': { name: 'Lohegaon', nearbyIT: '28 Mins', avgRate: '₹6,200 - ₹6,900/Sq.ft' },
    'wagholi': { name: 'Wagholi', nearbyIT: '22 Mins', avgRate: '₹6,000 - ₹6,800/Sq.ft' },
    'mundhwa': { name: 'Mundhwa', nearbyIT: '22 Mins', avgRate: '₹8,200 - ₹9,500/Sq.ft' },
    'keshav-nagar': { name: 'Keshav Nagar', nearbyIT: '24 Mins', avgRate: '₹7,200 - ₹8,000/Sq.ft' },
    'manjri': { name: 'Manjri', nearbyIT: '26 Mins', avgRate: '₹6,500 - ₹7,200/Sq.ft' },
    'chakan': { name: 'Chakan', nearbyIT: '35 Mins', avgRate: '₹4,500 - ₹5,200/Sq.ft' },
    'bhosari': { name: 'Bhosari', nearbyIT: '28 Mins', avgRate: '₹6,200 - ₹7,000/Sq.ft' },
    'moshi': { name: 'Moshi', nearbyIT: '30 Mins', avgRate: '₹5,800 - ₹6,600/Sq.ft' },
    'alandi': { name: 'Alandi', nearbyIT: '35 Mins', avgRate: '₹5,200 - ₹5,800/Sq.ft' },
    'sangvi': { name: 'Sangvi', nearbyIT: '18 Mins', avgRate: '₹7,800 - ₹8,500/Sq.ft' },
    'pimple-saudagar': { name: 'Pimple Saudagar', nearbyIT: '15 Mins', avgRate: '₹8,800 - ₹9,800/Sq.ft' },
    'pimple-gurav': { name: 'Pimple Gurav', nearbyIT: '18 Mins', avgRate: '₹7,800 - ₹8,600/Sq.ft' },
    'pimple-nilakh': { name: 'Pimple Nilakh', nearbyIT: '14 Mins', avgRate: '₹9,500 - ₹10,800/Sq.ft' },
    'rahatani': { name: 'Rahatani', nearbyIT: '15 Mins', avgRate: '₹7,800 - ₹8,500/Sq.ft' },
    'thergaon': { name: 'Thergaon', nearbyIT: '12 Mins', avgRate: '₹7,500 - ₹8,200/Sq.ft' },
    'bavdhan': { name: 'Bavdhan', nearbyIT: '18 Mins', avgRate: '₹8,800 - ₹10,200/Sq.ft' },
    'pashan': { name: 'Pashan', nearbyIT: '18 Mins', avgRate: '₹9,500 - ₹10,800/Sq.ft' },
    'sus': { name: 'Sus', nearbyIT: '15 Mins', avgRate: '₹7,200 - ₹8,000/Sq.ft' },
    'balewadi-high-street': { name: 'Balewadi High Street', nearbyIT: '14 Mins', avgRate: '₹10,500 - ₹12,500/Sq.ft' },
    'maandvi': { name: 'Maandvi', nearbyIT: '8 Mins', avgRate: '₹7,400 - ₹8,200/Sq.ft' },
    'marunji': { name: 'Marunji', nearbyIT: '5 Mins', avgRate: '₹7,000 - ₹7,800/Sq.ft' },
    'gahunje': { name: 'Gahunje', nearbyIT: '20 Mins', avgRate: '₹6,500 - ₹7,200/Sq.ft' }
};

const CONFIGS: Record<string, string> = {
    '2bhk': '2 BHK',
    '3bhk': '3 BHK',
    '4bhk': '4 BHK',
    '5bhk': '5 BHK',
    'simplex': 'Simplex',
    'duplex': 'Duplex',
    'penthouse': 'Penthouse',
    'townhouses': 'Townhouses'
};

const PROPERTY_TYPES: Record<string, string> = {
    'flats': 'Flats',
    'apartments': 'Apartments',
    'homes': 'Homes',
    'residences': 'Residences',
    'projects': 'Projects'
};

const THEMES: Record<string, { name: string; suffix: string }> = {
    'price': { name: 'Price & Cost Sheet', suffix: 'Cost Sheet, Starting Prices & Payment Plans' },
    'reviews': { name: 'Reviews & Ratings', suffix: 'Ratings, Construction Quality & Buyer Reviews' },
    'floor-plan': { name: 'Floor Plans & Layouts', suffix: 'Carpet Area, Layout Plans & 3D Master Tour' },
    'possession-date': { name: 'Possession Date & Timelines', suffix: 'MahaRERA Handover Dates & Construction Status' },
    'amenities': { name: 'Amenities & Features', suffix: 'Clubhouse, Skywalk & 40+ Luxury Amenities' },
    'location-map': { name: 'Location Map & Connectivity', suffix: 'Road Maps, Hinjewadi Connectivity & Transit Index' },
    'brochure': { name: 'Download Brochure', suffix: 'Official PDF Brochure & Project Specification Sheet' },
    'rera': { name: 'MahaRERA Registration Details', suffix: 'RERA Number, Approvals & Certificate Verification' }
};

const PROJECTS: Record<string, { name: string; location: string; rera: string }> = {
    'supreme-towers': { name: 'Supreme Towers', location: 'Mundhwa, Pune East', rera: 'P52100051877' },
    'supreme-estia': { name: 'Supreme Estia', location: 'Baner, Pune West', rera: 'P52100028795' },
    'supreme-villagio': { name: 'Supreme Villagio', location: 'Somatane, Pune Express Way', rera: 'P52100049942' },
    'supreme-rivana': { name: 'Supreme Rivana', location: 'Punawale, Pune West', rera: 'P52100056095' },
    'supreme-palacio': { name: 'Supreme Palacio', location: 'Baner, Pune West', rera: 'P52100032104' },
    'supreme-vador': { name: 'Supreme Vador', location: 'Koregaon Park, Pune', rera: 'P52100030588' }
};

export function resolvePseoMetadata(pathname: string): EdgePseoMeta | null {
    const cleanPath = pathname.replace(/\/$/, '');

    // 1. Regional Pune Real Estate PSEO Route
    if (cleanPath.startsWith('/pune-real-estate/')) {
        const slug = cleanPath.replace('/pune-real-estate/', '');
        const match = slug.match(/^([a-z0-9]+)-([a-z0-9]+)-in-([a-z0-9-]+)-([a-z0-9-]+)$/);
        if (!match) return null;

        const [_, configId, typeId, locId, themeId] = match;
        const locality = LOCALITIES[locId];
        const configName = CONFIGS[configId];
        const typeName = PROPERTY_TYPES[typeId];
        const theme = THEMES[themeId];

        if (!locality || !configName || !typeName || !theme) return null;

        const title = `${configName} ${typeName} in ${locality.name} (${theme.name}) | Supreme Rivana Pune`;
        const description = `Looking for ${configName} ${typeName.toLowerCase()} in ${locality.name}? Explore ${theme.suffix} with Supreme Rivana Punawale. Average rate in ${locality.name}: ${locality.avgRate}. Just ${locality.nearbyIT} to Hinjewadi IT Park.`;
        const canonical = `https://www.supreme-universal.in/pune-real-estate/${slug}`;
        const h1 = `${configName} ${typeName} in ${locality.name} - ${theme.name}`;

        const faqs = [
            {
                q: `What is the price of ${configName} in ${locality.name} compared to Supreme Rivana?`,
                a: `Property rates in ${locality.name} average around ${locality.avgRate}. Supreme Rivana in Punawale offers luxury 2 & 3 BHK waterfront apartments starting from ₹94 Lakhs* with superior carpet layouts, 40+ resort amenities, and 15-acre gated township living.`
            },
            {
                q: `How far is ${locality.name} from Hinjewadi IT Park?`,
                a: `${locality.name} is situated approximately ${locality.nearbyIT} from Hinjewadi IT Park. Supreme Rivana Punawale offers 10-15 minute connectivity to Hinjewadi Phase 1 via Marunji Road.`
            },
            {
                q: `Is Supreme Rivana RERA approved?`,
                a: `Yes, Supreme Rivana is registered with MahaRERA under registration number P52100056095, guaranteeing title transparency and timeline compliance.`
            }
        ];

        const schema = [
            {
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                'itemListElement': [
                    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.supreme-universal.in/' },
                    { '@type': 'ListItem', 'position': 2, 'name': 'Pune Real Estate', 'item': 'https://www.supreme-universal.in/pune-real-estate' },
                    { '@type': 'ListItem', 'position': 3, 'name': locality.name, 'item': `https://www.supreme-universal.in/pune-real-estate/${configId}-${typeId}-in-${locId}-price` },
                    { '@type': 'ListItem', 'position': 4, 'name': `${configName} ${theme.name}`, 'item': canonical }
                ]
            },
            {
                '@context': 'https://schema.org',
                '@type': 'RealEstateListing',
                'name': title,
                'description': description,
                'url': canonical,
                'offers': {
                    '@type': 'Offer',
                    'price': configId === '3bhk' ? '15500000' : '9400000',
                    'priceCurrency': 'INR',
                    'availability': 'https://schema.org/InStock',
                    'itemOffered': {
                        '@type': 'Accommodation',
                        'name': `${configName} Residence in ${locality.name}`
                    }
                }
            },
            {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                'mainEntity': faqs.map(f => ({
                    '@type': 'Question',
                    'name': f.q,
                    'acceptedAnswer': { '@type': 'Answer', 'text': f.a }
                }))
            }
        ];

        return { title, description, canonical, h1, faqs, schema };
    }

    // 2. Project PSEO Route
    if (cleanPath.startsWith('/pune-projects/')) {
        const slug = cleanPath.replace('/pune-projects/', '');
        const themeEntry = Object.entries(THEMES).find(([id]) => slug.endsWith(id));
        if (!themeEntry) return null;

        const [themeId, theme] = themeEntry;
        const remainder = slug.slice(0, -(themeId.length + 1));
        const lastDash = remainder.lastIndexOf('-');
        if (lastDash === -1) return null;

        const projectId = remainder.slice(0, lastDash);
        const configId = remainder.slice(lastDash + 1);

        const project = PROJECTS[projectId];
        const configName = CONFIGS[configId];
        if (!project || !configName) return null;

        const title = `${project.name} ${configName} ${theme.name} | Supreme Universal Pune`;
        const description = `Explore official ${theme.name} for ${configName} at ${project.name}, located in ${project.location}. MahaRERA: ${project.rera}. Check carpet layouts, price sheets and reviews.`;
        const canonical = `https://www.supreme-universal.in/pune-projects/${slug}`;
        const h1 = `${project.name} - ${configName} ${theme.name}`;

        const faqs = [
            {
                q: `What is the price of ${configName} at ${project.name}?`,
                a: `${project.name} in ${project.location} offers bespoke ${configName} residences. For updated pricing, inventory details, and floor plans, contact the Supreme Universal sales advisory team.`
            },
            {
                q: `What is the MahaRERA number for ${project.name}?`,
                a: `${project.name} is registered under MahaRERA registration number ${project.rera}, ensuring consumer protection and scheduled project delivery.`
            }
        ];

        const schema = [
            {
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                'itemListElement': [
                    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.supreme-universal.in/' },
                    { '@type': 'ListItem', 'position': 2, 'name': 'Projects', 'item': 'https://www.supreme-universal.in/supreme-rivana-punawale-overview' },
                    { '@type': 'ListItem', 'position': 3, 'name': project.name, 'item': `https://www.supreme-universal.in/pune-projects/${projectId}-${configId}-price` },
                    { '@type': 'ListItem', 'position': 4, 'name': `${configName} ${theme.name}`, 'item': canonical }
                ]
            },
            {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                'mainEntity': faqs.map(f => ({
                    '@type': 'Question',
                    'name': f.q,
                    'acceptedAnswer': { '@type': 'Answer', 'text': f.a }
                }))
            }
        ];

        return { title, description, canonical, h1, faqs, schema };
    }

    return null;
}
