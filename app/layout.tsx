import React from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono as GeistMono } from 'next/font/google';
import './globals.css';
import RootProvider from './providers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = GeistMono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Nextjs Core',
  description: 'Nextjs Core by Tinasoft',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
