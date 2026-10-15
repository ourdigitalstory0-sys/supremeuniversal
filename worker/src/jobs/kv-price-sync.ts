/**
 * Job: KV Price Store Sync
 * Schedule: 0 every-6h (every 6 hours)
 *
 * Refreshes live pricing, availability, and project metadata in the
 * shared PRICE_STORE KV namespace. This keeps the edge-rendered pricing
 * that the Pages middleware serves to visitors always up-to-date.
 *
 * Data written to KV is consumed by:
 *  - functions/api/pricing.ts  (price API)
 *  - functions/_middleware.ts  (edge pre-rendering)
 */

import type { Env, JobResult } from '../env.ts';
import { kvSet } from '../lib/kv-state.ts';
import { Logger } from '../lib/logger.ts';

// ── Pricing data ──────────────────────────────────────────────────────────
// In production: fetch this from your CRM / pricing system API.
// For now: authoritative static source of truth (update here for price changes).
const PRICING_DATA = {
    project: 'Supreme Rivana',
    location: 'Punawale, Pune',
    reraNumber: 'PM1261012502656',
    lastUpdated: '', // filled at runtime
    availability: 'available',
    configurations: [
        {
            type: '2 BHK',
            carpetArea: '694–750 sq.ft.',
            startingPrice: 9700000,
            displayPrice: '₹97 Lakhs*',
            allInclusivePrice: '₹1.05 Cr*',
            available: true,
            totalUnits: 280,
            remainingUnits: 142,
        },
        {
            type: '3 BHK',
            carpetArea: '1050–1250 sq.ft.',
            startingPrice: 14200000,
            displayPrice: '₹1.42 Cr*',
            allInclusivePrice: '₹1.55 Cr*',
            available: true,
            totalUnits: 180,
            remainingUnits: 88,
        },
    ],
    amenities: [
        'Infinity Pool', 'Rooftop Deck', 'Clubhouse', 'Gymnasium', 'Jogging Track',
        'Badminton Court', 'Basketball Court', 'Kids Play Zone', 'Amphitheatre',
        'Co-working Space', 'Yoga Deck', 'Senior Citizens Zone', 'Pets Zone',
        'Concierge Services', 'EV Charging Stations', '24x7 Security',
        'Rainwater Harvesting', 'Solar Panels', 'STP Plant', 'Landscaped Gardens',
    ],
    possession: {
        expected: 'December 2027',
        phase: 'Phase 1',
        constructionStage: 'Superstructure in Progress',
    },
    location_highlights: {
        hinjewadi_distance: '10–15 min',
        baner_distance: '12 min',
        wakad_distance: '8 min',
        expressway_distance: '5 min',
        airport_distance: '35 min',
    },
    developer: {
        name: 'Supreme Universal',
        established: 1982,
        deliveredProjects: 50,
        happyFamilies: 15000,
        yearlyRevenue: '₹1,200 Cr+',
    },
};

// ── Web Stories metadata (refreshed alongside pricing) ────────────────────
const WEB_STORIES_META = {
    lastRefreshed: '',
    stories: [
        {
            id: 'supreme-rivana-overview-2026',
            title: 'Supreme Rivana Punawale — Luxury Waterfront Living 2026',
            slug: '/web-stories/supreme-rivana-overview',
            description: '5-slide visual story: price, amenities, location, floor plans, contact',
            posterUrl: 'https://cdn.supremeuniversal.com/media/designthatelevate_jSxOmi.jpg',
            publishedAt: '2026-09-01T00:00:00Z',
            modifiedAt: '', // set at runtime
        },
        {
            id: 'supreme-rivana-price-2026',
            title: 'Supreme Rivana Price 2026 — 2 & 3 BHK from ₹97L*',
            slug: '/web-stories/supreme-rivana-price-2026',
            description: 'Price breakdown, cost sheet, all-inclusive pricing for Supreme Rivana',
            posterUrl: 'https://cdn.supremeuniversal.com/media/Supreme-Rivana-Web-Banner_fzjUZ4.jpeg',
            publishedAt: '2026-09-15T00:00:00Z',
            modifiedAt: '',
        },
        {
            id: 'punawale-real-estate-guide',
            title: 'Punawale Real Estate 2026 — Complete Buyer Guide',
            slug: '/web-stories/punawale-real-estate-guide-2026',
            description: 'Market rates, best projects, connectivity, investment ROI in Punawale',
            posterUrl: 'https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg',
            publishedAt: '2026-10-01T00:00:00Z',
            modifiedAt: '',
        },
        {
            id: 'pune-hinjewadi-it-park-connectivity',
            title: 'Hinjewadi IT Park Connectivity from Punawale — 10 Min Drive',
            slug: '/web-stories/punawale-hinjewadi-connectivity',
            description: 'Why Punawale is the #1 IT professional micro-market near Hinjewadi',
            posterUrl: 'https://cdn.supremeuniversal.com/media/SupremeVillagioDesktopBanner_5z4eED.jpeg',
            publishedAt: '2026-10-05T00:00:00Z',
            modifiedAt: '',
        },
        {
            id: 'supreme-rivana-amenities-tour',
            title: 'Supreme Rivana 40+ Amenities — Virtual Tour 2026',
            slug: '/web-stories/supreme-rivana-amenities-tour',
            description: 'Infinity pool, rooftop deck, gymnasium, clubhouse and more',
            posterUrl: 'https://cdn.supremeuniversal.com/media/designthatelevate_jSxOmi.jpg',
            publishedAt: '2026-10-08T00:00:00Z',
            modifiedAt: '',
        },
    ],
};

