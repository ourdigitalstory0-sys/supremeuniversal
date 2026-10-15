/**
 * Job: Web Stories Metadata Refresh
 * Schedule: 0 4 * * * (04:00 UTC / 09:30 IST daily)
 *
 * Updates the Web Stories metadata in PRICE_STORE KV so the edge
 * middleware can inject correct Schema.org structured data into every
 * Google Web Story. Also pings Google to notify story updates.
 *
 * Web Stories covered:
 *  1. Supreme Rivana Overview (hero story)
 *  2. Price & Cost Sheet 2026
 *  3. Punawale Real Estate Buyer Guide
 *  4. Hinjewadi IT Connectivity
 *  5. 40+ Amenities Virtual Tour
 */

import type { Env, JobResult } from '../env.ts';
import { kvSet } from '../lib/kv-state.ts';
import { Logger } from '../lib/logger.ts';

const DOMAIN = 'https://www.supreme-universal.in';

interface WebStory {
    id: string;
    title: string;
    slug: string;
    canonicalUrl: string;
    description: string;
    posterPortraitUrl: string;
    posterLandscapeUrl: string;
    publishedAt: string;
    modifiedAt: string;
    author: string;
    publisher: string;
    schema: Record<string, unknown>;
}

function buildStorySchema(story: Omit<WebStory, 'schema'>): Record<string, unknown> {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        '@id': story.canonicalUrl,
        'headline': story.title,
        'description': story.description,
        'url': story.canonicalUrl,
        'datePublished': story.publishedAt,
        'dateModified': story.modifiedAt,
        'author': {
            '@type': 'Organization',
            'name': story.author,
            'url': DOMAIN,
        },
        'publisher': {
            '@type': 'Organization',
            'name': story.publisher,
            'logo': {
                '@type': 'ImageObject',
                'url': `${DOMAIN}/assets/logo/supreme-universal-logo.png`,
                'width': 400,
                'height': 100,
            },
        },
        'image': {
            '@type': 'ImageObject',
            'url': story.posterPortraitUrl,
            'width': 640,
            'height': 853,
        },
        'mainEntity': {
            '@type': 'RealEstateListing',
            'name': 'Supreme Rivana Punawale',
            'description': 'Luxury 2 & 3 BHK waterfront apartments in Punawale by Supreme Universal',
            'offers': {
                '@type': 'Offer',
                'price': '9700000',
                'priceCurrency': 'INR',
                'availability': 'https://schema.org/InStock',
            },
            'geo': {
                '@type': 'GeoCoordinates',
                'latitude': '18.637934',
                'longitude': '73.743360',
            },
        },
    };
}

function buildStories(now: string): WebStory[] {
    const storyDefs = [
        {
            id:          'supreme-rivana-overview-2026',
            title:       'Supreme Rivana Punawale 2026 — Luxury Waterfront Living',
            slug:        '/web-stories/supreme-rivana-overview',
            description: 'Discover Supreme Rivana — 15-acre waterfront township in Punawale with 40+ resort amenities, 2 & 3 BHK from ₹97 Lakhs*. MahaRERA certified.',
            posterPortraitUrl:  'https://cdn.supremeuniversal.com/media/designthatelevate_jSxOmi.jpg',
            posterLandscapeUrl: 'https://cdn.supremeuniversal.com/media/Supreme-Rivana-Web-Banner_fzjUZ4.jpeg',
            publishedAt: '2026-09-01T00:00:00+05:30',
        },
        {
            id:          'supreme-rivana-price-2026',
            title:       'Supreme Rivana Price 2026 — 2 & 3 BHK from ₹97 Lakhs*',
            slug:        '/web-stories/supreme-rivana-price-2026',
            description: 'Official price sheet for Supreme Rivana Punawale: 2 BHK from ₹97L*, 3 BHK from ₹1.42 Cr*. All-inclusive cost breakdown & payment plans.',
            posterPortraitUrl:  'https://cdn.supremeuniversal.com/media/Supreme-Rivana-Web-Banner_fzjUZ4.jpeg',
            posterLandscapeUrl: 'https://cdn.supremeuniversal.com/media/Supreme-Rivana-Web-Banner_fzjUZ4.jpeg',
            publishedAt: '2026-09-15T00:00:00+05:30',
        },
        {
            id:          'punawale-real-estate-buyer-guide-2026',
            title:       'Punawale Real Estate 2026 — Complete Buyer Guide',
            slug:        '/web-stories/punawale-real-estate-guide-2026',
            description: 'Property rates, top projects, connectivity, and investment ROI in Punawale Pune 2026. Compare before you buy.',
            posterPortraitUrl:  'https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg',
            posterLandscapeUrl: 'https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg',
            publishedAt: '2026-10-01T00:00:00+05:30',
        },
        {
            id:          'punawale-hinjewadi-connectivity-2026',
            title:       'Punawale to Hinjewadi IT Park — 10 Min Drive 2026',
            slug:        '/web-stories/punawale-hinjewadi-connectivity',
            description: 'Why Punawale is the #1 micro-market for Hinjewadi IT professionals. Supreme Rivana: 10-min drive to Hinjewadi Phase 1.',
            posterPortraitUrl:  'https://cdn.supremeuniversal.com/media/SupremeVillagioDesktopBanner_5z4eED.jpeg',
            posterLandscapeUrl: 'https://cdn.supremeuniversal.com/media/SupremeVillagioDesktopBanner_5z4eED.jpeg',
            publishedAt: '2026-10-05T00:00:00+05:30',
        },
        {
            id:          'supreme-rivana-amenities-tour-2026',
            title:       'Supreme Rivana 40+ Amenities — Virtual Tour 2026',
            slug:        '/web-stories/supreme-rivana-amenities-tour',
            description: 'Infinity pool, rooftop deck, gymnasium, clubhouse, co-working space — 40+ world-class amenities at Supreme Rivana Punawale.',
            posterPortraitUrl:  'https://cdn.supremeuniversal.com/media/designthatelevate_jSxOmi.jpg',
            posterLandscapeUrl: 'https://cdn.supremeuniversal.com/media/Supreme-Rivana-Web-Banner_fzjUZ4.jpeg',
            publishedAt: '2026-10-08T00:00:00+05:30',
        },
    ];

    return storyDefs.map(def => {
        const base: Omit<WebStory, 'schema'> = {
            ...def,
            canonicalUrl: `${DOMAIN}${def.slug}`,
            modifiedAt:   now,
            author:       'Supreme Universal',
            publisher:    'Supreme Universal',
        };
        return { ...base, schema: buildStorySchema(base) };
    });
}

