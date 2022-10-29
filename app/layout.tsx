import '../styles/globals.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Head</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
