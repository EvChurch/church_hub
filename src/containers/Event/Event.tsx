import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { get } from 'lodash/fp';
import React, { FC } from 'react';
import Event from '../../components/Event';
import EventQuery from './eventQuery.gql';
import { eventQuery } from './types/eventQuery';

interface Props {
  id: string;
}

const EventContainer: FC<Props> = ({ id }) => {
  const client = useApolloClient();
  const { loading, data } = useQuery<eventQuery>(EventQuery, {
    variables: { ids: [id] },
  });
  const event = get('events.nodes[0]', data);
  client.writeData({
    data: {
      activeRoute: {
        __typename: 'Route',
        name: get('events.nodes[0].name', data),
        parentHref: '/events',
        parentAs: '/events',
      },
    },
  });

  return <Event loading={loading} event={event}></Event>;
};

export default EventContainer;
