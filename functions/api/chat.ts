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

const SYSTEM_PROMPT = `You are a helpful real estate assistant for Supreme Rivana Punawale, a luxury apartment project by Supreme Universal in Pune, India.

Key facts you know:
- Project: Supreme Rivana by Supreme Universal
- Location: Punawale, Pune West (near Hinjewadi IT Park, Wakad)
- Configuration: 2 BHK starting from ₹75 Lakhs*, 3 BHK starting from ₹1.10 Crore*
- 2 BHK carpet area: 785 sq.ft onwards
- 3 BHK carpet area: 1045 sq.ft onwards (Sky Residences)
- Amenities: 40+ amenities, 31-storey towers, infinity pool, 31st floor Skywalk, IGBC certified green building
- Possession: Expected 2027-2028
- Sales office: Near Lotus Business School, Punawale
- Phone: +91-7744009295
- RERA: MahaRERA registered project

Always be helpful, concise, and professional. If asked about exact prices or bookings, recommend scheduling a site visit or calling the sales office. Keep responses under 100 words. Respond in English.`;

export async function onRequestPost(context: {
    request: Request;
    env: Env;
}): Promise<Response> {
    const { request, env } = context;

    const corsHeaders = {
        'Access-Control-Allow-Origin': 'https://supreme-universal.in',
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

        // Run Workers AI inference
        const aiResponse = await env.AI.run('@cf/meta/llama-2-7b-chat-int8', { messages });

        const reply = (aiResponse as { response: string }).response || 'I\'m here to help! Please call us at +91-7744009295 for detailed information.';

        return new Response(JSON.stringify({
            success: true,
            reply: reply.trim()
        }), { status: 200, headers: corsHeaders });

    } catch {
        return new Response(JSON.stringify({
            success: false,
            reply: 'I\'m having trouble connecting right now. Please call us at +91-7744009295 or fill the enquiry form!'
        }), { status: 500, headers: corsHeaders });
    }
}

export async function onRequestGet(): Promise<Response> {
    return new Response(JSON.stringify({ success: false, message: 'Method not allowed.' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' }
    });
}
