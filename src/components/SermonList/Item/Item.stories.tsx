import { storiesOf } from '@storybook/react';
import React, { ReactElement } from 'react';
import uuid from 'uuid/v4';
import Item from './Item';

const sermon = {
  id: uuid(),
  name: 'The Real Thing',
  publishedAt: null,
  authors: [],
};

storiesOf('SeriesItem', module)
  .add('default', (): ReactElement => <Item sermon={sermon} />)
  .add('loading', (): ReactElement => <Item loading={true} />);
