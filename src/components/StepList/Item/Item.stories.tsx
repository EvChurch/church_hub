import { storiesOf } from '@storybook/react';
import React, { ReactElement } from 'react';
import uuid from 'uuid/v4';
import Item from './Item';

const step = {
  id: uuid(),
  name: 'The Real Thing',
  bannerUrl: null,
};

storiesOf('StepItem', module)
  .add('default', (): ReactElement => <Item step={step} />)
  .add('loading', (): ReactElement => <Item loading={true} />);
