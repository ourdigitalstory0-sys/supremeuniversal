/**
 * Cloudflare Pages Function — R2 Edge Media Asset CDN Proxy
 * Route: GET /api/media/*
 * 
 * Delivers zero-egress media assets (high-res images, floor plan blueprints,
 * video walkthroughs) directly from Cloudflare R2 object storage.
 */

interface Env {
    MEDIA_BUCKET?: R2Bucket;
}

export async function onRequestOptions(): Promise<Response> {
    return new Response(null, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
            'Access-Control-Allow-Headers': 'Range, If-None-Match',
        }
    });
}

export async function onRequestGet(context: {
    request: Request;
    env: Env;
    params: { path?: string[] };
}): Promise<Response> {
    const { request, env, params } = context;

    const pathArray = params.path || [];
    const key = pathArray.join('/');

    if (!key) {
        return new Response('Asset key required.', { status: 400 });
    }

    if (!env.MEDIA_BUCKET) {
        return new Response(JSON.stringify({
            error: 'R2 MEDIA_BUCKET binding not configured.',
            hint: 'Enable R2 in Cloudflare Dashboard and bind MEDIA_BUCKET in wrangler.toml'
        }), {
            status: 503,
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
    }

    try {
        const rangeHeader = request.headers.get('range');
        let object: R2Object | R2ObjectBody | null;

        if (rangeHeader) {
            // Handle HTTP 206 Partial Content for video streaming
            object = await env.MEDIA_BUCKET.get(key, {
                range: request.headers,
                onlyIf: request.headers
            });
        } else {
            object = await env.MEDIA_BUCKET.get(key, {
                onlyIf: request.headers
            });
        }

        if (!object) {
            return new Response('Asset not found in R2 bucket.', { status: 404 });
        }

        // Conditional GET check (HTTP 304)
        if (!('body' in object)) {
            return new Response(null, {
                status: 304,
                headers: {
                    etag: object.httpEtag,
                    'Access-Control-Allow-Origin': '*'
                }
            });
        }

        const headers = new Headers();
        object.writeHttpMetadata(headers);
        headers.set('etag', object.httpEtag);
        headers.set('Access-Control-Allow-Origin', '*');
        headers.set('Cache-Control', 'public, max-age=31536000, immutable');
        headers.set('X-Storage-Tier', 'Cloudflare-R2-Zero-Egress');

        const status = rangeHeader ? 206 : 200;

        return new Response(object.body, {
            headers,
            status
        });

    } catch (err: any) {
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
    }
}
