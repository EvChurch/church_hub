import Head from 'next/head';
import React, { FC, Fragment } from 'react';
import SeriesList from '../src/containers/SeriesList';

const SeriesPage: FC = () => (
  <Fragment>
    <Head>
      <title>Sermon Series | Auckland Ev</title>
    </Head>
    <SeriesList />
  </Fragment>
);

export default SeriesPage;
