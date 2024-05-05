import React from 'react';
import { Metadata } from 'next';

import Container from './../components/Container';
import Header from './../components/Header';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'さびメモ',
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <Container>
          <Header>
            <ul className="flex flex-grow w-full flex-wrap gap-x-4 gap-y-2 mb-8">
              <li>About</li>
              <li>Blogs</li>
              <li>Tags</li>
            </ul>
          </Header>
        </Container>
      </body>
    </html>
  );
}
