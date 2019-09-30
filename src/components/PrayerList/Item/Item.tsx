import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';
import Link from 'next/link';
import React, { FC, Fragment } from 'react';
import { prayerListQuery_prayers_nodes as prayerListQueryPrayersNodes } from '../../../containers/PrayerList/types/prayerListQuery';

const useStyles = makeStyles(theme =>
  createStyles({
    card: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    ratio16by9: {
      paddingTop: '56.25%',
    },
  }),
);

interface Props {
  loading?: boolean;
  prayer?: prayerListQueryPrayersNodes;
}

const Item: FC<Props> = ({ loading, prayer }) => {
  const classes = useStyles();

  if (loading) {
    return (
      <Card className={classes.card}>
        <Skeleton className={classes.ratio16by9} variant="rect" />
        <CardContent>
          <Skeleton height={6} width="80%" />
          <Skeleton height={6} width="60%" />
        </CardContent>
      </Card>
    );
  } else if (prayer) {
    return (
      <Link href="/prayers/[prayerId]" as={`/prayers/${prayer.id}`} passHref>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia className={classes.ratio16by9} image={prayer.bannerUrl || undefined} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {prayer.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {prayer.snippet}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Pray Now
            </Button>
          </CardActions>
        </Card>
      </Link>
    );
  } else {
    return <Fragment></Fragment>;
  }
};

export default Item;
