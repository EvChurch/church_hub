import { storiesOf } from '@storybook/react';
import React, { ReactElement } from 'react';
import uuid from 'uuid/v4';
import Item from './Item';

const series = {
  id: uuid(),
  name: 'The Real Thing',
  bannerUrl: null,
};

storiesOf('SeriesItem', module)
  .add('default', (): ReactElement => <Item series={series} />)
  .add('loading', (): ReactElement => <Item loading={true} />);
