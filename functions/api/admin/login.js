import { createSessionCookie } from '../../_lib/auth.js';

export async function onRequestPost(context) {
  const { request, env } = context;

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: 'Invalid JSON body.' }, { status: 400 });
  }

  if (typeof body.password !== 'string' || body.password !== env.ADMIN_PASSWORD) {
    return Response.json({ ok: false, error: 'Wrong password.' }, { status: 401 });
  }

  const cookie = await createSessionCookie(env);
  return new Response(JSON.stringify({ ok: true }), {
    headers: { 'Content-Type': 'application/json', 'Set-Cookie': cookie },
  });
}
