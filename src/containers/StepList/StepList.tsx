import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { get } from 'lodash/fp';
import React, { FC, useEffect } from 'react';
import StepList from '../../components/StepList';
import StepListQuery from './StepListQuery.gql';
import { stepListQuery } from './types/stepListQuery';

const StepListContainer: FC<{ featured?: boolean }> = ({ featured }) => {
  const client = useApolloClient();
  const { loading, data } = useQuery<stepListQuery>(StepListQuery, {
    variables: { featured: featured },
  });
  useEffect(
    () =>
      client.writeData({
        data: { activeRoute: { __typename: 'Route', name: 'Discover', parentHref: null, parentAs: null } },
      }),
    [],
  );
  if (loading) {
    return <StepList featured={featured} loading={loading}></StepList>;
  } else {
    const items = get('steps.nodes', data);
    return <StepList featured={featured} items={items}></StepList>;
  }
};

export default StepListContainer;
