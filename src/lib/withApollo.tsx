import ApolloClient, { InMemoryCache } from 'apollo-boost';
import withApollo from 'next-with-apollo';
import { resolvers, typeDefs } from './apollo/state';

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      uri: 'https://resources.aucklandev.co.nz/graphql',
      cache: new InMemoryCache().restore(initialState || {}),
      resolvers,
      typeDefs,
    });
  },
  {
    getDataFromTree: 'always',
  },
);
