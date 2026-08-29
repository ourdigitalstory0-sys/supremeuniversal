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

const FLAGSHIP_PAGES: Record<string, {
    title: string;
    description: string;
    h1: string;
    breadcrumb: string;
    faqs: { q: string; a: string }[];
}> = {
    '/supreme-rivana-punawale-price-list': {
        title: 'Supreme Rivana Punawale Price List 2026 | 2 & 3 BHK Cost Sheets & Payment Plans',
        description: 'Official 2026 Price List for Supreme Rivana Punawale by Supreme Universal. 2 BHK starting from ₹94 Lakhs*, 3 BHK starting from ₹1.55 Cr*. MahaRERA: P52100056095. Download complete cost sheet.',
        h1: 'Supreme Rivana Punawale — Price List & Cost Sheets 2026',
        breadcrumb: 'Price List',
        faqs: [
            { q: 'What is the starting price of 2 BHK and 3 BHK at Supreme Rivana?', a: 'Luxury 2 BHK residences start from ₹94 Lakhs* onwards, and spacious 3 BHK premium apartments start from ₹1.55 Cr* onwards.' },
            { q: 'What is the MahaRERA registration number for Supreme Rivana?', a: 'Supreme Rivana Punawale is registered with MahaRERA under number P52100056095.' },
            { q: 'Are bank home loans approved for Supreme Rivana?', a: 'Yes, home loans are pre-approved by leading financial institutions including SBI, HDFC, ICICI, and Axis Bank with flexible payment subvention options.' }
        ]
    },
    '/supreme-rivana-punawale-price': {
        title: 'Supreme Rivana Punawale Price | 2 & 3 BHK Cost Breakdown 2026',
        description: 'Get verified pricing and payment schedules for Supreme Rivana Punawale. 2 BHK from ₹94 Lakhs*, 3 BHK from ₹1.55 Cr*. Just 10 Mins to Hinjewadi IT Park.',
        h1: 'Supreme Rivana Punawale Pricing Structure',
        breadcrumb: 'Price',
        faqs: [
            { q: 'What are the current pricing slabs at Supreme Rivana Punawale?', a: '2 BHK apartments range from ₹94 Lakhs* to ₹98 Lakhs*, and 3 BHK premium residences start from ₹1.55 Cr*.' }
        ]
    },
    '/supreme-rivana-punawale-floor-plans': {
        title: 'Supreme Rivana Floor Plans & Layouts | 2 & 3 BHK Carpet Areas Punawale',
        description: 'Download official floor plans and master layout for Supreme Rivana Punawale. 2 BHK (750-850 Sq.ft) & 3 BHK (1050-1150 Sq.ft) river-facing residences with only 6 flats per floor.',
        h1: 'Supreme Rivana Punawale — Floor Plans & Unit Layouts',
        breadcrumb: 'Floor Plans',
        faqs: [
            { q: 'What are the carpet areas for 2 BHK and 3 BHK at Supreme Rivana?', a: 'The 2 BHK configurations offer 750 to 850 Sq.ft carpet area, while 3 BHK units offer 1050 to 1150 Sq.ft carpet area.' },
            { q: 'How many apartments are there per floor in Supreme Rivana?', a: 'Supreme Rivana features exclusive low-density planning with only 6 residences per floor and high-speed elevators.' }
        ]
    },
    '/supreme-rivana-punawale-floor-plan': {
        title: 'Supreme Rivana Floor Plans | 2 & 3 BHK Master Layout Punawale',
        description: 'Explore 2D and 3D architectural floor plans for Supreme Rivana Punawale by Supreme Universal. Optimized living spaces, private balconies, and cross-ventilation.',
        h1: 'Supreme Rivana Master Floor Plans',
        breadcrumb: 'Floor Plan',
        faqs: [
            { q: 'Does Supreme Rivana have Vastu compliant floor plans?', a: 'Yes, layouts are designed with East-West orientation and Vastu compliance ensuring ample daylight and natural airflow.' }
        ]
    },
    '/supreme-rivana-punawale-overview': {
        title: 'Supreme Rivana Punawale | Luxury 15-Acre Riverside Township Pune',
        description: 'Discover Supreme Rivana Punawale by Supreme Universal: 31-storey high-rise towers spanning 15 acres. Luxury 2 & 3 BHK riverside apartments 10 mins from Hinjewadi IT Park. MahaRERA: P52100056095.',
        h1: 'Supreme Rivana Punawale — 15-Acre Riverside Township',
        breadcrumb: 'Overview',
        faqs: [
            { q: 'What makes Supreme Rivana unique in Punawale?', a: 'It is a 15-acre riverside integrated development with 31-storey towers, over 40 resort amenities, and 10-minute connectivity to Hinjewadi IT Park.' }
        ]
    },
    '/supreme-rivana-punawale-comparison': {
        title: 'Supreme Rivana Punawale vs Competitors | Project Comparison 2026',
        description: 'Compare Supreme Rivana with Puneville, Kohinoor, and Vilas Javdekar in Punawale. Evaluate carpet area efficiency, 40+ resort amenities, riverfront lifestyle, and 2026 pricing.',
        h1: 'Supreme Rivana Punawale vs Competitors — Comparative Analysis',
        breadcrumb: 'Comparison',
        faqs: [
            { q: 'How does Supreme Rivana compare to other Punawale projects?', a: 'Supreme Rivana offers larger carpet areas, exclusive 6-flats-per-floor privacy, 40+ resort amenities, and the 40+ year heritage of Supreme Universal.' }
        ]
    },
    '/supreme-rivana-punawale-location': {
        title: 'Supreme Rivana Location Map | Near Hinjewadi IT Park & Expressway Punawale',
        description: 'Supreme Rivana Punawale exact location map: Tathawade Road, Punawale, Pune 411033. Just 10 Mins to Hinjewadi IT Park Phase 1, 5 Mins to Mumbai-Pune Expressway, and near upcoming Metro Line 3.',
        h1: 'Supreme Rivana Punawale — Location & Transit Connectivity',
        breadcrumb: 'Location',
        faqs: [
            { q: 'How far is Supreme Rivana from Hinjewadi Phase 1?', a: 'Supreme Rivana is located just 10-15 minutes from Hinjewadi IT Park Phase 1 via Marunji Road.' }
        ]
    },
    '/supreme-rivana-punawale-amenities': {
        title: 'Supreme Rivana Amenities | 40+ Luxury Lifestyle Amenities in Punawale',
        description: 'Experience 40+ curated resort-style amenities at Supreme Rivana Punawale: Infinity edge pool, 25,000 sq.ft clubhouse, sky lounge, riverside promenade, and sports arena.',
        h1: 'Supreme Rivana Punawale — 40+ Curated Resort Amenities',
        breadcrumb: 'Amenities',
        faqs: [
            { q: 'What amenities are available at Supreme Rivana?', a: 'Over 40 amenities including an infinity swimming pool, multi-tier clubhouse, fitness center, banquet hall, squash court, and riverside walking trail.' }
        ]
    },
    '/supreme-rivana-punawale-gallery': {
        title: 'Supreme Rivana Gallery & Sample Flat Tour | Photos & Renders Punawale',
        description: 'High-resolution photo gallery and 360-degree sample flat walkthrough of Supreme Rivana Punawale. Discover luxurious architectural finishes by Supreme Universal.',
        h1: 'Supreme Rivana Punawale — Photo Gallery & Sample Residence',
        breadcrumb: 'Gallery',
        faqs: [
            { q: 'Can I visit the sample flat at Supreme Rivana?', a: 'Yes, fully furnished 2 BHK and 3 BHK sample flats are available for viewing at the on-site experience gallery.' }
        ]
    },
    '/supreme-rivana-punawale-reviews': {
        title: 'Supreme Rivana Reviews & Ratings | Resident Testimonials Punawale',
        description: 'Read verified buyer reviews and architectural ratings for Supreme Rivana Punawale. Rated 4.9/5 on Google for construction quality, privacy, and timely MahaRERA compliance.',
        h1: 'Supreme Rivana Punawale — Verified Reviews & Ratings',
        breadcrumb: 'Reviews',
        faqs: [
            { q: 'What is the Google rating for Supreme Rivana Punawale?', a: 'Supreme Rivana holds an exceptional 4.9 / 5 rating based on verified customer feedback and construction quality assessments.' }
        ]
    },
    '/supreme-rivana-punawale-possession-date': {
        title: 'Supreme Rivana Possession Date & Construction Status | MahaRERA P52100056095',
        description: 'Check MahaRERA approved possession timelines and construction status for Supreme Rivana Punawale. Registered with MahaRERA under number P52100056095.',
        h1: 'Supreme Rivana Punawale — Possession Timelines & Status',
        breadcrumb: 'Possession Date',
        faqs: [
            { q: 'What is the possession date for Supreme Rivana?', a: 'Possession is scheduled in phased milestones in accordance with MahaRERA registration number P52100056095.' }
        ]
    },
    '/supreme-rivana-punawale-contact': {
        title: 'Contact Supreme Rivana Sales Office | Book Site Visit & Cost Sheet',
        description: 'Schedule an exclusive site visit to Supreme Rivana Punawale. Call +91-7744009295 for real-time inventory, sample flat walkthrough, and limited launch pricing offers.',
        h1: 'Contact Supreme Rivana Punawale Sales Experience Center',
        breadcrumb: 'Contact',
        faqs: [
            { q: 'How can I schedule a site visit to Supreme Rivana?', a: 'You can call +91-7744009295 or submit the online enquiry form to schedule a site tour and pick-and-drop assistance.' }
        ]
    },
    '/supreme-rivana-punawale-faq': {
        title: 'Supreme Rivana FAQs | Complete Buyer Guide, Pricing & RERA Answers',
        description: 'Answers to top buyer questions on Supreme Rivana Punawale: 2 & 3 BHK pricing, carpet areas, home loan banks, maintenance charges, and Hinjewadi commute.',
        h1: 'Supreme Rivana Punawale — Frequently Asked Questions',
        breadcrumb: 'FAQ',
        faqs: [
            { q: 'Is Supreme Rivana Punawale a good investment?', a: 'Yes, with upcoming Metro Line 3, Ring Road expansion, and 10-minute proximity to Hinjewadi IT Park, Punawale is experiencing 12-14% annual capital appreciation.' }
        ]
    },
    '/supreme-2bhk-punawale-flats': {
        title: '2 BHK Flats in Punawale — Supreme Rivana Starting ₹94 Lakhs*',
        description: 'Spacious 2 BHK luxury flats in Punawale at Supreme Rivana. River-facing balconies, 750-850 sq.ft carpet, 10 mins to Hinjewadi Phase 1. Starting ₹94 Lakhs*. MahaRERA: P52100056095.',
        h1: 'Supreme Rivana — Luxury 2 BHK Apartments in Punawale',
        breadcrumb: '2 BHK Flats',
        faqs: [
            { q: 'What is the price of 2 BHK in Supreme Rivana Punawale?', a: '2 BHK luxury residences start from ₹94 Lakhs* with premium imported specifications and riverfront views.' }
        ]
    },
    '/supreme-3bhk-punawale-flats': {
        title: '3 BHK Luxury Flats in Punawale — Supreme Rivana Starting ₹1.55 Cr*',
        description: 'Ultra-luxury 3 BHK apartments in Punawale at Supreme Rivana. Panoramic views, 1050-1150 sq.ft carpet, only 6 flats per floor, resort clubhouse. Starting ₹1.55 Cr*. MahaRERA: P52100056095.',
        h1: 'Supreme Rivana — Grand 3 BHK Residences in Punawale',
        breadcrumb: '3 BHK Flats',
        faqs: [
            { q: 'What is the price of 3 BHK in Supreme Rivana Punawale?', a: '3 BHK grand residences start from ₹1.55 Cr* featuring expansive deck balconies and master bedroom suites.' }
        ]
    },
    '/pune-real-estate': {
        title: 'Pune Real Estate Directory & Micro-Market Intelligence Hub | Supreme Universal',
        description: 'Comprehensive micro-market real estate guide for 50+ Pune localities. Explore 2 & 3 BHK prices, carpet area layouts, rental yields & connectivity indices across West, East & Central Pune.',
        h1: 'Pune Real Estate Directory & Micro-Market Intelligence Hub',
        breadcrumb: 'Pune Directory',
        faqs: [
            { q: 'Which are the best micro-markets to buy property in Pune?', a: 'West Pune (Punawale, Wakad, Hinjewadi, Baner, Balewadi) is leading demand due to proximity to IT hubs and the Mumbai-Pune Expressway.' }
        ]
    }
};

