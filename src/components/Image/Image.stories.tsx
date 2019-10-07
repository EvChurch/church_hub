import { storiesOf } from '@storybook/react';
import React, { ReactElement } from 'react';
import Image from './Image';

storiesOf('Image', module).add('default', (): ReactElement => <Image src="/static/images/connect.jpg" />);
