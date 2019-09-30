import { Card, CardActionArea, CardMedia } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';
import Link from 'next/link';
import React, { FC, Fragment } from 'react';
import LazyLoad from 'react-lazyload';
import { seriesListQuery_series_nodes as seriesListQuerySeriesNodes } from '../../../containers/SeriesList/types/seriesListQuery';

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
  series?: seriesListQuerySeriesNodes;
}

const Item: FC<Props> = ({ loading, series }) => {
  const classes = useStyles();

  if (loading) {
    return (
      <Card className={classes.card}>
        <Skeleton className={classes.ratio16by9} variant="rect" />
      </Card>
    );
  } else if (series) {
    return (
      <Link href="/series/[seriesId]" as={`/series/${series.id}`} passHref>
        <Card className={classes.card}>
          <CardActionArea>
            <LazyLoad placeholder={<Skeleton className={classes.ratio16by9} variant="rect" />} overflow once>
              <CardMedia className={classes.ratio16by9} image={series.bannerUrl || undefined} />
            </LazyLoad>
          </CardActionArea>
        </Card>
      </Link>
    );
  } else {
    return <Fragment></Fragment>;
  }
};

export default Item;
