import gql from 'graphql-tag';

export const typeDefs = gql`
  type Route {
    name: String
    parentHref: String
    parentAs: String
  }
  extend type Query {
    activeSermon: Resource
    activeRoute: Route
  }
`;

export const resolvers = {};
