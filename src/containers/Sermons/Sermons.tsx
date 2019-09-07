import React, { FC } from 'react';
import SERMONS_QUERY from './sermonsQuery.graphql';
import { useQuery } from '@apollo/react-hooks';
import { sermonsQuery } from './types/sermonsQuery';
import { Container, Grid, Box } from '@material-ui/core';
import Sermons from '../../components/Sermons';

const SermonsContainer: FC = () => {
  const { loading, error, data } = useQuery<sermonsQuery>(SERMONS_QUERY);

  return <Sermons loading={loading} error={error} data={data}></Sermons>;
};

export default SermonsContainer;
