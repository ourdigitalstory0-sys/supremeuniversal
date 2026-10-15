/**
 * Job: Weekly Lead Digest
 * Schedule: 0 3 * * 1 (Monday 03:00 UTC / 08:30 IST)
 *
 * Aggregates all leads captured in PRICE_STORE KV since the last digest,
 * sends a rich HTML email digest via SendGrid, and resets the cursor.
 *
 * Lead data is written by functions/api/lead.ts when visitors submit forms.
 */

import type { Env, JobResult } from '../env.ts';
import { kvGet, getLeadDigestState, saveLeadDigestState } from '../lib/kv-state.ts';
import { Logger } from '../lib/logger.ts';

interface LeadRecord {
    name: string;
    phone: string;
    email?: string;
    config?: string;    // '2bhk' | '3bhk'
    source?: string;    // page where lead was captured
    createdAt: string;
    ip?: string;
}

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send';

/** Fetch all leads from PRICE_STORE KV — format: leads:{ISO_DATE}:{uuid} */
async function fetchLeadsSince(env: Env, since: string): Promise<LeadRecord[]> {
    const leads: LeadRecord[] = [];
    try {
        // List all KV keys with prefix 'leads:'
        const listed = await env.PRICE_STORE.list({ prefix: 'leads:', limit: 1000 });
        const sinceDate = new Date(since).getTime();

        for (const key of listed.keys) {
            // Key format: leads:YYYY-MM-DDTHH:mm:ssZ:uuid
            const keyDate = new Date(key.name.split(':').slice(1, -1).join(':')).getTime();
            if (keyDate > sinceDate) {
                const raw = await env.PRICE_STORE.get(key.name, 'text');
                if (raw) {
                    try {
                        leads.push(JSON.parse(raw) as LeadRecord);
                    } catch { /* skip malformed */ }
                }
            }
        }
    } catch (e) {
        console.warn('[lead-digest] KV list error:', e);
    }
    return leads;
}

/** Build rich HTML email body */
function buildEmailHTML(leads: LeadRecord[], from: string, to: string, env: Env): string {
    const config2bhk = leads.filter(l => l.config === '2bhk').length;
    const config3bhk = leads.filter(l => l.config === '3bhk').length;
    const sources    = leads.reduce<Record<string, number>>((acc, l) => {
        const src = l.source ?? 'unknown';
        acc[src] = (acc[src] ?? 0) + 1;
        return acc;
    }, {});

    const leadRows = leads
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 100) // max 100 rows in email
        .map(l => `
            <tr>
                <td style="padding:8px;border-bottom:1px solid #f0f0f0">${l.name}</td>
                <td style="padding:8px;border-bottom:1px solid #f0f0f0">${l.phone}</td>
                <td style="padding:8px;border-bottom:1px solid #f0f0f0">${l.email ?? '—'}</td>
                <td style="padding:8px;border-bottom:1px solid #f0f0f0">${(l.config ?? '—').toUpperCase()}</td>
                <td style="padding:8px;border-bottom:1px solid #f0f0f0">${l.source ?? '—'}</td>
                <td style="padding:8px;border-bottom:1px solid #f0f0f0;color:#888;font-size:12px">${new Date(l.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</td>
            </tr>
        `).join('');

    const sourceRows = Object.entries(sources)
        .sort(([, a], [, b]) => b - a)
        .map(([src, count]) => `<tr><td style="padding:6px 8px">${src}</td><td style="padding:6px 8px;font-weight:bold">${count}</td></tr>`)
        .join('');

    return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Supreme Rivana — Weekly Lead Digest</title></head>
