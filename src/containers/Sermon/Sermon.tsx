import { useApolloClient, useQuery } from '@apollo/react-hooks';
import React, { FC } from 'react';
import Sermon from '../../components/Sermon';
import SermonQuery from './sermonQuery.gql';
import { sermonQuery, sermonQuery_resources_nodes as sermonQueryResourcesNodes } from './types/sermonQuery';

interface Props {
  id: string;
}

const SermonContainer: FC<Props> = ({ id }) => {
  const client = useApolloClient();
  const { loading, error, data } = useQuery<sermonQuery>(SermonQuery, {
    variables: { ids: [id] },
  });

  const onListenClick = (sermon: sermonQueryResourcesNodes): void => {
    client.writeData({ data: { activeSermon: sermon } });
  };

  return <Sermon onListenClick={onListenClick} loading={loading} error={error} data={data}></Sermon>;
};

export default SermonContainer;
