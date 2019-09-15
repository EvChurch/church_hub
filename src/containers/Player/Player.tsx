import { useQuery } from '@apollo/react-hooks';
import React, { FC } from 'react';
import Player from '../../components/Player';
import PlayerQuery from './playerQuery.gql';
import { playerQuery } from './types/playerQuery';

const PlayerContainer: FC = () => {
  const { loading, error, data } = useQuery<playerQuery>(PlayerQuery);
  console.log(data);
  return <Player loading={loading} error={error} data={data}></Player>;
};

export default PlayerContainer;
