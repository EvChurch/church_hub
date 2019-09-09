import { useRouter } from 'next/router';
import React, { FC } from 'react';
import SeriesContainer from '../../src/containers/Series';

const SeriesPage: FC = () => {
  const router = useRouter();

  return <SeriesContainer id={router.query.seriesId as string}></SeriesContainer>;
};

export default SeriesPage;
