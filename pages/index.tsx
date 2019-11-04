import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Home from '../src/containers/Home';

const IndexPage: NextPage = () => (
  <>
    <Head>
      <title>Home | Auckland Ev</title>
    </Head>
    <Home></Home>
  </>
);

export default IndexPage;
