import React, { FC } from 'react';
import Sermons from '../src/containers/Sermons/Sermons';
import { withApollo } from '../src/lib/apollo';

const SermonsPage: FC = () => <Sermons></Sermons>;

export default withApollo(SermonsPage);
