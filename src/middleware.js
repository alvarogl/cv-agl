export async function onRequest(context, next) {
  const response = await next();

  if (response.status === 404) {
    return Response.redirect(new URL('/', context.url), 302);
  }

  return response;
}
