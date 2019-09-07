import { ServerStyleSheets } from '@material-ui/styles';
import Document, { Head, Main, NextScript } from 'next/document';
import React, { Fragment, ReactElement } from 'react';
import theme from '../src/util/theme';

class MyDocument extends Document {
  public render(): ReactElement {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVrIUhXZuOSyhhAd7O4mXrHFfr565_Xvs&amp;libraries=places" />
          <script
            async
            defer
            crossOrigin="anonymous"
            src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v4.0&appId=524321138374879&autoLogAppEvents=1"
          />
          <link rel="manifest" href="/static/manifest.json" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <link rel="apple-touch-icon" href="/static/images/icon.png" />
        </Head>
        <body>
          <div id="fb-root" />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      <Fragment key="styles">
        {initialProps.styles}
        {sheets.getStyleElement()}
      </Fragment>,
    ],
  };
};

export default MyDocument;
