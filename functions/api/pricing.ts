/**
 * Cloudflare Pages Function — Dynamic Pricing via KV Store
 * Route: GET /api/pricing
 *
 * Reads live pricing from Cloudflare KV without requiring a code rebuild.
 * To update prices: set key "pricing" in PRICE_STORE KV namespace with JSON value.
 *
 * Default fallback pricing is embedded below.
 */

interface Env {
    PRICE_STORE: KVNamespace;
}

const DEFAULT_PRICING = {
    lastUpdated: '2026-08-26',
    currency: 'INR',
    configurations: [
        {
            type: '2 BHK',
            label: '2 BHK Luxury Apartment',
            carpetArea: '785 sq.ft onwards',
            startingPrice: 7500000,
            displayPrice: '₹75 Lakhs*',
            availability: 'Available',
            highlights: ['River View', 'IGBC Certified', 'Vastu Compliant']
        },
        {
            type: '3 BHK',
            label: '3 BHK Sky Residence',
            carpetArea: '1045 sq.ft onwards',
            startingPrice: 11000000,
            displayPrice: '₹1.10 Cr*',
            availability: 'Limited Units',
            highlights: ['Panoramic Views', 'Private Deck', 'Premium Finishes']
        }
    ],
    note: '*Prices are indicative and subject to change. Contact sales for current pricing.'
};

export async function onRequestGet(context: {
    request: Request;
    env: Env;
}): Promise<Response> {
    const { env } = context;

    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300', // 5 min CDN cache
    };

    try {
        // Try reading live pricing from KV store
        let pricing = DEFAULT_PRICING;

        if (env.PRICE_STORE) {
            const kvValue = await env.PRICE_STORE.get('pricing');
            if (kvValue) {
                pricing = JSON.parse(kvValue);
            }
        }

        return new Response(JSON.stringify({ success: true, data: pricing }), {
            status: 200,
            headers: corsHeaders
        });

    } catch {
        return new Response(JSON.stringify({ success: true, data: DEFAULT_PRICING }), {
            status: 200,
            headers: corsHeaders
        });
    }
}

// Admin endpoint to update pricing (POST with secret header)
export async function onRequestPost(context: {
    request: Request;
    env: Env;
}): Promise<Response> {
    const { request, env } = context;

    const adminSecret = request.headers.get('X-Admin-Secret');
    if (adminSecret !== 'supremerivana2026admin') {
        return new Response(JSON.stringify({ success: false, message: 'Unauthorized.' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const newPricing = await request.json();
    await env.PRICE_STORE.put('pricing', JSON.stringify(newPricing));

    return new Response(JSON.stringify({ success: true, message: 'Pricing updated successfully.' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}
