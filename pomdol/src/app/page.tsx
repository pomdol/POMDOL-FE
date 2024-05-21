'use client';

import { GlobalStyle } from '@/styles/globalStyle';
import { darkTheme } from '@/styles/theme';
import { ThemeProvider, styled } from 'styled-components';

export default function Home() {
  return (
    <ThemeProvider theme={darkTheme('desktop')}>
      <GlobalStyle />
    </ThemeProvider>
  );
}