export function resolvePseoMetadata(pathname: string): EdgePseoMeta | null {
    const cleanPath = pathname.replace(/\/$/, '');

    // 0. Flagship Supreme Rivana & Directory Routes (Direct Edge SSR Pre-rendering)
    const flagship = FLAGSHIP_PAGES[cleanPath];
    if (flagship) {
        const canonical = `https://www.supreme-universal.in${cleanPath}`;
        const schema = [
            {
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                'itemListElement': [
                    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.supreme-universal.in/' },
                    { '@type': 'ListItem', 'position': 2, 'name': 'Supreme Rivana Punawale', 'item': 'https://www.supreme-universal.in/supreme-rivana-punawale-overview' },
                    { '@type': 'ListItem', 'position': 3, 'name': flagship.breadcrumb, 'item': canonical }
                ]
            },
            {
                '@context': 'https://schema.org',
                '@type': 'ApartmentComplex',
                'name': 'Supreme Rivana Punawale',
                'url': canonical,
                'description': flagship.description,
                'telephone': '+917744009295',
                'identifier': 'P52100056095',
                'geo': {
                    '@type': 'GeoCoordinates',
                    'latitude': '18.637934',
                    'longitude': '73.743360'
                },
                'hasMap': 'https://www.google.com/maps/place/Supreme+Rivana/@18.6379338,73.74336,879m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bc2bb154a1af8d5:0xde1ba7d3dc6ba2d6!8m2!3d18.6379338!4d73.74336!16s%2Fg%2F11n9ckw71s',
                'sameAs': [
                    'https://maps.google.com/?cid=16004655655787471574',
                    'https://www.google.com/maps/place/Supreme+Rivana'
                ],
                'aggregateRating': {
                    '@type': 'AggregateRating',
                    'ratingValue': '4.9',
                    'reviewCount': '1248'
                },
                'offers': [
                    {
                        '@type': 'Offer',
                        'name': '2 BHK Luxury Waterfront Residence',
                        'price': '9400000',
                        'priceCurrency': 'INR',
                        'availability': 'https://schema.org/InStock',
                        'areaServed': 'Punawale, Pune West'
                    },
                    {
                        '@type': 'Offer',
                        'name': '3 BHK Grand Suite',
                        'price': '15500000',
                        'priceCurrency': 'INR',
                        'availability': 'https://schema.org/InStock',
                        'areaServed': 'Punawale, Pune West'
                    }
                ]
            },
            {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                'mainEntity': flagship.faqs.map(f => ({
                    '@type': 'Question',
                    'name': f.q,
                    'acceptedAnswer': { '@type': 'Answer', 'text': f.a }
                }))
            }
        ];

        return {
            title: flagship.title,
            description: flagship.description,
            canonical,
            h1: flagship.h1,
            faqs: flagship.faqs,
            schema
        };
    }

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
                        'name': `${configName} Residence in ${locality.name}`,
                        'geo': {
                            '@type': 'GeoCoordinates',
                            'latitude': '18.637934',
                            'longitude': '73.743360'
                        },
                        'hasMap': 'https://www.google.com/maps/place/Supreme+Rivana/@18.6379338,73.74336,879m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bc2bb154a1af8d5:0xde1ba7d3dc6ba2d6!8m2!3d18.6379338!4d73.74336!16s%2Fg%2F11n9ckw71s'
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
