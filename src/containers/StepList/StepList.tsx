import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { get } from 'lodash/fp';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import StepList from '../../components/StepList';
import StepListQuery from './StepListQuery.gql';
import { stepListQuery } from './types/stepListQuery';

const StepListContainer: FC = () => {
  const router = useRouter();
  const client = useApolloClient();
  const { loading, data } = useQuery<stepListQuery>(StepListQuery);
  const postForm = get('query.postForm', router) === '';
  client.writeData({
    data: { activeRoute: { __typename: 'Route', name: 'Discover', parentHref: null, parentAs: null } },
  });
  if (loading) {
    return <StepList loading={loading} postForm={postForm}></StepList>;
  } else {
    const items = get('steps.nodes', data);
    return <StepList items={items} postForm={postForm}></StepList>;
  }
};

export default StepListContainer;
