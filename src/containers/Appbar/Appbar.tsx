import { useQuery } from '@apollo/react-hooks';
import React, { FC } from 'react';
import Appbar from '../../components/Appbar';
import AppbarQuery from './appbarQuery.gql';
import { appbarQuery } from './types/appbarQuery';

const AppbarContainer: FC = () => {
  const { data } = useQuery<appbarQuery>(AppbarQuery);
  return <Appbar data={data}></Appbar>;
};

export default AppbarContainer;
