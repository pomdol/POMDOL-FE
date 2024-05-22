'use client';

import { GlobalStyle } from './_styles/globalStyle';
import { darkTheme } from './_styles/theme';
import { ThemeProvider, styled } from 'styled-components';

const Main = styled.main`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.bg1};
`;

export default function Home() {
  return (
    <ThemeProvider theme={darkTheme('desktop')}>
      <GlobalStyle />
      <Main>TEST</Main>
    </ThemeProvider>
  );
}
