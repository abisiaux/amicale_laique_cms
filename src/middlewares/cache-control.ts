export default () => {
  return async (ctx, next) => {
    await next();

    if (ctx.request.url.startsWith("/api")) {
        ctx.set("Cache-Control", "public, max-age=300, stale-while-revalidate=3600, stale-if-error=86400");
    }
  };
};
