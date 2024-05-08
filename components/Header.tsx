import React from 'react';

import { cls } from './../lib/cls';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Header: React.FC<Props> = ({ children, className }) => {
  return <div className={cls('block pt-2', className)}>{children}</div>;
};

export default Header;
