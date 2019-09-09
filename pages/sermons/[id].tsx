import { useRouter } from 'next/router';
import React, { FC } from 'react';
import Sermon from '../../src/containers/Sermon/Sermon';

const SermonPage: FC = () => {
  const router = useRouter();

  return <Sermon id={router.query.id as string}></Sermon>;
};

export default SermonPage;
