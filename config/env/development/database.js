module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: `/cloudsql/${env("INSTANCE_CONNECTION_NAME")}`,
      port: env("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapi"),
      user: env("DATABASE_USERNAME", "strapi"),
      password: env("DATABASE_PASSWORD", "strapi"),
      ssl: {
        // rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
        ca: env("DATABASE_CA"),
      },
    },
    acquireConnectionTimeout: 1000000,
    pool: {
      min: 0,
      max: 100,
      acquireTimeoutMillis: 300000,
      createTimeoutMillis: 300000,
      destroyTimeoutMillis: 50000,
      idleTimeoutMillis: 300000,
      reapIntervalMillis: 10000,
      createRetryIntervalMillis: 2000,
      propagateCreateError: false,
    },
  },
});
