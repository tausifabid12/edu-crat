import '@/styles/globals.css';
import 'swiper/css';
import 'swiper/css/pagination';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import theme from '@/theme';
import { CssBaseline } from '@mui/material';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}

// highlight: { main: '#00ff84' },
// secondary: { main: '#6440fb' },
// primaryLight: { main: '#1a064f' },
