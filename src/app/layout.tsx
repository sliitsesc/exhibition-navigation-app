"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MobileNavBar from "../components/MobileNavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body>
        
        <MobileNavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
