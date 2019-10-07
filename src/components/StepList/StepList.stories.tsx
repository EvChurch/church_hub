import { storiesOf } from '@storybook/react';
import React, { ReactElement } from 'react';
import uuid from 'uuid/v4';
import StepList from './StepList';
const step = {
  id: uuid(),
  name: 'The Real Thing',
  bannerUrl: null,
  snippet: '',
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
  )
  .add(
    'connect',
    (): ReactElement => {
      return <StepList loading={false} postForm={true} />;
    },
  );
