'use client';

import { GlobalStyle } from '@/app/_styles/globalStyle';
import { lightTheme } from '@/app/_styles/theme';
import { ThemeProvider } from 'styled-components';
import Link from 'next/link';

export default function Home() {
  return (
    <ThemeProvider theme={lightTheme('desktop')}>
      <GlobalStyle />
      <Link href="/user/login"></Link>
    </ThemeProvider>
  );
}
