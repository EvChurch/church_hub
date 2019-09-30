import dynamic from 'next/dynamic';
import Head from 'next/head';
import React, { FC, Fragment } from 'react';
import Connect from '../src/containers/Connect';

const ConnectPage: FC = () => (
  <Fragment>
    <Head>
      <title>Connect | Auckland Ev</title>
    </Head>
    <Connect />
  </Fragment>
);

export default dynamic(() => Promise.resolve(ConnectPage), { ssr: false });
