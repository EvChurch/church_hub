import { useRouter } from 'next/router';
import React, { FC } from 'react';
import SermonContainer from '../../../../src/containers/Sermon';

const SermonPage: FC = () => {
  const router = useRouter();

  return <SermonContainer id={router.query.sermonId as string}></SermonContainer>;
};

export default SermonPage;
