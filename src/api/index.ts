import { Hono } from 'hono';
import { cors } from "hono/cors";
import { drizzle } from "drizzle-orm/d1";
import { leads } from "./database/schema";
import { sendEmail } from "@runablehq/website-runtime/server";
import { env } from "cloudflare:workers";

const app = new Hono().basePath('api');

app.use(cors({ origin: "*" }));

app.get('/ping', (c) => c.json({ message: `Pong! ${Date.now()}` }));

app.post('/leads', async (c) => {
  try {
    const db = drizzle(c.env.DB);
    const body = await c.req.json();

    await db.insert(leads).values({
      type: body.type,
      fullName: body.fullName,
      company: body.company || null,
      email: body.email,
      phone: body.phone || null,
      craneType: body.craneType || null,
      craneMake: body.craneMake || null,
      craneModel: body.craneModel || null,
      craneYear: body.craneYear || null,
      numberOfUnits: body.numberOfUnits || null,
      preferredTimeframe: body.preferredTimeframe || null,
      equipmentInterest: body.equipmentInterest || null,
      budgetRange: body.budgetRange || null,
      message: body.message || null,
    });

    // Build email notification
    const typeLabel = body.type === 'seller' ? 'Crane Consignment' : body.type === 'buyer' ? 'Buyer Registration' : 'Contact Enquiry';
    const rows = Object.entries(body)
      .filter(([k]) => k !== 'type')
      .map(([k, v]) => `<tr><td style="padding:6px 12px;font-weight:600;color:#1a1f2e;white-space:nowrap;">${k}</td><td style="padding:6px 12px;color:#333;">${v}</td></tr>`)
      .join('');

    await sendEmail({
      url: (env as any).RUNABLE_URL,
      to: "bryan.c@jeffmartinauctioneers.com",
      subject: `[AuctionCrane] New ${typeLabel} — ${body.fullName}`,
      replyTo: body.email,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#1a1f2e;padding:24px 32px;border-radius:8px 8px 0 0;">
            <h1 style="color:#c9a227;margin:0;font-size:20px;">AuctionCrane</h1>
            <p style="color:#fff;margin:4px 0 0;font-size:14px;">Powered by Jeff Martin Auctioneers Inc</p>
          </div>
          <div style="background:#f9f9f9;padding:24px 32px;border-radius:0 0 8px 8px;border:1px solid #e5e7eb;">
            <h2 style="color:#1a1f2e;margin-top:0;">New ${typeLabel} Lead</h2>
            <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:6px;overflow:hidden;border:1px solid #e5e7eb;">
              ${rows}
            </table>
            <p style="color:#666;font-size:12px;margin-top:16px;">Submitted via auctioncrane.com</p>
          </div>
        </div>
      `,
    });

    return c.json({ success: true });
  } catch (err) {
    console.error('Lead submission error:', err);
    return c.json({ success: false, error: 'Failed to submit lead' }, 500);
  }
});

export default app;
