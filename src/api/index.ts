import { Hono } from 'hono';
import { cors } from "hono/cors";

const app = new Hono().basePath('api');

app.use(cors({ origin: "*" }));

app.get('/ping', (c) => c.json({ message: `Pong! ${Date.now()}` }));

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderLeadEmail(body: Record<string, unknown>) {
  const type = escapeHtml(body.type ?? "website");
  const rows = [
    ["Inquiry Type", type],
    ["Name", escapeHtml(body.fullName)],
    ["Company", escapeHtml(body.company)],
    ["Email", escapeHtml(body.email)],
    ["Phone", escapeHtml(body.phone)],
    ["Equipment Type", escapeHtml(body.craneType ?? body.equipmentInterest)],
    ["Preferred Contact / Timing", escapeHtml(body.preferredTimeframe ?? body.budgetRange)],
    ["Message", escapeHtml(body.message)],
  ]
    .filter(([, value]) => value)
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #dbe3ef;font-weight:700;background:#f8fafc;">${label}</td><td style="padding:8px 12px;border:1px solid #dbe3ef;">${value}</td></tr>`,
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;color:#0f1725;">
      <h2 style="margin:0 0 16px;">New ${type} inquiry</h2>
      <table style="border-collapse:collapse;width:100%;max-width:720px;">
        ${rows}
      </table>
    </div>
  `;
}

function getLeadSubject(type: unknown) {
  if (type === "buyer") {
    return "CranesAuctions - New buyer enquiry";
  }

  if (type === "seller") {
    return "CranesAuctions - New seller enquiry";
  }

  return "CranesAuctions - New enquiry";
}

app.post('/leads', async (c) => {
  try {
    const body = await c.req.json();
    const senderEmail = c.env.BREVO_SENDER_EMAIL;
    const senderName = c.env.BREVO_SENDER_NAME;
    const recipientEmail = c.env.LEAD_RECIPIENT_EMAIL;
    const apiKey = c.env.BREVO_API_KEY;

    if (!senderEmail || !senderName || !recipientEmail || !apiKey) {
      console.error('Brevo email configuration is incomplete');
      return c.json({ success: false, error: 'Email configuration missing' }, 500);
    }

    const emailPayload = {
      sender: {
        name: senderName,
        email: senderEmail,
      },
      to: [{ email: recipientEmail }],
      cc: [{ email: 'nuno.dhiren@gmail.com' }],
      replyTo: body?.email
        ? {
            email: body.email,
            name: body.fullName || 'Website lead',
          }
        : undefined,
      subject: getLeadSubject(body?.type),
      htmlContent: renderLeadEmail(body),
    };

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify(emailPayload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Brevo send failed:', errorText);
      return c.json({ success: false, error: 'Email send failed' }, 500);
    }

    return c.json({ success: true });
  } catch (err) {
    console.error('Lead submission error:', err);
    return c.json({ success: false, error: 'Failed to submit lead' }, 500);
  }
});

export default app;
