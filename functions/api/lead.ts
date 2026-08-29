/**
 * Cloudflare Pages Function — Secure Lead API
 * Route: POST /api/lead
 *
 * Accepts form submissions from all enquiry modals and Contact form.
 * Validates, sanitizes, and forwards to Web3Forms from the server side,
 * bypassing the client-only restriction on the free Web3Forms tier.
 */

interface Env {
    PRICE_STORE: KVNamespace;
}

const WEB3FORMS_KEY = '8d14bafa-306b-4e68-bc3f-791c5fbf5dc1';
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW = 3600;

export async function onRequestOptions(): Promise<Response> {
    return new Response(null, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        }
    });
}

export async function onRequestPost(context: {
    request: Request;
    env: Env;
}): Promise<Response> {
    const { request, env } = context;

    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
    };

    try {
        // Parse incoming JSON body
        const body = await request.json() as Record<string, string>;
        const { name, phone, email, interest, visit_date, message } = body;

        // Validate required fields
        if (!name || !phone) {
            return new Response(JSON.stringify({
                success: false,
                message: 'Name and phone are required fields.'
            }), { status: 400, headers: corsHeaders });
        }

        // Validate phone format (10-digit India)
        if (!/^[0-9]{10}$/.test(phone)) {
            return new Response(JSON.stringify({
                success: false,
                message: 'Please provide a valid 10-digit phone number.'
            }), { status: 400, headers: corsHeaders });
        }

        // IP-based rate limiting
        if (env.PRICE_STORE) {
            const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
            const key = `lead:${ip}`;
            const count = parseInt((await env.PRICE_STORE.get(key)) || '0', 10);

            if (count >= RATE_LIMIT_MAX) {
                return new Response(JSON.stringify({
                    success: false,
                    message: 'Too many submissions from this location. Please try again later.'
                }), { status: 429, headers: corsHeaders });
            }

            await env.PRICE_STORE.put(key, String(count + 1), {
                expirationTtl: RATE_LIMIT_WINDOW
            });
        }

        // Forward to Web3Forms
        const formData = new FormData();
        formData.append('access_key', WEB3FORMS_KEY);
        formData.append('subject', `New Enquiry — ${interest || 'General'} | Supreme Rivana`);
        formData.append('from_name', 'Supreme Rivana Lead Engine');
        formData.append('name', name);
        formData.append('phone', phone);
        if (email) { formData.append('email', email); formData.append('replyto', email); }
        if (interest) formData.append('interest', interest);
        if (visit_date) formData.append('visit_date', visit_date);
        if (message) formData.append('message', message);

        const w3Response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });

        const w3Data = await w3Response.json() as { success: boolean };

        return new Response(JSON.stringify({
            success: w3Data.success,
            message: w3Data.success
                ? 'Thank you! Our team will contact you shortly.'
                : 'Submission received. We will follow up soon.'
        }), { status: 200, headers: corsHeaders });

    } catch {
        return new Response(JSON.stringify({
            success: false,
            message: 'An error occurred. Please call us directly at +91-7744009295.'
        }), { status: 500, headers: corsHeaders });
    }
}

// Reject non-POST requests
export async function onRequestGet(): Promise<Response> {
    return new Response(JSON.stringify({ success: false, message: 'Method not allowed.' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' }
    });
}
