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
    lastUpdated: '2026-08-29',
    currency: 'INR',
    configurations: [
        {
            type: '2 BHK',
            label: '2 BHK Luxury Waterfront Residence',
            carpetArea: '785 sq.ft onwards',
            startingPrice: 9400000,
            displayPrice: '₹94 Lakhs*',
            availability: 'Available',
            highlights: ['Pawana River View', 'IGBC Certified', 'Private Balcony', 'Vastu Compliant']
        },
        {
            type: '3 BHK',
            label: '3 BHK Grand Riverside Suite',
            carpetArea: '1050 - 1150 sq.ft',
            startingPrice: 15500000,
            displayPrice: '₹1.55 Cr*',
            availability: 'Limited Units',
            highlights: ['Panoramic River Views', 'Private Balcony', '60,000 sq.ft Clubhouse', 'Premium Finishes']
        }
    ],
    note: '*Prices are indicative and subject to change. MahaRERA: PM1261012502656. Contact sales for detailed cost sheet.'
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
