import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { get } from 'lodash/fp';
import React, { FC } from 'react';
import EventList from '../../components/EventList';
import EventListQuery from './EventListQuery.gql';
import { eventListQuery } from './types/eventListQuery';

const EventListContainer: FC = () => {
  const client = useApolloClient();
  const { loading, data } = useQuery<eventListQuery>(EventListQuery);
  client.writeData({
    data: { activeRoute: { __typename: 'Route', name: 'Events', parentHref: null, parentAs: null } },
  });
  if (loading) {
    return <EventList loading={loading}></EventList>;
  } else {
    const items = get('events.nodes', data);
    return <EventList items={items}></EventList>;
  }
};

export default EventListContainer;
