import { storiesOf } from '@storybook/react';
import React, { ReactElement } from 'react';
import uuid from 'uuid/v4';
import ElvantoForm from './ElvantoForm';

storiesOf('Step', module).add('default', (): ReactElement => <ElvantoForm content="" id={uuid()} />);
