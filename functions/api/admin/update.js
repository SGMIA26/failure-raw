import { verifySession } from '../../_lib/auth.js';

const VALID_STATUSES = ['pending', 'published', 'rejected'];

export async function onRequestPost(context) {
  const { request, env } = context;

  if (!(await verifySession(request, env))) {
    return Response.json({ ok: false, error: 'Unauthorized.' }, { status: 401 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: 'Invalid JSON body.' }, { status: 400 });
  }

  const id = Number(body.id);
  const status = body.status;

  if (!id || !VALID_STATUSES.includes(status)) {
    return Response.json({ ok: false, error: 'Invalid id or status.' }, { status: 400 });
  }

  await env.DB.prepare(`UPDATE stories SET status = ? WHERE id = ?`).bind(status, id).run();

  return Response.json({ ok: true });
}
