'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { usePathname } from 'next/navigation';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';
import { Header } from './components/PageBody/Header';
import { Footer } from './components/PageBody/Footer';

export default function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hideFooter = pathname?.startsWith('/store/') && pathname.endsWith('/cart');

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      {!hideFooter && <Footer />}
    </ThemeProvider>
  );
}
