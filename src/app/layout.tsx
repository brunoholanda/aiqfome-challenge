'use client';

import { ThemeProvider } from 'styled-components';
import { ReactNode } from 'react';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
