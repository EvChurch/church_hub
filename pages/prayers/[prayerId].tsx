import { useRouter } from 'next/router';
import React, { FC } from 'react';
import PrayerContainer from '../../src/containers/Prayer';

const PrayerPage: FC = () => {
  const router = useRouter();

  return <PrayerContainer id={router.query.prayerId as string}></PrayerContainer>;
};

export default PrayerPage;
