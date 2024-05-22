import CustomThemeProvider from './_components/CustomThemeProvider';
import { WindowSizeProvider } from './_context/WindowSizeContext';
import StyledComponentsRegistry from './_lib/registry';
import NavigationBar from './_components/NavigationBar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <WindowSizeProvider>
          <StyledComponentsRegistry>
            <CustomThemeProvider>
              <NavigationBar />
              {children}
            </CustomThemeProvider>
          </StyledComponentsRegistry>
        </WindowSizeProvider>
      </body>
    </html>
  );
}
