import dynamic from 'next/dynamic';
import React, { FC } from 'react';
import Connect from '../src/containers/Connect';

const ConnectPage: FC = () => <Connect />;

export default dynamic(() => Promise.resolve(ConnectPage), { ssr: false });
