module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: process.env.PORT || env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  url: env("BASE_URL", "http://localhost:1337"),
});
