import { verifySession } from '../../_lib/auth.js';

export async function onRequestGet(context) {
  const { request, env } = context;

  if (!(await verifySession(request, env))) {
    return Response.json({ ok: false, error: 'Unauthorized.' }, { status: 401 });
  }

  const { results } = await env.DB.prepare(
    `SELECT id, business, idea, assumption, mistake, doomsday, money, time, message, anonymous, status, created_at
     FROM stories
     ORDER BY created_at DESC`
  ).all();

  return Response.json({ ok: true, stories: results });
}
