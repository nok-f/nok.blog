import React from 'react';

const START_YEAR = 2024;

const Footer: React.FC = () => {
  const now = new Date().getFullYear();
  const year = START_YEAR === now ? START_YEAR : `${START_YEAR} - ${now}`;

  return (
    <footer className="text-center py-4 font-mono">
      <p className="text-sm">(c) {year} Nok</p>
    </footer>
  );
};

export default Footer;
