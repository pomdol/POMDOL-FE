'use client';

import { GlobalStyle } from '@/app/_styles/globalStyle';
import { lightTheme } from '@/app/_styles/theme';
import { ThemeProvider } from 'styled-components';

export default function CustomThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={lightTheme('desktop')}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
