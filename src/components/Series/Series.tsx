import { List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { get } from 'lodash/fp';
import React, { FC, Fragment } from 'react';
import { seriesQuery_series_nodes as seriesQuerySeriesNodes } from '../../containers/Series/types/seriesQuery';
import Image from '../Image';
import SermonList from '../SermonList';

const useStyles = makeStyles(theme => ({
  title: {
    margin: theme.spacing(1),
  },
  ratio16by9: {
    paddingTop: '56.25%',
  },
}));

interface Props {
  loading?: boolean;
  series?: seriesQuerySeriesNodes;
}

const Series: FC<Props> = ({ loading, series }) => {
  const classes = useStyles();
  const sermons = get('resources.nodes', series) || [];

  if (loading) {
    return (
      <div>
        <Skeleton className={classes.ratio16by9} variant="rect" />
        <List>
          <ListItem>
            <ListItemText
              primary={<Skeleton height={12} width="60%" />}
              secondary={<Skeleton height={6} width="50%" />}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={<Skeleton height={12} width="60%" />}
              secondary={<Skeleton height={6} width="50%" />}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={<Skeleton height={12} width="60%" />}
              secondary={<Skeleton height={6} width="50%" />}
            />
          </ListItem>
        </List>
      </div>
    );
  } else if (series) {
    return (
      <Fragment>
        <Image src={series.bannerUrl || undefined} />
        <SermonList items={sermons} seriesId={series.id}></SermonList>
      </Fragment>
    );
  } else {
    return <Fragment></Fragment>;
  }
};

export default Series;
