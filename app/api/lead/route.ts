import { NextResponse } from 'next/server';
import { siteConfig } from '@/lib/site';

async function forwardToWeb3Forms(formName: string, fields: Record<string, unknown>) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) return;

  try {
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New ${formName} submission — ${siteConfig.name}`,
        from_name: siteConfig.name,
        ...fields,
      }),
    });
  } catch {
    // Form capture is best-effort; a delivery failure should not block the on-site confirmation.
  }
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Invalid submission' }, { status: 400 });
  }

  const { formName, honeypot, fields } = body as { formName?: unknown; honeypot?: unknown; fields?: unknown };

  if (typeof honeypot === 'string' && honeypot.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (typeof formName !== 'string' || !formName || typeof fields !== 'object' || fields === null) {
    return NextResponse.json({ error: 'Invalid submission' }, { status: 400 });
  }

  console.log(`[lead-form] ${formName}`, fields);
  await forwardToWeb3Forms(formName, fields as Record<string, unknown>);

  return NextResponse.json({ ok: true });
}
