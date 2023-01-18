export async function onRequest(context) {
  // const name = await context.env.TEST.get('name', 'Brian');
  const name = JSON.stringify(Object.keys(context.env));
  return new Response(`hello, ${name}`);
}
