import React from 'react';
import Markdown from './Markdown';
import InternalLink from './InternalLink';

type Props = {
  title: string;
  date: string;
  categories: string[];
  content: string;
};

const Post: React.FC<Props> = ({ title, date, categories, content }) => {
  return (
    <>
      <h2 className="my-2 text-3xl font-bold">{title}</h2>
      <hr />
      <p>{date}</p>
      <div className="flex">
        カテゴリー：
        <ul className="ml-2">
          {categories.map((category) => (
            <li key={category}>
              <InternalLink href={`/categories/${category}`}>{category}</InternalLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-5">
        <Markdown markdown={content} />
      </div>
    </>
  );
};

export default Post;
