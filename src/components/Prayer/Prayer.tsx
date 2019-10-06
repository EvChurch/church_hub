import { Container, makeStyles, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React, { FC, Fragment } from 'react';
import { prayerQuery_prayers_nodes as prayerQueryPrayersNodes } from '../../containers/Prayer/types/prayerQuery';
import EchoAd from '../EchoAd';
import Image from '../Image';

const useStyles = makeStyles(theme => ({
  image: {
    width: '100%',
    marginBottom: theme.spacing(1),
  },
  ratio16by9: {
    paddingTop: '56.25%',
  },
  container: {
    marginTop: theme.spacing(2),
  },
}));

interface Props {
  loading?: boolean;
  prayer?: prayerQueryPrayersNodes;
}

const Prayer: FC<Props> = ({ loading, prayer }) => {
  const classes = useStyles();

  if (loading) {
    return (
      <div>
        <Skeleton className={classes.ratio16by9} variant="rect" />
        <Container className={classes.container}>
          <Skeleton width="60%" />
          <Skeleton height={12} width="40%" />
        </Container>
      </div>
    );
  } else if (prayer) {
    return (
      <Fragment>
        <Image src={prayer.bannerUrl || undefined} loader={<Skeleton variant="rect"></Skeleton>} />
        <Container className={classes.container}>
          <Typography variant="body2" color="textSecondary" component="p">
            {prayer.snippet}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            {prayer.content && <div dangerouslySetInnerHTML={{ __html: prayer.content }} />}
          </Typography>
          <EchoAd />
        </Container>
      </Fragment>
    );
  } else {
    return <Fragment></Fragment>;
  }
};

export default Prayer;
