import { ReactNode } from 'react';
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

export default function RootLayout({ children }: Props) {
  return (
    <html lang="jp">
      <body>
        <Container>
          <Header>
            <ul className="flex flex-grow w-full flex-wrap gap-x-4 gap-y-2 mb-8">
              <li>Home</li>
              <li>Blogs</li>
              <li>Tags</li>
            </ul>
          </Header>
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
