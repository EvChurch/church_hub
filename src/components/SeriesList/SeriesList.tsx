import { Container } from '@material-ui/core';
import React, { FC, Fragment } from 'react';
import { seriesListQuery_series_nodes as seriesListQuerySeriesNodes } from '../../containers/SeriesList/types/seriesListQuery';
import Item from './Item';
interface Props {
  loading?: boolean;
  items?: seriesListQuerySeriesNodes[];
}

const SeriesList: FC<Props> = ({ loading, items }) => (
  <Container>
    {loading ? (
      <Item loading={true}></Item>
    ) : (
      <Fragment>
        {items &&
          items.map(series => (
            <Fragment key={series.id}>
              <Item series={series} />
            </Fragment>
          ))}
      </Fragment>
    )}
  </Container>
);

export default SeriesList;
