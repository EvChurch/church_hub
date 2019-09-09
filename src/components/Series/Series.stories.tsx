import { storiesOf } from '@storybook/react';
import React, { ReactElement } from 'react';
import uuid from 'uuid/v4';
import SeriesCard from './Series';

const series = {
  id: uuid(),
  name: 'The Real Thing',
  bannerUrl: null,
  resources: { nodes: [] },
};

storiesOf('Series', module)
  .add('default', (): ReactElement => <SeriesCard series={series} />)
  .add('loading', (): ReactElement => <SeriesCard loading={true} />);
