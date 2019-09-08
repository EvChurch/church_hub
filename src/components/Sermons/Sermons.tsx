import { Box, Container, Grid } from '@material-ui/core';
import { ApolloError } from 'apollo-boost';
import React, { FC } from 'react';
import { sermonsQuery } from '../../containers/Sermons/types/sermonsQuery';
import SermonCard from '../SermonCard';

interface Props {
  loading?: boolean;
  error?: ApolloError;
  data?: sermonsQuery;
}

const Sermons: FC<Props> = ({ loading, error, data }) => {
  if (loading) {
    return (
      <Container>
        <Box my={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <SermonCard loading={true}></SermonCard>
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
  }
  if (error) {
    return <Container>{error.graphQLErrors.map(error => error.message)}</Container>;
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
                  <Grid key={sermon.id} item xs={12} sm={6} md={4}>
                    <SermonCard sermon={sermon}></SermonCard>
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
