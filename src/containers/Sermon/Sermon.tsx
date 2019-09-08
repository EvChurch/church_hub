import { useQuery } from '@apollo/react-hooks';
import React, { FC } from 'react';
import Sermon from '../../components/Sermon';
import SermonQuery from './sermonQuery.gql';
import { sermonQuery } from './types/sermonQuery';

interface Props {
  id: string;
}

const SermonContainer: FC<Props> = ({ id }) => {
  const { loading, error, data } = useQuery<sermonQuery>(SermonQuery, {
    variables: { ids: [id] },
  });

  return <Sermon loading={loading} error={error} data={data}></Sermon>;
};

export default SermonContainer;
