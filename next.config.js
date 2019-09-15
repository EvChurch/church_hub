const withOffline = require('next-offline');
const withGraphQL = require('next-plugin-graphql');
const withSass = require('@zeit/next-sass');
const compose = require('lodash/fp/compose');

const removeMinimizeOptionFromCssLoaders = config => {
  console.warn('HACK: Removing `minimize` option from `css-loader` entries in Webpack config');
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

module.exports = compose([withGraphQL, withOffline, withSass])({
  webpack(config) {
    removeMinimizeOptionFromCssLoaders(config);
    return config;
  },
});
