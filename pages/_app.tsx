import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Auth0Provider } from '@auth0/auth0-react';
import { theme } from '../styles/theme';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_DOMAIN!}
      clientId={process.env.NEXT_PUBLIC_CLIENT_ID!}
      redirectUri={process.env.NEXT_PUBLIC_REDIRECT_URL!}
      audience={process.env.NEXT_PUBLIC_AUDIENCE!}
      scope={process.env.NEXT_PUBLIC_SCOPE!}
    >
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
    </Auth0Provider>
  );
}

export default MyApp;
