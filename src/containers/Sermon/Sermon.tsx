import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { get } from 'lodash/fp';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import Sermon from '../../components/Sermon';
import SermonQuery from './sermonQuery.gql';
import { sermonQuery, sermonQuery_resources_nodes as sermonQueryResourcesNodes } from './types/sermonQuery';

interface Props {
  id: string;
}

const SermonContainer: FC<Props> = ({ id }) => {
  const router = useRouter();
  const client = useApolloClient();
  const { loading, data } = useQuery<sermonQuery>(SermonQuery, {
    variables: { ids: [id] },
  });
  const onListenClick = (sermon: sermonQueryResourcesNodes): void => {
    client.writeData({ data: { activeSermon: sermon } });
  };
  client.writeData({
    data: {
      activeRoute: {
        __typename: 'Route',
        name: get('resources.nodes[0].name', data) || '',
        parentHref: '/series/[seriesId]',
        parentAs: `/series/${router.query.seriesId}`,
      },
    },
  });
  const sermon = get('resources.nodes[0]', data);

  return <Sermon onListenClick={onListenClick} loading={loading} sermon={sermon}></Sermon>;
};

export default SermonContainer;
