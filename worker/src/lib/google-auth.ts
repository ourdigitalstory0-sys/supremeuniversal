/**
 * Google OAuth2 JWT Authentication for Cloudflare Workers
 *
 * Implements RS256 JWT signing entirely via the Web Crypto API.
 * No googleapis, no Node.js crypto — runs natively at Cloudflare edge.
 *
 * Scopes used:
 *  - Indexing API:  https://www.googleapis.com/auth/indexing
 *  - Search Console: https://www.googleapis.com/auth/webmasters.readonly
 */

// ── Base64url encode ───────────────────────────────────────────────────────
function b64url(input: ArrayBuffer | string): string {
    let base64: string;
    if (typeof input === 'string') {
        base64 = btoa(unescape(encodeURIComponent(input)));
    } else {
        const bytes = new Uint8Array(input);
        let binary = '';
        for (const b of bytes) binary += String.fromCharCode(b);
        base64 = btoa(binary);
    }
    return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

// ── Import PKCS#8 PEM private key as CryptoKey ────────────────────────────
async function importPrivateKey(pem: string): Promise<CryptoKey> {
    const pemBody = pem
        .replace(/-----BEGIN PRIVATE KEY-----/g, '')
        .replace(/-----END PRIVATE KEY-----/g, '')
        .replace(/\r?\n|\r/g, '');

    const binaryDer = Uint8Array.from(atob(pemBody), (c) => c.charCodeAt(0));

    return crypto.subtle.importKey(
        'pkcs8',
        binaryDer.buffer,
        { name: 'RSASSA-PKCS1-v1_5', hash: { name: 'SHA-256' } },
        false,
        ['sign']
    );
}

// ── Build and sign RS256 JWT ───────────────────────────────────────────────
async function buildJWT(clientEmail: string, privateKey: string, scope: string): Promise<string> {
    const now = Math.floor(Date.now() / 1000);
    const header = { alg: 'RS256', typ: 'JWT' };
    const payload = {
        iss: clientEmail,
        scope,
        aud: 'https://oauth2.googleapis.com/token',
        iat: now,
        exp: now + 3600,
    };

    const encodedHeader  = b64url(JSON.stringify(header));
    const encodedPayload = b64url(JSON.stringify(payload));
    const signingInput   = `${encodedHeader}.${encodedPayload}`;

    const key = await importPrivateKey(privateKey);
    const sig = await crypto.subtle.sign(
        'RSASSA-PKCS1-v1_5',
        key,
        new TextEncoder().encode(signingInput)
    );

    return `${signingInput}.${b64url(sig)}`;
}

// ── Token Cache (in-memory, valid for Worker lifetime) ────────────────────
const tokenCache = new Map<string, { token: string; expiresAt: number }>();

/**
 * Returns a valid Google OAuth2 access token for the given scope.
 * Reuses cached token if it hasn't expired yet (with 120s safety margin).
 */
export async function getGoogleAccessToken(
    clientEmail: string,
    privateKey: string,
    scope = 'https://www.googleapis.com/auth/indexing'
): Promise<string> {
    const cacheKey = `${clientEmail}::${scope}`;
    const cached = tokenCache.get(cacheKey);
    if (cached && cached.expiresAt > Date.now() + 120_000) {
        return cached.token;
    }

    const jwt = await buildJWT(clientEmail, privateKey, scope);

    const resp = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
            assertion: jwt,
        }),
    });

    if (!resp.ok) {
        const err = await resp.text();
        throw new Error(`Google OAuth2 token exchange failed [${resp.status}]: ${err}`);
    }

    const json = await resp.json() as { access_token: string; expires_in: number };
    const token = json.access_token;
    tokenCache.set(cacheKey, {
        token,
        expiresAt: Date.now() + (json.expires_in - 60) * 1000,
    });
    return token;
}
