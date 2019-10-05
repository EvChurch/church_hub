import { storiesOf } from '@storybook/react';
import React, { ReactElement } from 'react';
import uuid from 'uuid/v4';
import EventList from './EventList';
const event = {
  id: uuid(),
  name: 'The Real Thing',
  bannerUrl: null,
  snippet: 'hello',
};

storiesOf('EventList', module)
  .add(
    'default',
    (): ReactElement => {
      return <EventList items={[event, event]} />;
    },
  )
  .add(
    'loading',
    (): ReactElement => {
      return <EventList loading={true} />;
    },
  );
