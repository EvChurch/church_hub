import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';
import { join } from 'lodash/fp';
import Link from 'next/link';
import React, { FC, Fragment } from 'react';
import Moment from 'react-moment';
import { seriesQuery_series_nodes_resources_nodes as seriesQuerySeriesNodesResourcesNodes } from '../../../containers/Series/types/seriesQuery';

interface Props {
  loading?: boolean;
  sermon?: seriesQuerySeriesNodesResourcesNodes;
  seriesId?: string;
}

const useStyles = makeStyles(theme =>
  createStyles({
    day: {
      fontSize: '25px',
      color: theme.palette.primary.main,
    },
    icon: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingRight: '15px',
    },
    month: {
      textTransform: 'uppercase',
    },
    text: {
      margin: 0,
    },
  }),
);

const Item: FC<Props> = ({ loading, sermon, seriesId }) => {
  const classes = useStyles();

  if (loading) {
    return (
      <Fragment>
        <Skeleton height={12} width="60%" />
      </Fragment>
    );
  } else if (sermon) {
    const names = join(', ', sermon.authors.map(author => author.name));
    return (
      <Link
        href={seriesId ? '/series/[seriesId]/sermons/[sermonId]' : '/sermons/[sermonId]'}
        as={seriesId ? `/series/${seriesId}/sermons/${sermon.id}` : `sermons/${sermon.id}`}
        passHref
      >
        <ListItem button>
          <ListItemIcon className={classes.icon}>
            <>
              <Moment format="DD" className={classes.day}>
                {sermon.publishedAt}
              </Moment>
              <Moment format="MMM" className={classes.month}>
                {sermon.publishedAt}
              </Moment>
            </>
          </ListItemIcon>
          <ListItemText primary={sermon.name} secondary={names} className={classes.text} />
        </ListItem>
      </Link>
    );
  } else {
    return <ListItem></ListItem>;
  }
};

export default Item;
