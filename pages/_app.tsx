import React, { ReactElement, Fragment } from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/util/theme';
import Wrapper from '../src/components/Wrapper';

class MyApp extends App {
  public componentDidMount(): void {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  public render(): ReactElement {
    const { Component, pageProps } = this.props;

    return (
      <Fragment>
        <Head>
          <title>Auckland Ev</title>
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
        </ThemeProvider>
      </Fragment>
    );
  }
}

export default MyApp;
