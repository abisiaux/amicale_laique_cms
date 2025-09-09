export default () => {
  return async (ctx, next) => {
    await next();

    if (ctx.request.url.startsWith("/api")) {
      if (ctx.url.startsWith("/api/proces-verbaux")) {
        ctx.set("Cache-Control", "public, max-age=3600"); // 1 heure
      }
      if (ctx.url.startsWith("/api/evenements")) {
        ctx.set("Cache-Control", "public, max-age=300"); // 5 minutes
      }
      if (ctx.url.startsWith("/api/membres")) {
        ctx.set("Cache-Control", "public, max-age=604800"); // 1 semaine
      }
      if (ctx.url.startsWith("/api/actualites/")) {
        ctx.set("Cache-Control", "public, max-age=900"); // 15 minutes
      }
      if (ctx.url.startsWith("/api/actualites")) {
        ctx.set("Cache-Control", "public, max-age=300"); // 5 minutes
      }
      if (ctx.url.startsWith("/api/services/")) {
        ctx.set("Cache-Control", "public, max-age=900"); // 15 minutes
      }
      if (ctx.url.startsWith("/api/services")) {
        ctx.set("Cache-Control", "public, max-age=300"); // 5 minutes
      }
    }
  };
};
