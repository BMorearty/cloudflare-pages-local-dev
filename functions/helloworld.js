export function onRequest(context) {
  await context.env.TEST.put('name', 'Brian');
  return new Response('hello, world');
}
