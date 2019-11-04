import { useQuery } from '@apollo/react-hooks';
import { Container } from '@material-ui/core';
import { get } from 'lodash/fp';
import React, { FC } from 'react';
import SermonCard from '../../components/SermonCard';
import LatestSermonQuery from './latestSermonQuery.gql';
import { latestSermonQuery } from './types/latestSermonQuery';

const LatestSermonContainer: FC = () => {
  const { loading, data } = useQuery<latestSermonQuery>(LatestSermonQuery);
  const sermon = get('resources.edges[0].node', data);

  return (
    <Container>
      <SermonCard loading={loading} sermon={sermon} />
    </Container>
  );
};

export default LatestSermonContainer;
