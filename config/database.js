function onCreateSSL(env) {
  const runOn = env("RUN_ON", "server");
  if (runOn === "local") {
    return {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapi"),
      user: env("DATABASE_USERNAME", "strapi"),
      password: env("DATABASE_PASSWORD", "strapi"),
      // schema: env("DATABASE_SCHEMA", "public"), // Not required
      // ssl: {
      //   rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
      //   // ca: env("DATABASE_CA"),
      // },
    };
  } else {
    return {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapi"),
      user: env("DATABASE_USERNAME", "strapi"),
      password: env("DATABASE_PASSWORD", "strapi"),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
        // ca: env("DATABASE_CA"),
      },
    };
  }
}

const connectGCPSql = (env) => {
  return {
    host: `/cloudsql/${env("INSTANCE_CONNECTION_NAME")}`,
    port: env("DATABASE_PORT", 5432),
    database: env("DATABASE_NAME", "strapi"),
    user: env("DATABASE_USERNAME", "strapi"),
    password: env("DATABASE_PASSWORD", "strapi"),
  };
};

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: connectGCPSql(env),
    debug: true,
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
