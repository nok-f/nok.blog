import React from 'react';

import { useMDXComponent } from 'next-contentlayer/hooks';

type Props = {
  markdown: string;
};

const Markdown: React.FC<Props> = ({ markdown }) => {
  const Component = useMDXComponent(markdown);
  return <Component />;
};

export default Markdown;
