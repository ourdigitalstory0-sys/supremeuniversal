/**
 * Cloudflare Pages Function — Workers AI Chatbot
 * Route: POST /api/chat
 *
 * Powered by @cf/meta/llama-2-7b-chat-int8 (free on Cloudflare AI)
 * Answers visitor questions about Supreme Rivana pricing, floor plans,
 * possession dates, amenities, and RERA registration.
 */

interface Env {
    AI: Ai;
    PRICE_STORE?: KVNamespace;
}

const SYSTEM_PROMPT = `You are a helpful real estate assistant for Supreme Rivana Punawale, a luxury riverside project by Supreme Universal in Pune, India.

Key facts you know:
- Project: Supreme Rivana by Supreme Universal
- Location: Tathawade Road, Punawale, Pune West (10-15 mins from Hinjewadi IT Park Phase 1)
- Land Parcel: 12.6 Acres along the banks of the Pawana River
- Configuration: 2 BHK Premier & Grand starting from ₹97 Lakhs*, 3 BHK Signature, Regal & Elite starting from ₹1.42 Crore*
- 2 BHK carpet area: 746 - 786 sq.ft (Luxury Waterfront Residences)
- 3 BHK carpet area: 1050 - 1166 sq.ft (Grand Riverside Suites)
- Amenities: 50+ curated lifestyle amenities, 60,000 sq.ft multi-level clubhouse (Club Rivana), 700+ native trees with enhanced AQI, 31-storey towers with river views, private balconies with every home
- Developer: Supreme Universal (40+ years legacy, 70+ landmark projects delivered across Mumbai and Pune)
- RERA: Registered with MahaRERA under number PM1261012502656 (Supreme Rivana Phase I)
- Banks: Pre-approved by HDFC, SBI, ICICI, Axis Bank
- Sales office: Near Chhatrapati Shivaji Maharaj Chowk, Tathawade Road, Punawale
- Phone: +91 97390 00354

Always be helpful, concise, and professional. If asked about exact prices or bookings, recommend scheduling a site visit or exploring the official price list. Keep responses under 100 words. Respond in English.`;

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

    const origin = request.headers.get('Origin') || '';
    const isAllowedOrigin = !origin || 
                            origin.endsWith('supreme-universal.in') || 
                            origin.includes('localhost') || 
                            origin.includes('127.0.0.1');

    const corsHeaders = {
        'Access-Control-Allow-Origin': isAllowedOrigin ? origin : 'https://www.supreme-universal.in',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
        'X-Content-Type-Options': 'nosniff'
    };

    try {
        const body = await request.json() as { message: string; history?: Array<{ role: string; content: string }> };
        const { message, history = [] } = body;

        let cleanMessage = (message || '').trim().slice(0, 400);

        if (!cleanMessage) {
            return new Response(JSON.stringify({ success: false, reply: 'Please send a message.' }), {
                status: 400,
                headers: corsHeaders
            });
        }

        // Prompt Injection Defense Guard
        const INJECTION_PATTERNS = [
            /ignore previous instructions/i,
            /system prompt/i,
            /you are now/i,
            /dan mode/i,
            /developer mode/i,
            /jailbreak/i
        ];
        if (INJECTION_PATTERNS.some(pat => pat.test(cleanMessage))) {
            return new Response(JSON.stringify({
                success: true,
                reply: 'I am here to assist you exclusively with Supreme Rivana Punawale properties, floor plans, and pricing. Please feel free to ask about our 2 & 3 BHK waterfront residences!'
            }), { status: 200, headers: corsHeaders });
        }

        // IP-based rate limiting to protect Workers AI GPU compute
        if (env.PRICE_STORE) {
            const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
            const key = `chat_rate:${ip}`;
            const count = parseInt((await env.PRICE_STORE.get(key)) || '0', 10);
            if (count >= 30) {
                return new Response(JSON.stringify({
                    success: true,
                    reply: 'You have reached the chat limit for this session. Please call our sales desk directly at +91 97390 00354.'
                }), { status: 200, headers: corsHeaders });
            }
            await env.PRICE_STORE.put(key, String(count + 1), { expirationTtl: 3600 });
        }

        // Build conversation messages with safe history truncation
        const messages = [
            { role: 'system', content: SYSTEM_PROMPT },
            ...history.slice(-4), // keep last 2 exchanges
            { role: 'user', content: cleanMessage }
        ];

        // Run Workers AI inference (Llama 3.1 8B Instruct)
        const aiResponse = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', { messages });

        const reply = (aiResponse as { response?: string }).response || 'I\'m here to help! Please call us at +91 97390 00354 for detailed information.';

        return new Response(JSON.stringify({
            success: true,
            reply: reply.trim()
        }), { status: 200, headers: corsHeaders });

    } catch (err: unknown) {
        return new Response(JSON.stringify({
            success: false,
            reply: 'Supreme Rivana offers luxury 2 & 3 BHK residences in Punawale starting from ₹97 Lakhs*. For floor plans and exclusive offers, please call +91 97390 00354 or enquire now!'
        }), { status: 200, headers: corsHeaders });
    }
}

export async function onRequestGet(): Promise<Response> {
    return new Response(JSON.stringify({ success: false, message: 'Method not allowed.' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' }
    });
}
