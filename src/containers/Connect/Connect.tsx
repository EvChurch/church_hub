import { useApolloClient } from '@apollo/react-hooks';
import { Container, makeStyles, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React, { FC, Fragment } from 'react';
import Img from 'react-image';
import ElvantoForm from '../../components/ElvantoForm';

const useStyles = makeStyles(theme => ({
  image: {
    width: '100%',
  },
  ratio16by9: {
    paddingTop: '56.25%',
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));
const Connect: FC = () => {
  const client = useApolloClient();
  const classes = useStyles();
  client.writeData({
    data: { activeRoute: { __typename: 'Route', name: 'Connect', parentHref: null, parentAs: null } },
  });

  return (
    <Fragment>
      <Img
        className={classes.image}
        src="/static/images/connect.jpg"
        loader={<Skeleton className={classes.ratio16by9} variant="rect" />}
      />
      <Container className={classes.container}>
        <Typography variant="h5" component="h2">
          We want to connect with You!
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Help us to stay connected and keep you informed.
        </Typography>
      </Container>
      <ElvantoForm id="a3e42dbb-424b-485a-957d-6e406988e696" content="" />
    </Fragment>
  );
};

export default Connect;
