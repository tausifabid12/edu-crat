import '@/styles/globals.css';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/editor-styles.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import theme from '@/theme';
import { CssBaseline } from '@mui/material';
import { Toaster } from 'react-hot-toast';
import AuthProvider from '../../contexts/AuthProvider';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <ApolloProvider client={client}>
            <Component {...pageProps} />
            <CssBaseline />
            <Toaster position="top-center" reverseOrder={false} />
          </ApolloProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}
