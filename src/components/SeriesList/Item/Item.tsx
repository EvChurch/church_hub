import { ListItem, ListItemText } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';
import Link from 'next/link';
import React, { FC } from 'react';
import Img from 'react-image';
import { seriesListQuery_series_nodes as seriesListQuerySeriesNodes } from '../../../containers/SeriesList/types/seriesListQuery';

const useStyles = makeStyles(theme =>
  createStyles({
    image: {
      width: '100%',
    },
    listItem: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: 0,
    },
    listItemText: {
      paddingTop: theme.spacing(1),
      paddingRight: theme.spacing(2),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(2),
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
      <div>
        <Skeleton className={classes.ratio16by9} variant="rect" />
        <Skeleton width="60%" />
      </div>
    );
  } else if (series) {
    return (
      <Link href="/series/[seriesId]" as={`/series/${series.id}`} passHref>
        <ListItem button className={classes.listItem}>
          <Img
            className={classes.image}
            src={series.bannerUrl || undefined}
            loader={<Skeleton className={classes.ratio16by9} variant="rect"></Skeleton>}
          />
          <ListItemText primary={series.name} className={classes.listItemText} />
        </ListItem>
      </Link>
    );
  } else {
    return <ListItem></ListItem>;
  }
};

export default Item;
