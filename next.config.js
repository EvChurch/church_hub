const withCSS = require('@zeit/next-css');
const withGraphQL = require('next-plugin-graphql');
const withOffline = require('next-offline');
const withSass = require('@zeit/next-sass');
const compose = (...ops) => ops.reduce((a, b) => arg => b(a(arg)));

const removeMinimizeOptionFromCssLoaders = config => {
  config.module.rules.forEach(rule => {
    if (Array.isArray(rule.use)) {
      rule.use.forEach(u => {
        if (u.loader === 'css-loader' && u.options) {
          delete u.options.minimize;
        }
      });
    }
  });
};

const nextConfig = {
  target: 'serverless',
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60,
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
  webpack: config => {
    removeMinimizeOptionFromCssLoaders({ ...config, ...nextConfig });
    return config;
  },
};

module.exports = compose(withCSS, withGraphQL, withOffline, withSass)(nextConfig);
