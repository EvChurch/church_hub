import { Container, makeStyles, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React, { FC, Fragment } from 'react';
import Img from 'react-image';
import ElvantoForm from '../../components/ElvantoForm';

const useStyles = makeStyles(theme => ({
  image: {
    width: '100%',
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));
const Connect: FC = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Img className={classes.image} src="/static/images/connect.jpg" loader={<Skeleton variant="rect"></Skeleton>} />
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
