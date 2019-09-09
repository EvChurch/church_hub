import { List } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React, { FC, Fragment } from 'react';
import { seriesListQuery_series_nodes as seriesListQuerySeriesNodes } from '../../containers/SeriesList/types/seriesListQuery';
import Item from './Item';

const useStyles = makeStyles(() =>
  createStyles({
    list: {
      padding: 0,
    },
  }),
);

interface Props {
  loading?: boolean;
  items?: seriesListQuerySeriesNodes[];
}

const SeriesList: FC<Props> = ({ loading, items }) => {
  const classes = useStyles();

  if (loading) {
    return <Item loading={true}></Item>;
  }
  return (
    <List className={classes.list} component="div">
      {items &&
        items.map(series => (
          <Fragment key={series.id}>
            <Item series={series} />
          </Fragment>
        ))}
    </List>
  );
};

export default SeriesList;
