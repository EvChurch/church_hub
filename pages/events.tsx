import Head from 'next/head';
import React, { FC, Fragment } from 'react';
import EventList from '../src/containers/EventList/EventList';

const EventsPage: FC = () => (
  <Fragment>
    <Head>
      <title>Events | Auckland Ev</title>
    </Head>
    <EventList />
  </Fragment>
);

export default EventsPage;
