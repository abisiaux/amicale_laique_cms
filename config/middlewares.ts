export default [
    "strapi::logger",
    "strapi::errors",
    {
        name: 'strapi::security',
        config: {
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    'connect-src': [
                        "'self'",
                        'https://api.aljvligne.fr',
                    ],
                },
            },
        },
    },
    {
        name: "strapi::cors",
        config: {
            enabled: true,
            origin: [
                "https://aljvligne.fr",
                "https://www.aljvligne.fr",
                "https://api.aljvligne.fr",
            ],
            headers: [
                "Content-Type",
                "Authorization",
                "Origin",
                "Accept",
            ],
            methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
            keepHeaderOnError: true,
            credentials: false,
        },
    },
    "strapi::poweredBy",
    "strapi::query",
    "strapi::body",
    "strapi::session",
    "strapi::favicon",
    "strapi::public",
    {
        name: "global::cache-control", // <- correspond à src/middlewares/cache-control.ts
        config: {},
    },
];
