import '../styles/globals.css';

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
      <body>{children}</body>
    </html>
  );
}
