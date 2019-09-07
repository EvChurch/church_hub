import React, { FC } from 'react';
import SERMONS_QUERY from './sermonsQuery.graphql';
import { useQuery } from '@apollo/react-hooks';
import { sermonsQuery } from './types/sermonsQuery';
import { Container, Grid, Box } from '@material-ui/core';
import Sermon from '../../components/Sermon';

const Sermons: FC = () => {
  const { loading, error, data } = useQuery<sermonsQuery>(SERMONS_QUERY);
  if (loading) {
    return <Container>Loading ...</Container>;
  }
  if (error) {
    return <Container>{error.message}</Container>;
  }
  return (
    <Container>
      <Box my={3}>
        <Grid container spacing={3}>
          {data &&
            data.resources.nodes &&
            data.resources.nodes.map(sermon => {
              if (sermon) {
                return (
                  <Grid item xs={12} sm={6} md={4}>
                    <Sermon {...sermon}></Sermon>
                  </Grid>
                );
              }
            })}
        </Grid>
      </Box>
    </Container>
  );
};

export default Sermons;
