import { useQuery } from '@apollo/react-hooks';
import { get } from 'lodash/fp';
import React, { FC } from 'react';
import StepList from '../../components/StepList';
import StepListQuery from './StepListQuery.gql';
import { stepListQuery } from './types/stepListQuery';

const StepListContainer: FC = () => {
  const { loading, data } = useQuery<stepListQuery>(StepListQuery);
  if (loading) {
    return <StepList loading={loading}></StepList>;
  } else {
    const items = get('steps.nodes', data);
    return <StepList items={items}></StepList>;
  }
};

export default StepListContainer;
