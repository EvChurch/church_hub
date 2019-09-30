import { storiesOf } from '@storybook/react';
import React, { ReactElement } from 'react';
import uuid from 'uuid/v4';
import Prayer from './Prayer';

const prayer = {
  id: uuid(),
  name: 'The Real Thing',
  snippet:
    'We have this kind of high priest, who sat down at the right hand of the throne of the Majesty in the heavens, a minister of the sanctuary and the true tabernacle that was set up by the Lord and not man.',
  content: '',
  bannerUrl: null,
};

storiesOf('Prayer', module)
  .add('default', (): ReactElement => <Prayer prayer={prayer} />)
  .add('loading', (): ReactElement => <Prayer loading={true} />);
