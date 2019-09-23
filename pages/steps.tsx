import Head from 'next/head';
import React, { FC, Fragment } from 'react';
import StepList from '../src/containers/StepList';

const StepsPage: FC = () => (
  <Fragment>
    <Head>
      <title>Discover | Auckland Ev</title>
    </Head>
    <StepList />
  </Fragment>
);

export default StepsPage;
