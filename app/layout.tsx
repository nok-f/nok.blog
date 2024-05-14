import React, { ReactNode } from 'react';
import { Metadata } from 'next';

import Container from 'components/Container';
import Header from 'components/Header';
import Footer from 'components/Footer';

import './../styles/globals.css';

export const metadata: Metadata = {
  title: 'さびメモ',
};

type Props = {
  children: ReactNode;
};

const RootLayout: React.FC<Props> = ({ children }: Props) => {
  return (
    <html lang="jp">
      <body>
        <Container>
          <Header>
            <ul className="flex flex-grow w-full flex-wrap gap-x-4 gap-y-2 mb-8 font-mono font-bold">
              <li>Home</li>
              <li>Posts</li>
              <li>Categories</li>
            </ul>
          </Header>
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
};

export default RootLayout;
