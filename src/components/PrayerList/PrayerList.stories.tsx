import { storiesOf } from '@storybook/react';
import React, { ReactElement } from 'react';
import uuid from 'uuid/v4';
import PrayerList from './PrayerList';
const prayer = {
  id: uuid(),
  name: 'The Real Thing',
  bannerUrl: null,
  snippet: 'hello',
};

storiesOf('PrayerList', module)
  .add(
    'default',
    (): ReactElement => {
      return <PrayerList items={[prayer, prayer]} />;
    },
  )
  .add(
    'loading',
    (): ReactElement => {
      return <PrayerList loading={true} />;
    },
  );
