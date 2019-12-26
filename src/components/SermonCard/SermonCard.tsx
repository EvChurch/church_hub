import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';
import Link from 'next/link';
import React, { FC } from 'react';
import Moment from 'react-moment';
import { latestSermonQuery_resources_edges_node as latestSermonQueryResourcesEdgesNode } from '../../containers/LatestSermon/types/latestSermonQuery';

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
  sermon?: latestSermonQueryResourcesEdgesNode;
}

const SermonCard: FC<Props> = ({ loading, sermon }) => {
  const classes = useStyles();

  if (loading) {
    return (
      <Card className={classes.card}>
        <Skeleton className={classes.ratio16by9} variant="rect" />
      </Card>
    );
  } else if (sermon) {
    return (
      <Link
        href={'/series/[seriesId]/sermons/[sermonId]'}
        as={`/series/${sermon.series[0].id}/sermons/${sermon.id}`}
        passHref
      >
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia className={classes.ratio16by9} image={sermon.series[0].bannerUrl || undefined} />
            <div className={classes.overlay} />
            <CardContent className={classes.cardContent}>
              <Typography variant="body2" component="p">
                <Moment format="LL">{sermon.publishedAt}</Moment>
              </Typography>
              <Typography variant="body2" component="p">
                {sermon.authors[0].name}
                {sermon.connectionScriptures[0] && '&#183'}
                {sermon.connectionScriptures[0] && sermon.connectionScriptures[0].scripture.name}
                {sermon.connectionScriptures[0] && sermon.connectionScriptures[0].range}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    );
  } else {
    return <></>;
  }
};

export default SermonCard;
