'use client';

import { GlobalStyle } from './_styles/globalStyle';
import { darkTheme } from './_styles/theme';
import { ThemeProvider, styled } from 'styled-components';

export default function Home() {
  return (
    <ThemeProvider theme={darkTheme('desktop')}>
      <GlobalStyle />
    </ThemeProvider>
  );
}
