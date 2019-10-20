import { storiesOf } from '@storybook/react';
import React, { ReactElement } from 'react';
import uuid from 'uuid/v4';
import MailChimpForm from './MailChimpForm';

storiesOf('MailChimpForm', module).add(
  'default',
  (): ReactElement => <MailChimpForm content="" userId={uuid()} audienceId={uuid()} />,
);
