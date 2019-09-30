import { useQuery } from '@apollo/react-hooks';
import { get } from 'lodash/fp';
import React, { FC } from 'react';
import PrayerList from '../../components/PrayerList';
import PrayerListQuery from './PrayerListQuery.gql';
import { prayerListQuery } from './types/prayerListQuery';

const PrayerListContainer: FC = () => {
  const { loading, data } = useQuery<prayerListQuery>(PrayerListQuery);
  if (loading) {
    return <PrayerList loading={loading}></PrayerList>;
  } else {
    const items = get('prayers.nodes', data);
    return <PrayerList items={items}></PrayerList>;
  }
};

export default PrayerListContainer;
