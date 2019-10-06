import { storiesOf } from '@storybook/react';
import React, { ReactElement } from 'react';
import uuid from 'uuid/v4';
import Image from './Image';

const image = {
  id: uuid(),
  name: 'The Real Thing',
  snippet:
    'We have this kind of high priest, who sat down at the right hand of the throne of the Majesty in the heavens, a minister of the sanctuary and the true tabernacle that was set up by the Lord and not man.',
  content: '',
  audioUrl: null,
  youtubeUrl: null,
  bannerUrl: null,
  authors: [],
  connectionScriptures: [],
  topics: [],
};

storiesOf('Image', module)
  .add('default', (): ReactElement => <Image image={image} />)
  .add('loading', (): ReactElement => <Image loading={true} />);
