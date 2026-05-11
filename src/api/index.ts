import { Hono } from 'hono';
import { cors } from "hono/cors";

const app = new Hono().basePath('api');

app.use(cors({ origin: "*" }));

app.get('/ping', (c) => c.json({ message: `Pong! ${Date.now()}` }));

app.post('/leads', async (c) => {
  try {
    const body = await c.req.json();

    console.info('Lead form placeholder received submission', {
      type: body?.type ?? 'unknown',
      email: body?.email ?? null,
      fullName: body?.fullName ?? null,
    });

    return c.json({
      success: true,
      message: "Lead submission is temporarily in placeholder mode while the live form workflow is being set up.",
    });
  } catch (err) {
    console.error('Lead submission error:', err);
    return c.json({ success: false, error: 'Failed to submit lead' }, 500);
  }
});

export default app;
