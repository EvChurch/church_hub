import { useQuery } from '@apollo/react-hooks';
import React, { FC } from 'react';
import Sermons from '../../components/Sermons';
import SermonsQuery from './sermonsQuery.gql';
import { sermonsQuery } from './types/sermonsQuery';

const SermonsContainer: FC = () => {
  const { loading, error, data } = useQuery<sermonsQuery>(SermonsQuery);

  return <Sermons loading={loading} error={error} data={data}></Sermons>;
};

export default SermonsContainer;
