'use client';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';
import { ReactNode } from 'react';
import { Nunito } from 'next/font/google';
import { Header } from './components/PageBody/Header';
import { Footer } from './components/PageBody/Footer';
import { usePathname } from 'next/navigation';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700', '800', '900'],
  variable: '--font-nunito',
});

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hideFooter = pathname?.startsWith('/store/') && pathname.endsWith('/cart');

  return (
    <body className={nunito.variable}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <main>{children}</main>
        {!hideFooter && <Footer />}
      </ThemeProvider>
    </body>
  );
}
