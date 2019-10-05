import { storiesOf } from '@storybook/react';
import React, { ReactElement } from 'react';
import uuid from 'uuid/v4';
import Event from './Event';

const event = {
  id: uuid(),
  name: 'The Real Thing',
  snippet:
    'We have this kind of high priest, who sat down at the right hand of the throne of the Majesty in the heavens, a minister of the sanctuary and the true tabernacle that was set up by the Lord and not man.',
  content: '',
  bannerUrl: null,
};

storiesOf('Event', module)
  .add('default', (): ReactElement => <Event event={event} />)
  .add('loading', (): ReactElement => <Event loading={true} />);
