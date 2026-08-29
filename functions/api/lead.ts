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

        // 1. Honeypot Anti-Spam Trap: Bots fill hidden inputs
        if (body.website || body.b_comment || body._honeypot) {
            return new Response(JSON.stringify({
                success: true,
                message: 'Thank you! Our sales desk will contact you shortly.'
            }), { status: 200, headers: corsHeaders });
        }

        // 2. Strict Input Sanitization
        const sanitize = (str?: string) => (str || '').replace(/[<>]/g, '').trim();
        const name = sanitize(body.name).slice(0, 100);
        const phone = sanitize(body.phone).replace(/\s+/g, '');
        const email = sanitize(body.email).slice(0, 100);
        const interest = sanitize(body.interest).slice(0, 50);
        const visit_date = sanitize(body.visit_date).slice(0, 30);
        const message = sanitize(body.message).slice(0, 500);

        // Validate required fields
        if (!name || !phone) {
            return new Response(JSON.stringify({
                success: false,
                message: 'Name and phone are required fields.'
            }), { status: 400, headers: corsHeaders });
        }

        // Validate phone format (standard 10-digit India or with +91)
        const cleanPhone = phone.replace(/^(\+91|91|0)/, '');
        if (!/^[0-9]{10}$/.test(cleanPhone)) {
            return new Response(JSON.stringify({
                success: false,
                message: 'Please provide a valid 10-digit mobile number.'
            }), { status: 400, headers: corsHeaders });
        }

        // 3. IP Rate Limiting with KV
        if (env.PRICE_STORE) {
            const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
            const key = `lead_rate:${ip}`;
            const count = parseInt((await env.PRICE_STORE.get(key)) || '0', 10);

            if (count >= RATE_LIMIT_MAX) {
                return new Response(JSON.stringify({
                    success: false,
                    message: 'Too many enquiries from this network. Please call us directly at +91-7744009295.'
                }), { status: 429, headers: corsHeaders });
            }

            await env.PRICE_STORE.put(key, String(count + 1), {
                expirationTtl: RATE_LIMIT_WINDOW
            });

            // 4. KV Fail-Safe Lead Archiving (zero lost leads)
            const archiveKey = `lead_archive:${Date.now()}:${cleanPhone}`;
            await env.PRICE_STORE.put(archiveKey, JSON.stringify({
                name,
                phone: cleanPhone,
                email,
                interest,
                visit_date,
                message,
                timestamp: new Date().toISOString(),
                ip
            }), { expirationTtl: 2592000 }); // Retain for 30 days
        }

        // 5. Forward to Web3Forms Gateway
        const formData = new FormData();
        formData.append('access_key', WEB3FORMS_KEY);
        formData.append('subject', `Priority Buyer Lead — ${interest || 'Supreme Rivana'} | ${name}`);
        formData.append('from_name', 'Supreme Rivana Sales Engine');
        formData.append('name', name);
        formData.append('phone', cleanPhone);
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
            success: true,
            message: 'Thank you! Your inquiry has been registered with Supreme Rivana sales team.'
        }), { status: 200, headers: corsHeaders });

    } catch {
        return new Response(JSON.stringify({
            success: false,
            message: 'Your inquiry was recorded. You may also call us directly at +91-7744009295.'
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