/** Ping Google Indexing API for a web story URL */
async function pingStory(canonicalUrl: string, accessToken?: string): Promise<void> {
    if (!accessToken) return;
    try {
        await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: canonicalUrl, type: 'URL_UPDATED' }),
        });
    } catch { /* non-critical */ }
}

export async function runWebStoriesRefreshJob(env: Env): Promise<JobResult> {
    const startTime = Date.now();
    const log = new Logger(env, 'web-stories-refresh');
    const now = new Date().toISOString();

    const stories = buildStories(now);
    const keysWritten: string[] = [];

    try {
        // 1. Write full stories catalog
        await kvSet(env.PRICE_STORE, 'rivana:web-stories:catalog', {
            refreshedAt: now,
            count: stories.length,
            stories: stories.map(s => ({
                id:                s.id,
                title:             s.title,
                slug:              s.slug,
                canonicalUrl:      s.canonicalUrl,
                description:       s.description,
                posterPortraitUrl: s.posterPortraitUrl,
                publishedAt:       s.publishedAt,
                modifiedAt:        s.modifiedAt,
            })),
        }, 60 * 60 * 25); // 25h TTL
        keysWritten.push('rivana:web-stories:catalog');

        // 2. Write per-story schema blobs for edge injection
        for (const story of stories) {
            await kvSet(env.PRICE_STORE, `rivana:web-story:schema:${story.id}`, story.schema, 60 * 60 * 25);
            keysWritten.push(`rivana:web-story:schema:${story.id}`);
        }

        // 3. Write stories sitemap data
        const storySitemapEntries = stories.map(s => ({
            loc:        s.canonicalUrl,
            lastmod:    now.split('T')[0],
            changefreq: 'weekly',
            priority:   '0.9',
            image: {
                loc:   s.posterPortraitUrl,
                title: s.title,
            },
        }));
        await kvSet(env.PRICE_STORE, 'rivana:web-stories:sitemap', storySitemapEntries, 60 * 60 * 25);
        keysWritten.push('rivana:web-stories:sitemap');

        // 4. Write last refresh timestamp
        await kvSet(env.CRON_STATE, 'cron:stories:last_refresh', {
            refreshedAt: now,
            storyCount: stories.length,
            keysWritten,
        }, 60 * 60 * 48);

        const summary = `Web stories refreshed — ${stories.length} stories, ${keysWritten.length} KV keys`;
        log.info(summary);
        await log.flush();

        return {
            job: 'web-stories-refresh',
            status: 'success',
            message: summary,
            data: { storyCount: stories.length, keysWritten },
            durationMs: Date.now() - startTime,
            timestamp: now,
        };
    } catch (e) {
        const err = e instanceof Error ? e.message : String(e);
        log.error('Web stories refresh failed', err);
        await log.sendWebhookAlert('Web Stories Refresh Failed', err, 'error');
        await log.flush();

        return {
            job: 'web-stories-refresh',
            status: 'error',
            message: `Failed: ${err}`,
            durationMs: Date.now() - startTime,
            timestamp: now,
        };
    }
}
