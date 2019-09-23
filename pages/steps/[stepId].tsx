import { useRouter } from 'next/router';
import React, { FC } from 'react';
import StepContainer from '../../src/containers/Step';

const StepPage: FC = () => {
  const router = useRouter();

  return <StepContainer id={router.query.stepId as string}></StepContainer>;
};

export default StepPage;
