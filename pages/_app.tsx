import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import React from 'react';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>SD60 - Money Streams</title>
        <meta name="description" content="Visualize money spent - and learn next.js" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
