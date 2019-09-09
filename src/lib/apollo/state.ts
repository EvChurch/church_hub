import gql from 'graphql-tag';

export const typeDefs = gql`
  extend type Query {
    activeSermon: Resource
  }
`;

export const resolvers = {};
