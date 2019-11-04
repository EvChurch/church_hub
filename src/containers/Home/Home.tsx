import { useApolloClient } from '@apollo/react-hooks';
import React, { FC, useEffect } from 'react';
import EventList from '../EventList';
import StepList from '../StepList';

const HomeContainer: FC = () => {
  const client = useApolloClient();

  useEffect(
    () =>
      client.writeData({
        data: { activeRoute: { __typename: 'Route', name: 'Home', parentHref: null, parentAs: null } },
      }),
    [],
  );
  return (
    <>
      <EventList featured={true} />
      <StepList featured={true} />
    </>
  );
};

export default HomeContainer;
