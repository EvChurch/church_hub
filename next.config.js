const withOffline = require('next-offline');
const withGraphQL = require('next-plugin-graphql');

module.exports = withGraphQL(
  withOffline({
    webpack(config) {
      return config;
    },
  }),
);
