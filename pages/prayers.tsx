import Head from 'next/head';
import React, { FC, Fragment } from 'react';
import PrayerList from '../src/containers/PrayerList';

const PrayersPage: FC = () => (
  <Fragment>
    <Head>
      <title>Prayer | Auckland Ev</title>
    </Head>
    <PrayerList />
  </Fragment>
);

export default PrayersPage;
