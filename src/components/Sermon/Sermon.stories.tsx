import { storiesOf } from '@storybook/react';
import { ApolloError } from 'apollo-boost';
import { GraphQLError } from 'graphql';
import React, { ReactElement } from 'react';
import uuid from 'uuid/v4';
import { sermonQuery_resources_nodes as sermonQueryResourcesNodes } from '../../containers/Sermon/types/sermonQuery';
import Sermon from './Sermon';

const sermon: sermonQueryResourcesNodes = {
  __typename: 'Resource',
  id: uuid(),
  name: 'The Real Thing',
  snippet:
    'We have this kind of high priest, who sat down at the right hand of the throne of the Majesty in the heavens, a minister of the sanctuary and the true tabernacle that was set up by the Lord and not man.',
  content: '',
  audioUrl: null,
  youtubeUrl: null,
  bannerUrl: null,
  authors: [],
  scriptures: [],
  topics: [],
};
const graphQLErrors = [
  new GraphQLError('Something went wrong with GraphQL'),
  new GraphQLError('Something else went wrong with GraphQL'),
];
const networkError = new Error('Network error');
const errorMessage = 'this is an error message';
const apolloError = new ApolloError({
  graphQLErrors: graphQLErrors,
  networkError: networkError,
  errorMessage: errorMessage,
});

storiesOf('Sermon', module)
  .add(
    'default',
    (): ReactElement => <Sermon data={{ resources: { __typename: 'ResourceConnection', nodes: [sermon] } }} />,
  )
  .add('loading', (): ReactElement => <Sermon loading={true} />)
  .add(
    'error',
    (): ReactElement => {
      return <Sermon error={apolloError} />;
    },
  );
