import { Box, Container, Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { ApolloError } from 'apollo-boost';
import React, { FC } from 'react';
import { sermonsQuery } from '../../containers/Sermons/types/sermonsQuery';
import Sermon from '../Sermon';

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

interface Props {
  loading?: boolean;
  error?: ApolloError;
  data?: sermonsQuery;
}

const Sermons: FC<Props> = ({ loading, error, data }) => {
  const classes = useStyles();

  if (loading) {
    return (
      <Container className={classes.center}>
        <CircularProgress className={classes.progress} />
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
