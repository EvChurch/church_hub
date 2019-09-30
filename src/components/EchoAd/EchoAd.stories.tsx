import { storiesOf } from '@storybook/react';
import React, { ReactElement } from 'react';
import EchoAd from './EchoAd';

storiesOf('EchoAd', module).add('default', (): ReactElement => <EchoAd />);
