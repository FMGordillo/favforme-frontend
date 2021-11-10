const withPWA = require("next-pwa");
const { withSentryConfig } = require('@sentry/nextjs');
const runtimeCaching = require("next-pwa/cache");

const moduleExports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
  },
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
});

const sentryWebpackPluginOptions = {
  // https://github.com/getsentry/sentry-webpack-plugin#options.
  silent: true,
};

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
