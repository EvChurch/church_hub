import { ApolloProvider } from '@apollo/react-hooks';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { ApolloClient, NormalizedCacheObject } from 'apollo-boost';
import App from 'next/app';
import Head from 'next/head';
import React, { ReactElement } from 'react';
import TagManager from 'react-gtm-module';
import Wrapper from '../src/components/Wrapper';
import withApollo from '../src/lib/withApollo';
import '../src/styles/index.scss';
import theme from '../src/util/theme';

const tagManagerArgs = {
  gtmId: 'GTM-K2W6V68',
};

class MyApp extends App<{ apollo: ApolloClient<NormalizedCacheObject> }> {
  public componentDidMount(): void {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
    TagManager.initialize(tagManagerArgs);
  }

  public render(): ReactElement {
    const { Component, pageProps, apollo } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <Head>
          <title>Auckland Ev</title>
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);
