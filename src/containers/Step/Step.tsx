import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { get } from 'lodash/fp';
import React, { FC, useEffect } from 'react';
import Step from '../../components/Step';
import StepQuery from './stepQuery.gql';
import { stepQuery } from './types/stepQuery';

interface Props {
  id: string;
}

const StepContainer: FC<Props> = ({ id }) => {
  const client = useApolloClient();
  const { loading, data } = useQuery<stepQuery>(StepQuery, {
    variables: { ids: [id] },
  });
  const step = get('steps.nodes[0]', data);
  const name = get('steps.nodes[0].name', data) || '';
  useEffect(
    () =>
      client.writeData({
        data: {
          activeRoute: {
            __typename: 'Route',
            name: name,
            parentHref: '/steps',
            parentAs: '/steps',
          },
        },
      }),
    [name],
  );

  return <Step loading={loading} step={step}></Step>;
};

export default StepContainer;
