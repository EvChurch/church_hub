import { useRouter } from 'next/router';
import React, { FC } from 'react';
import EventContainer from '../../src/containers/Event';

const EventPage: FC = () => {
  const router = useRouter();

  return <EventContainer id={router.query.eventId as string}></EventContainer>;
};

export default EventPage;
