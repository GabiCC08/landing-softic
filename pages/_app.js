import * as React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../styles/theme';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
