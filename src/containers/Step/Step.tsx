import { useQuery } from '@apollo/react-hooks';
import { get } from 'lodash/fp';
import React, { FC } from 'react';
import Step from '../../components/Step';
import StepQuery from './stepQuery.gql';
import { stepQuery } from './types/stepQuery';

interface Props {
  id: string;
}

const StepContainer: FC<Props> = ({ id }) => {
  const { loading, data } = useQuery<stepQuery>(StepQuery, {
    variables: { ids: [id] },
  });
  const step = get('steps.nodes[0]', data);

  return <Step loading={loading} step={step}></Step>;
};

export default StepContainer;
