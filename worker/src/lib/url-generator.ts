/**
 * URL Generator — Supreme Universal Programmatic SEO
 *
 * Generates the complete 14,500+ URL catalog in the correct priority order:
 *   1. Flagship / core pages
 *   2. Supreme project pages (pune-projects/*)
 *   3. Pune real estate programmatic pages (pune-real-estate/*)
 *
 * Matches exactly the patterns used in:
 *  - scripts/generate-sitemap-projects.mjs
 *  - scripts/generate-sitemap-10k.mjs
 */

const DOMAIN = 'https://www.supreme-universal.in';

// ── Flagship priority pages ───────────────────────────────────────────────
export const FLAGSHIP_URLS: string[] = [
    `${DOMAIN}/`,
    `${DOMAIN}/supreme-rivana-punawale-overview`,
    `${DOMAIN}/supreme-rivana-punawale-price-list`,
    `${DOMAIN}/supreme-rivana-punawale-floor-plans`,
    `${DOMAIN}/supreme-rivana-punawale-floor-plan`,
    `${DOMAIN}/supreme-rivana-punawale-comparison`,
    `${DOMAIN}/supreme-rivana-punawale-location`,
    `${DOMAIN}/supreme-rivana-punawale-amenities`,
    `${DOMAIN}/supreme-rivana-punawale-gallery`,
    `${DOMAIN}/supreme-rivana-punawale-reviews`,
    `${DOMAIN}/supreme-rivana-punawale-possession-date`,
    `${DOMAIN}/supreme-rivana-punawale-contact`,
    `${DOMAIN}/supreme-rivana-punawale-faq`,
    `${DOMAIN}/supreme-2bhk-punawale-flats`,
    `${DOMAIN}/supreme-3bhk-punawale-flats`,
    `${DOMAIN}/pune-real-estate`,
];

// ── Projects data (from generate-sitemap-projects.mjs) ───────────────────
const PROJECTS = [
    { id: 'supreme-rivana',   name: 'Supreme Rivana',   location: 'Punawale', rera: 'PM1261012502656' },
    { id: 'supreme-towers',   name: 'Supreme Towers',   location: 'Mundhwa',  rera: 'P52100056789' },
    { id: 'supreme-villagio', name: 'Supreme Villagio', location: 'Somatane', rera: 'P52100023456' },
    { id: 'supreme-estia',    name: 'Supreme Estia',    location: 'Baner',    rera: 'P52100034567' },
    { id: 'supreme-wakad',    name: 'Supreme Wakad',    location: 'Wakad',    rera: 'P52100045678' },
    { id: 'supreme-pallacio', name: 'Supreme Pallacio', location: 'Baner',    rera: 'P52100067890' },
    { id: 'supreme-vivero',   name: 'Supreme Vivero',   location: 'Baner',    rera: 'P52100078901' },
    { id: 'supreme-amadore',  name: 'Supreme Amadore',  location: 'Baner',    rera: 'P52100089012' },
    { id: 'supreme-estado',   name: 'Supreme Estado',   location: 'Baner',    rera: 'P52100090123' },
    { id: 'supreme-esteban',  name: 'Supreme Esteban',  location: 'Koregaon Park', rera: 'P52100012345' },
];

// ── Configs ───────────────────────────────────────────────────────────────
const CONFIGS = ['2bhk', '3bhk', '4bhk', '5bhk', 'simplex', 'duplex', 'penthouse'];

// ── Themes ────────────────────────────────────────────────────────────────
const THEMES = ['price', 'reviews', 'floor-plan', 'possession-date', 'amenities', 'location-map', 'brochure', 'rera'];

// ── Property types ────────────────────────────────────────────────────────
const TYPES = ['flats', 'apartments', 'homes', 'residences', 'projects'];

// ── Locations (50 Pune micro-markets from generate-sitemap-10k.mjs) ───────
const LOCATIONS = [
    'punawale', 'hinjewadi', 'wakad', 'baner', 'mahalunge', 'balewadi',
    'tathawade', 'ravet', 'kiwale', 'akurdi', 'chinchwad', 'pimpri',
    'somatane', 'talegaon', 'koregaon-park', 'kalyani-nagar', 'viman-nagar',
    'kharadi', 'hadapsar', 'undri', 'nibm', 'katraj', 'kothrud', 'shivajinagar',
    'camp', 'swargate', 'dhanori', 'vishrantwadi', 'lohegaon', 'wagholi',
    'mundhwa', 'keshav-nagar', 'manjri', 'chakan', 'bhosari', 'moshi',
    'alandi', 'sangvi', 'pimple-saudagar', 'pimple-gurav', 'pimple-nilakh',
    'rahatani', 'thergaon', 'bavdhan', 'pashan', 'sus', 'balewadi-high-street',
    'maandvi', 'marunji', 'gahunje',
];

// ── URL Generation ────────────────────────────────────────────────────────

/** Project pages: /pune-projects/{projectId}-{configId}-{themeId} */
export function generateProjectUrls(): string[] {
    const urls: string[] = [];
    for (const project of PROJECTS) {
        for (const config of CONFIGS) {
            for (const theme of THEMES) {
                // Villagio penthouse → townhouses (matches sitemap script logic)
                const activeConfig = (project.id === 'supreme-villagio' && config === 'penthouse')
                    ? 'townhouses'
                    : config;
                urls.push(`${DOMAIN}/pune-projects/${project.id}-${activeConfig}-${theme}`);
            }
        }
    }
    return urls; // 10 × 7 × 8 = 560 URLs
}

/** Real estate programmatic pages: /pune-real-estate/{config}-{type}-in-{loc}-{theme} */
export function generateRealEstateUrls(): string[] {
    const urls: string[] = [];
    for (const loc of LOCATIONS) {
        for (const config of CONFIGS) {
            for (const type of TYPES) {
                for (const theme of THEMES) {
                    urls.push(`${DOMAIN}/pune-real-estate/${config}-${type}-in-${loc}-${theme}`);
                }
            }
        }
    }
    return urls; // 50 × 7 × 5 × 8 = 14,000 URLs
}

/**
 * Returns the complete ordered URL catalog.
 * Flagship → Project pages → Real estate pages
 */
export function getAllUrls(): string[] {
    return [
        ...FLAGSHIP_URLS,
        ...generateProjectUrls(),
        ...generateRealEstateUrls(),
    ];
}

/** Returns projects list for use in other jobs */
export function getProjects() {
    return PROJECTS;
}
