import { useApolloClient } from '@apollo/react-hooks';
import { Container, Typography } from '@material-ui/core';
import React, { FC, useEffect } from 'react';
import EventList from '../EventList';
import LatestSermon from '../LatestSermon';
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
      <Container>
        <Typography variant="h6" component="h2">
          Latest Sermon
        </Typography>
      </Container>
      <LatestSermon />
    </>
  );
};

export default HomeContainer;
