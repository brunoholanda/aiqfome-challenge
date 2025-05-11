export const metadata = {
  title: 'Ai que Fome',
  description: 'Delivery rápido e gostoso direto do seu restaurante favorito',
};

import ThemeRegistry from './theme-provider';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <ThemeRegistry>{children}</ThemeRegistry>
    </html>
  );
}
