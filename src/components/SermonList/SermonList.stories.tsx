import { storiesOf } from '@storybook/react';
import React, { ReactElement } from 'react';
import uuid from 'uuid/v4';
import SeriesList from './SermonList';
const series = {
  id: uuid(),
  name: 'The Real Thing',
  bannerUrl: null,
  publishedAt: null,
  authors: [],
};

storiesOf('SeriesList', module)
  .add(
    'default',
    (): ReactElement => {
      return <SeriesList items={[series, series]} />;
    },
  )
  .add(
    'loading',
    (): ReactElement => {
      return <SeriesList loading={true} />;
    },
  );
