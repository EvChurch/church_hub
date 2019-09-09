import { useQuery } from '@apollo/react-hooks';
import { get } from 'lodash/fp';
import React, { FC } from 'react';
import SeriesList from '../../components/SeriesList';
import SeriesListQuery from './SeriesListQuery.gql';
import { seriesListQuery } from './types/seriesListQuery';

const SeriesListContainer: FC = () => {
  const { loading, data } = useQuery<seriesListQuery>(SeriesListQuery);

  if (loading) {
    return <SeriesList loading={loading}></SeriesList>;
  } else {
    const items = get('series.nodes', data);
    return <SeriesList items={items}></SeriesList>;
  }
};

export default SeriesListContainer;
