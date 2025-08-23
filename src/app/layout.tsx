import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Exhibition Navigation App</title>
        <meta
          name="description"
          content="Thurstan College Exhibition Navigation App"
        />
      </head>
      <body suppressHydrationWarning>
        <main id="__next_root">{children}</main>
      </body>
    </html>
  );
}
