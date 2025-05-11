import { ReactNode } from 'react';
import { Nunito } from 'next/font/google';
import StyledComponentsRegistry from './StyledComponentsRegistry';
import ClientLayout from './ClientLayout';
import Head from 'next/head';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700', '800', '900'],
  variable: '--font-nunito',
});
export const metadata = {
  title: 'Ai que Fome',
  description: 'Delivery rápido e gostoso direto do seu restaurante favorito',
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={nunito.variable}>
      <Head>
        <title>Ai que Fome</title>
      </Head>
      <body>
        <StyledComponentsRegistry>
          <ClientLayout>{children}</ClientLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
