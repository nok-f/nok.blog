import React from 'react';

import { cls } from './../lib/cls';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={cls(
        'max-w-3xl px-10 py-0.5 m-auto h-full bg-teal-100 border border-solid rounded border-teal-400',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
