import { NextPage } from 'next';
import Router from 'next/router';
import React, { Fragment } from 'react';

const IndexPage: NextPage = () => <Fragment></Fragment>;

IndexPage.getInitialProps = ({ res }) => {
  if (res) {
    res.writeHead(302, {
      Location: '/series',
    });
    res.end();
  } else {
    Router.push('/series');
  }
  return Promise.resolve({});
};

export default IndexPage;
