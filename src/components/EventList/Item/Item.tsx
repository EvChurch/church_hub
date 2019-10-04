import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';
import Link from 'next/link';
import React, { FC, Fragment } from 'react';
import Moment from 'react-moment';
import { eventListQuery_events_nodes as eventListQueryEventsNodes } from '../../../containers/EventList/types/eventListQuery';

const useStyles = makeStyles(theme =>
  createStyles({
    card: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    ratio16by9: {
      paddingTop: '56.25%',
    },
    overlay: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      top: '0',
      backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5))',
      backgroundSize: 'cover',
    },
    cardContent: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      color: 'white',
    },
  }),
);

interface Props {
  loading?: boolean;
  event?: eventListQueryEventsNodes;
}

const Item: FC<Props> = ({ loading, event }) => {
  const classes = useStyles();

  if (loading) {
    return (
      <Card className={classes.card}>
        <Skeleton className={classes.ratio16by9} variant="rect" />
      </Card>
    );
  } else if (event) {
    return (
      <Link href="/events/[eventId]" as={`/events/${event.id}`} passHref>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia className={classes.ratio16by9} image={event.bannerUrl || undefined} />
            <div className={classes.overlay} />
            <CardContent className={classes.cardContent}>
              <Typography variant="h5" component="h2">
                {event.name}
              </Typography>
              <Typography variant="body2" component="p">
                <Moment format="LLLL">{event.startAt}</Moment>
              </Typography>
              <Typography variant="body2" component="p">
                {event.address} &#183; {event.location.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    );
  } else {
    return <Fragment></Fragment>;
  }
};

export default Item;
