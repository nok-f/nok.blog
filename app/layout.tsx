import React from 'react';
import { Metadata } from 'next';

import Container from './../components/Container';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'さびメモ',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
