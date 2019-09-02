import React, { FC, Fragment } from 'react';
import NextSteps from '../src/components/Discover';
import Head from 'next/head';

const DiscoverPage: FC = () => (
  <Fragment>
    <Head>
      <title>Discover | Auckland Ev</title>
    </Head>
    <NextSteps />
  </Fragment>
);

export default DiscoverPage;
