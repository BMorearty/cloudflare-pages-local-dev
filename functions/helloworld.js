export async function onRequest(context) {
  const name = await context.env.TEST.get('name');
  return new Response(`hello, ${name}`);
}
