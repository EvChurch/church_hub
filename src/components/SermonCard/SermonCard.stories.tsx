import { storiesOf } from '@storybook/react';
import React, { ReactElement } from 'react';
import uuid from 'uuid/v4';
import { sermonsQuery_resources_nodes as sermonsQueryResourcesNodes } from '../../containers/Sermons/types/sermonsQuery';
import SermonCard from './SermonCard';

const sermon: sermonsQueryResourcesNodes = {
  __typename: 'Resource',
  id: uuid(),
  name: 'The Real Thing',
  snippet:
    'We have this kind of high priest, who sat down at the right hand of the throne of the Majesty in the heavens, a minister of the sanctuary and the true tabernacle that was set up by the Lord and not man.',
  bannerUrl: null,
  authors: [],
  scriptures: [],
  topics: [],
};

storiesOf('SermonCard', module)
  .add('default', (): ReactElement => <SermonCard sermon={sermon} />)
  .add('loading', (): ReactElement => <SermonCard loading={true} />);
