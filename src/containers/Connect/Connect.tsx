import React, { FC } from 'react';
import ConnectForm from '../../components/ConnectForm';

const Connect: FC = () => {
  const loading = false;
  const onSubmit = (): void => {};

  return <ConnectForm onSubmit={onSubmit} loading={loading} />;
};

export default Connect;
