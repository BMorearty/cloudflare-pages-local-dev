export async function onRequest(context) {
  console.log('handling request');
  await context.env.TEST.put('name', 'Brian');
  try {
    const name = await context.env.TEST.get('name');
    return new Response(`hello, ${name}`);
  } catch (error) {
    try {
      return new Response(error.message);
    } catch (error) {
      return new Response(error);
    }
  }
}
