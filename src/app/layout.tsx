'use client';

import { ThemeProvider } from 'styled-components';
import { ReactNode } from 'react';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';
import { Nunito } from 'next/font/google';
import { Header } from './components/PageBody/Header';
import { Footer } from './components/PageBody/Footer';
import { usePathname } from 'next/navigation';
import Head from 'next/head';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700', '800', '900'],
  variable: '--font-nunito',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hideFooter = pathname?.startsWith('/store/') && pathname.endsWith('/cart');

  return (
    <html lang="pt-BR" className={nunito.variable}>
      <Head>
        <title>Ai que Fome</title>
      </Head>
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          <main>{children}</main>
          {!hideFooter && <Footer />}
        </ThemeProvider>
      </body>
    </html>
  );
}
