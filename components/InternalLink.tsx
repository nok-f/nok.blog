import React from 'react';
import Link from 'next/link';

import { cls } from 'lib/cls';

type Props = {
  href: string;
  prefetch?: boolean;
  className?: string;
  children: React.ReactNode;
};

const InternalLink: React.FC<Props> = ({ className, href, children, prefetch }) => {
  return (
    <Link prefetch={prefetch ? true : false} className={cls(className)} href={href}>
      {children}
    </Link>
  );
};

export default InternalLink;
