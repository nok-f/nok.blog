import { defineDocumentType, makeSource } from 'contentlayer/source-files';

import RehypeCodeTitles from 'rehype-code-titles';
import RehypePrettyCode from 'rehype-pretty-code';
import RehypeRaw from 'rehype-raw';
import RehypeMathJax from 'rehype-mathjax';
import RemarkGfm from 'remark-gfm';
import RemarkMath from 'remark-math';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    basename: { type: 'string', required: true },
    categories: { type: 'list', default: [], of: { type: 'string' } },
  },
}));

export default makeSource({
  contentDirPath: './contents',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [RemarkGfm, RemarkMath],
    rehypePlugins: [
      RehypeMathJax,
      [
        RehypeRaw,
        {
          passThrough: ['mdxjsEsm', 'mdxJsxTextElement', 'mdxJsxFlowElement', 'mdxTextExpression'],
        },
      ],
      [
        RehypeCodeTitles,
        {
          titleSeparator: ':',
        },
      ],
      [
        RehypePrettyCode,
        {
          theme: 'dark-plus',
        },
      ],
    ],
  },
});
