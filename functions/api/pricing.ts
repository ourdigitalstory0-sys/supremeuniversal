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
    lastUpdated: '2026-10-01',
    currency: 'INR',
    configurations: [
        {
            type: '2 BHK',
            label: '2 BHK Premier & Grand Luxury Residence',
            carpetArea: '746 - 786 sq.ft',
            startingPrice: 9700000,
            displayPrice: '₹97 Lakhs*',
            availability: 'Available',
            highlights: ['Pawana River View', 'Club Rivana Access', 'Private Balcony', 'Vastu Compliant']
        },
        {
            type: '3 BHK',
            label: '3 BHK Signature, Regal & Elite Grand Suite',
            carpetArea: '1050 - 1166 sq.ft',
            startingPrice: 14200000,
            displayPrice: '₹1.42 Cr*',
            availability: 'Limited Units',
            highlights: ['Panoramic River Views', '60,000 sq.ft Clubhouse', 'Private Sun Deck', 'Premium Finishes']
        }
    ],
    note: '*Government taxes, registration & stamp duty extra. Base starting price. MahaRERA: PM1261012502656. Contact sales desk at +91 97390 00354 for verified cost sheet.'
};

export async function onRequestGet(context: {
    request: Request;
    env: Env;
}): Promise<Response> {
    const { request, env } = context;

    const origin = request.headers.get('Origin') || '';
    const isAllowedOrigin = !origin || 
                            origin.endsWith('supreme-universal.in') || 
                            origin.includes('localhost') || 
                            origin.includes('127.0.0.1');

    const corsHeaders = {
        'Access-Control-Allow-Origin': isAllowedOrigin ? origin : 'https://www.supreme-universal.in',
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300', // 5 min CDN cache
        'X-Content-Type-Options': 'nosniff'
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
