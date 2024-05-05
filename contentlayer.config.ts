import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files';

import RehypeCodeTitles from 'rehype-code-titles';
import RehypePrettyCode from 'rehype-pretty-code';
import RehypeRaw from 'rehype-raw';
import RehypeMathJax from 'rehype-mathjax';
import RemarkGfm from 'remark-gfm';
import RemarkMath from 'remark-math';

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
  },
};

export const Article = defineDocumentType(() => ({
  name: 'Article',
  filePathPattern: '**/*.md',
  contentType: 'markdown',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    basename: { type: 'string', required: true },
    categories: { type: 'list', default: [], of: { type: 'string' } },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: './contents',
  documentTypes: [Article],
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
