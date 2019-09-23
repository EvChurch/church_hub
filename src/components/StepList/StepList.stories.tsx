import { storiesOf } from '@storybook/react';
import React, { ReactElement } from 'react';
import uuid from 'uuid/v4';
import StepList from './StepList';
const step = {
  id: uuid(),
  name: 'The Real Thing',
  bannerUrl: null,
};

storiesOf('StepList', module)
  .add(
    'default',
    (): ReactElement => {
      return <StepList items={[step, step]} />;
    },
  )
  .add(
    'loading',
    (): ReactElement => {
      return <StepList loading={true} />;
    },
  );
