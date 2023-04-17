'use client';

import '../styles/globals.css';
import Providers from './providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Saleor 3d Store</title>
      </head>
      <Providers>
        <body>{children}</body>
      </Providers>
    </html>
  );
}
