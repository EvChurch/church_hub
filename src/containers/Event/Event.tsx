import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { get } from 'lodash/fp';
import React, { FC, useEffect } from 'react';
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
  const name = get('events.nodes[0].name', data) || '';

  useEffect(
    () =>
      client.writeData({
        data: {
          activeRoute: {
            __typename: 'Route',
            name: name,
            parentHref: '/events',
            parentAs: '/events',
          },
        },
      }),
    [name],
  );

  return <Event loading={loading} event={event}></Event>;
};

export default EventContainer;
