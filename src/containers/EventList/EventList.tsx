import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { get } from 'lodash/fp';
import React, { FC, useEffect } from 'react';
import EventList from '../../components/EventList';
import EventListQuery from './EventListQuery.gql';
import { eventListQuery } from './types/eventListQuery';

const EventListContainer: FC<{ featured?: boolean }> = ({ featured }) => {
  const client = useApolloClient();
  const { loading, data } = useQuery<eventListQuery>(EventListQuery, {
    variables: { featured: featured },
  });

  useEffect(
    () =>
      client.writeData({
        data: { activeRoute: { __typename: 'Route', name: 'Events', parentHref: null, parentAs: null } },
      }),
    [],
  );
  if (loading) {
    return <EventList loading={loading}></EventList>;
  } else {
    const items = get('events.nodes', data);
    return <EventList items={items}></EventList>;
  }
};

export default EventListContainer;
