import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { get } from 'lodash/fp';
import React, { FC, useEffect } from 'react';
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
  const name = get('series.nodes[0].name', data) || '';
  useEffect(
    () =>
      client.writeData({
        data: {
          activeRoute: {
            __typename: 'Route',
            name: name,
            parentHref: '/series',
            parentAs: '/series',
          },
        },
      }),
    [name],
  );
  return <Series loading={loading} series={series}></Series>;
};

export default SeriesContainer;
