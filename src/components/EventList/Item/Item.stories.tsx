import { storiesOf } from '@storybook/react';
import React, { ReactElement } from 'react';
import uuid from 'uuid/v4';
import Item from './Item';

const event = {
  id: uuid(),
  name: 'The Real Thing',
  bannerUrl: null,
  snippet: 'hello',
};

storiesOf('EventItem', module)
  .add('default', (): ReactElement => <Item event={event} />)
  .add('loading', (): ReactElement => <Item loading={true} />);
