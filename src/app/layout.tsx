import type { ReactNode } from 'react';
import ClientLayout from './ClientLayout';

export const metadata = {
  title: { default: 'Ai que Fome', template: '%s | Ai que Fome' },
  description: 'Delivery de comida com fome',
  icons: {
    icon: [
      { url: '/favicon.ico', media: '(prefers-color-scheme: light)' },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <ClientLayout>{children}</ClientLayout>
    </html>
  );
}
