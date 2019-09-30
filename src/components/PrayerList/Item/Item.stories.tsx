import { storiesOf } from '@storybook/react';
import React, { ReactElement } from 'react';
import uuid from 'uuid/v4';
import Item from './Item';

const prayer = {
  id: uuid(),
  name: 'The Real Thing',
  bannerUrl: null,
  snippet: 'hello',
};

storiesOf('PrayerItem', module)
  .add('default', (): ReactElement => <Item prayer={prayer} />)
  .add('loading', (): ReactElement => <Item loading={true} />);
