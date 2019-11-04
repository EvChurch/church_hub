import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { get } from 'lodash/fp';
import React, { FC, useEffect } from 'react';
import SeriesList from '../../components/SeriesList';
import SeriesListQuery from './SeriesListQuery.gql';
import { seriesListQuery } from './types/seriesListQuery';

const SeriesListContainer: FC = () => {
  const client = useApolloClient();
  const { loading, data } = useQuery<seriesListQuery>(SeriesListQuery);

  useEffect(
    () =>
      client.writeData({
        data: { activeRoute: { __typename: 'Route', name: 'Sermon Series', parentHref: null, parentAs: null } },
      }),
    [],
  );
  if (loading) {
    return <SeriesList loading={loading}></SeriesList>;
  } else {
    const items = get('series.nodes', data);
    return <SeriesList items={items}></SeriesList>;
  }
};

export default SeriesListContainer;