export async function runKvPriceSyncJob(env: Env): Promise<JobResult> {
    const startTime = Date.now();
    const log = new Logger(env, 'kv-price-sync');
    const now = new Date().toISOString();

    // ── Update timestamps ─────────────────────────────────────────────────
    PRICING_DATA.lastUpdated = now;
    WEB_STORIES_META.lastRefreshed = now;
    WEB_STORIES_META.stories.forEach(s => { s.modifiedAt = now; });

    const keysWritten: string[] = [];

    try {
        // 1. Write main pricing blob
        await kvSet(env.PRICE_STORE, 'rivana:pricing:v2', PRICING_DATA, 60 * 60 * 7); // 7h TTL
        keysWritten.push('rivana:pricing:v2');

        // 2. Write per-config pricing for quick edge lookup
        for (const config of PRICING_DATA.configurations) {
            const configKey = config.type.replace(' ', '').toLowerCase(); // '2bhk' | '3bhk'
            await kvSet(env.PRICE_STORE, `rivana:price:${configKey}`, {
                displayPrice:      config.displayPrice,
                allInclusivePrice: config.allInclusivePrice,
                startingPrice:     config.startingPrice,
                available:         config.available,
                remainingUnits:    config.remainingUnits,
                updatedAt:         now,
            }, 60 * 60 * 7);
            keysWritten.push(`rivana:price:${configKey}`);
        }

        // 3. Write project metadata (for edge schema injection)
        await kvSet(env.PRICE_STORE, 'rivana:meta:v2', {
            project:     PRICING_DATA.project,
            location:    PRICING_DATA.location,
            reraNumber:  PRICING_DATA.reraNumber,
            developer:   PRICING_DATA.developer,
            possession:  PRICING_DATA.possession,
            updatedAt:   now,
        }, 60 * 60 * 24); // 24h TTL
        keysWritten.push('rivana:meta:v2');

        // 4. Write amenities list
        await kvSet(env.PRICE_STORE, 'rivana:amenities', PRICING_DATA.amenities, 60 * 60 * 24 * 7);
        keysWritten.push('rivana:amenities');

        // 5. Write web stories metadata
        await kvSet(env.PRICE_STORE, 'rivana:web-stories:meta', WEB_STORIES_META, 60 * 60 * 24);
        keysWritten.push('rivana:web-stories:meta');

        // 6. Write last sync timestamp to CRON_STATE
        await kvSet(env.CRON_STATE, 'cron:price:last_sync', {
            syncedAt: now,
            keysWritten,
        }, 60 * 60 * 24);

        const summary = `Price sync complete — ${keysWritten.length} KV keys refreshed`;
        log.info(summary, { keysWritten });
        await log.flush();

        return {
            job: 'kv-price-sync',
            status: 'success',
            message: summary,
            data: { keysWritten, syncedAt: now },
            durationMs: Date.now() - startTime,
            timestamp: now,
        };
    } catch (e) {
        const err = e instanceof Error ? e.message : String(e);
        log.error('KV price sync failed', err);
        await log.sendWebhookAlert('KV Price Sync Failed', err, 'error');
        await log.flush();

        return {
            job: 'kv-price-sync',
            status: 'error',
            message: `KV sync failed: ${err}`,
            durationMs: Date.now() - startTime,
            timestamp: now,
        };
    }
}
