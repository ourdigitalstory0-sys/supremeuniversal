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
}

const SYSTEM_PROMPT = `You are a helpful real estate assistant for Supreme Rivana Punawale, a luxury riverside project by Supreme Universal in Pune, India.

Key facts you know:
- Project: Supreme Rivana by Supreme Universal
- Location: Tathawade Road, Punawale, Pune West (10-15 mins from Hinjewadi IT Park Phase 1)
- Land Parcel: 12.6 Acres along the banks of the Pawana River
- Configuration: 2 BHK starting from ₹94 Lakhs*, 3 BHK starting from ₹1.55 Crore*
- 2 BHK carpet area: ~785 sq.ft onwards (Luxury Waterfront Residences)
- 3 BHK carpet area: 1050 - 1150 sq.ft (Grand Riverside Suites)
- Amenities: 50+ curated lifestyle amenities, 60,000 sq.ft multi-level clubhouse (one of West Pune's largest), 700+ native trees with enhanced AQI, 31-storey towers with river views, private balconies with every home
- Developer: Supreme Universal (40+ years legacy, 70+ landmark projects delivered across Mumbai and Pune)
- RERA: Registered with MahaRERA under number PM1261012502656 (Supreme Rivana Phase I)
- Banks: Pre-approved by HDFC, SBI, ICICI, Axis Bank
- Sales office: Near Chhatrapati Shivaji Maharaj Chowk, Tathawade Road, Punawale
- Phone: +91-7744009295

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

    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
    };

    try {
        const body = await request.json() as { message: string; history?: Array<{ role: string; content: string }> };
        const { message, history = [] } = body;

        if (!message || message.trim().length === 0) {
            return new Response(JSON.stringify({ success: false, reply: 'Please send a message.' }), {
                status: 400,
                headers: corsHeaders
            });
        }

        // Build conversation messages
        const messages = [
            { role: 'system', content: SYSTEM_PROMPT },
            ...history.slice(-6), // keep last 3 exchanges
            { role: 'user', content: message }
        ];

        // Run Workers AI inference (Llama 3.1 8B Instruct)
        const aiResponse = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', { messages });

        const reply = (aiResponse as { response?: string }).response || 'I\'m here to help! Please call us at +91-7744009295 for detailed information.';

        return new Response(JSON.stringify({
            success: true,
            reply: reply.trim()
        }), { status: 200, headers: corsHeaders });

    } catch (err: unknown) {
        const errorMsg = err instanceof Error ? err.message : String(err);
        console.error('Workers AI error:', errorMsg);
        return new Response(JSON.stringify({
            success: false,
            reply: 'Supreme Rivana offers luxury 2 & 3 BHK residences in Punawale starting from ₹94 Lakhs*. For floor plans and exclusive offers, please call +91-7744009295 or enquire now!',
            debug: errorMsg
        }), { status: 200, headers: corsHeaders });
    }
}

export async function onRequestGet(): Promise<Response> {
    return new Response(JSON.stringify({ success: false, message: 'Method not allowed.' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' }
    });
}