<body style="font-family:Arial,sans-serif;background:#f9f9f9;margin:0;padding:0">
  <div style="max-width:900px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08)">
    <!-- Header -->
    <div style="background:linear-gradient(135deg,#1a1a2e 0%,#16213e 100%);padding:32px;text-align:center">
      <h1 style="color:#d4af37;margin:0;font-size:28px">Supreme Rivana</h1>
      <p style="color:#a0a0b0;margin:8px 0 0">Weekly Lead Intelligence Report — ${new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
    </div>

    <!-- KPI Strip -->
    <div style="display:flex;background:#f8f8ff;border-bottom:1px solid #eee">
      <div style="flex:1;padding:24px;text-align:center;border-right:1px solid #eee">
        <div style="font-size:42px;font-weight:bold;color:#1a1a2e">${leads.length}</div>
        <div style="color:#888;font-size:14px;margin-top:4px">Total New Leads</div>
      </div>
      <div style="flex:1;padding:24px;text-align:center;border-right:1px solid #eee">
        <div style="font-size:42px;font-weight:bold;color:#2563eb">${config2bhk}</div>
        <div style="color:#888;font-size:14px;margin-top:4px">2 BHK Enquiries</div>
      </div>
      <div style="flex:1;padding:24px;text-align:center">
        <div style="font-size:42px;font-weight:bold;color:#d4af37">${config3bhk}</div>
        <div style="color:#888;font-size:14px;margin-top:4px">3 BHK Enquiries</div>
      </div>
    </div>

    <div style="padding:32px">
      <!-- Source breakdown -->
      <h2 style="color:#1a1a2e;font-size:18px;margin:0 0 16px">Lead Sources</h2>
      <table style="width:100%;border-collapse:collapse;margin-bottom:32px">
        <tr style="background:#f4f4f8">
          <th style="padding:8px;text-align:left;font-size:13px">Source Page</th>
          <th style="padding:8px;text-align:left;font-size:13px">Leads</th>
        </tr>
        ${sourceRows || '<tr><td colspan="2" style="padding:12px;color:#999">No leads this week</td></tr>'}
      </table>

      <!-- Lead table -->
      <h2 style="color:#1a1a2e;font-size:18px;margin:0 0 16px">Lead Details (Latest 100)</h2>
      <table style="width:100%;border-collapse:collapse;font-size:13px">
        <tr style="background:#f4f4f8">
          <th style="padding:8px;text-align:left">Name</th>
          <th style="padding:8px;text-align:left">Phone</th>
          <th style="padding:8px;text-align:left">Email</th>
          <th style="padding:8px;text-align:left">Config</th>
          <th style="padding:8px;text-align:left">Source</th>
          <th style="padding:8px;text-align:left">Time (IST)</th>
        </tr>
        ${leadRows || '<tr><td colspan="6" style="padding:16px;text-align:center;color:#999">No new leads since last digest</td></tr>'}
      </table>
    </div>

    <!-- Footer -->
    <div style="background:#f4f4f8;padding:20px;text-align:center;font-size:12px;color:#999">
      Sent automatically by Supreme Universal Cron Worker v2.0 · ${new Date().toISOString()}<br>
      MahaRERA: ${env.RERA_NUMBER}
    </div>
  </div>
</body>
</html>`;
}

export async function runLeadDigestJob(env: Env): Promise<JobResult> {
    const startTime = Date.now();
    const log = new Logger(env, 'lead-digest');
    const now = new Date().toISOString();

    if (!env.EMAIL_API_KEY) {
        log.warn('EMAIL_API_KEY secret not set — skipping lead digest email send');
        await log.flush();
        return {
            job: 'lead-digest',
            status: 'skipped',
            message: 'EMAIL_API_KEY not configured',
            durationMs: Date.now() - startTime,
            timestamp: now,
        };
    }

    // ── Determine since date ──────────────────────────────────────────────
    const digestState = await getLeadDigestState(env);
    const since = digestState?.lastDigestSentAt ?? new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
    log.info(`Fetching leads since ${since}`);

    // ── Fetch leads ───────────────────────────────────────────────────────
    const leads = await fetchLeadsSince(env, since);
    log.info(`Found ${leads.length} new leads`);

    // ── Build & send email ────────────────────────────────────────────────
    const html = buildEmailHTML(leads, since, now, env);
    const subject = `Supreme Rivana — ${leads.length} New Lead${leads.length !== 1 ? 's' : ''} (Week ending ${new Date().toLocaleDateString('en-IN')})`;

    const emailPayload = {
        personalizations: [{
            to: [{ email: env.ALERT_EMAIL_TO, name: 'Supreme Universal Sales Team' }],
        }],
        from: { email: 'cron@supreme-universal.in', name: 'Supreme Universal Automation' },
        subject,
        content: [{ type: 'text/html', value: html }],
        tracking_settings: { click_tracking: { enable: false } },
    };

    const sendResp = await fetch(SENDGRID_API, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${env.EMAIL_API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailPayload),
    });

    const emailOk = sendResp.status === 202;
    log.info(`SendGrid response: ${sendResp.status} — ${emailOk ? '✅ Email sent' : '❌ Email failed'}`);

    // ── Update state ──────────────────────────────────────────────────────
    await saveLeadDigestState(env, {
        lastDigestSentAt: now,
        totalLeadsSent: (digestState?.totalLeadsSent ?? 0) + leads.length,
        lastLeadCount: leads.length,
    });

    if (!emailOk) {
        const body = await sendResp.text();
        log.error('SendGrid error', body);
        await log.sendWebhookAlert('Lead Digest Email Failed', `SendGrid [${sendResp.status}]: ${body}`, 'error');
    } else {
        await log.sendWebhookAlert(
            '📬 Weekly Lead Digest Sent',
            `**${leads.length} leads** delivered to ${env.ALERT_EMAIL_TO}\n2BHK: ${leads.filter(l=>l.config==='2bhk').length} | 3BHK: ${leads.filter(l=>l.config==='3bhk').length}`,
            'info'
        );
    }

    await log.flush();

    const summary = `Lead digest: ${leads.length} leads → email ${emailOk ? 'sent' : 'FAILED'} [${sendResp.status}]`;
    return {
        job: 'lead-digest',
        status: emailOk ? 'success' : 'error',
        message: summary,
        data: { leadCount: leads.length, emailStatus: sendResp.status },
        durationMs: Date.now() - startTime,
        timestamp: now,
    };
}
