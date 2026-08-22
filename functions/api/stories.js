const MAX_LEN = 4000;

function clip(value) {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, MAX_LEN);
}

export async function onRequestPost(context) {
  const { request, env } = context;

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: 'Invalid JSON body.' }, { status: 400 });
  }

  const business = clip(body.business);
  const idea = clip(body.idea);
  const assumption = clip(body.assumption);
  const mistake = clip(body.mistake);
  const doomsday = clip(body.doomsday);
  const money = clip(body.money);
  const time = clip(body.time);
  const message = clip(body.message);
  const anonymous = body.anonymous === false ? 0 : 1;

  if (!idea || !assumption || !doomsday || !message) {
    return Response.json({ ok: false, error: 'Missing required fields.' }, { status: 400 });
  }

  await env.DB.prepare(
    `INSERT INTO stories (business, idea, assumption, mistake, doomsday, money, time, message, anonymous, status)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending')`
  ).bind(business, idea, assumption, mistake, doomsday, money, time, message, anonymous).run();

  return Response.json({ ok: true });
}

export async function onRequestGet(context) {
  const { env } = context;

  const { results } = await env.DB.prepare(
    `SELECT business, message, money, time, created_at
     FROM stories
     WHERE status = 'published'
     ORDER BY created_at DESC
     LIMIT 50`
  ).all();

  return Response.json({ ok: true, stories: results });
}
