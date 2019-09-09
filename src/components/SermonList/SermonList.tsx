import { List } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React, { FC, Fragment } from 'react';
import { seriesQuery_series_nodes_resources_nodes as seriesQuerySeriesNodesResourcesNodes } from '../../containers/Series/types/seriesQuery';
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
  items?: seriesQuerySeriesNodesResourcesNodes[];
  seriesId?: string;
}

const SermonList: FC<Props> = ({ loading, items, seriesId }) => {
  const classes = useStyles();

  if (loading) {
    return <Item loading={true}></Item>;
  }
  return (
    <List className={classes.list} component="div">
      {items &&
        items.map(sermon => (
          <Fragment key={sermon.id}>
            <Item sermon={sermon} seriesId={seriesId} />
          </Fragment>
        ))}
    </List>
  );
};

export default SermonList;
