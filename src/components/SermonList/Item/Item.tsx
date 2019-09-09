import { ListItem, ListItemText } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { join } from 'lodash/fp';
import Link from 'next/link';
import React, { FC, Fragment } from 'react';
import { seriesQuery_series_nodes_resources_nodes as seriesQuerySeriesNodesResourcesNodes } from '../../../containers/Series/types/seriesQuery';

interface Props {
  loading?: boolean;
  sermon?: seriesQuerySeriesNodesResourcesNodes;
  seriesId?: string;
}

const Item: FC<Props> = ({ loading, sermon, seriesId }) => {
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
          <ListItemText primary={sermon.name} secondary={names} />
        </ListItem>
      </Link>
    );
  } else {
    return <ListItem></ListItem>;
  }
};

export default Item;
