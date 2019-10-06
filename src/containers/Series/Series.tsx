import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { get } from 'lodash/fp';
import React, { FC } from 'react';
import Series from '../../components/Series';
import SeriesQuery from './SeriesQuery.gql';
import { seriesQuery } from './types/seriesQuery';

interface Props {
  id: string;
}

const SeriesContainer: FC<Props> = ({ id }) => {
  const client = useApolloClient();
  const { loading, data } = useQuery<seriesQuery>(SeriesQuery, {
    variables: { ids: [id] },
  });
  const series = get('series.nodes[0]', data);
  client.writeData({
    data: {
      activeRoute: {
        __typename: 'Route',
        name: get('series.nodes[0].name', data) || '',
        parentHref: '/series',
        parentAs: '/series',
      },
    },
  });
  return <Series loading={loading} series={series}></Series>;
};

export default SeriesContainer;
