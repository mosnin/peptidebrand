import { NextResponse } from 'next/server';

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

  return NextResponse.json({ ok: true });
}
