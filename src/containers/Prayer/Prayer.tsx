import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { get } from 'lodash/fp';
import React, { FC } from 'react';
import Prayer from '../../components/Prayer';
import PrayerQuery from './prayerQuery.gql';
import { prayerQuery } from './types/prayerQuery';

interface Props {
  id: string;
}

const PrayerContainer: FC<Props> = ({ id }) => {
  const client = useApolloClient();
  const { loading, data } = useQuery<prayerQuery>(PrayerQuery, {
    variables: { ids: [id] },
  });
  const prayer = get('prayers.nodes[0]', data);
  client.writeData({
    data: {
      activeRoute: {
        __typename: 'Route',
        name: get('prayers.nodes[0].name', data),
        parentHref: '/prayers',
        parentAs: '/prayers',
      },
    },
  });

  return <Prayer loading={loading} prayer={prayer}></Prayer>;
};

export default PrayerContainer;
