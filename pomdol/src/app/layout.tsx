import CustomThemeProvider from './_components/CustomThemeProvider';
import { WindowSizeProvider } from './_context/WindowSizeContext';
import StyledComponentsRegistry from './_lib/registry';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <WindowSizeProvider>
          <StyledComponentsRegistry>
            <CustomThemeProvider>{children}</CustomThemeProvider>
          </StyledComponentsRegistry>
        </WindowSizeProvider>
      </body>
    </html>
  );
}
