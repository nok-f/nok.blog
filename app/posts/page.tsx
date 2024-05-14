import React from 'react';
import { format } from 'date-fns';
import { allPosts } from 'contentlayer/generated';

import InternalLink from 'components/InternalLink';

const PostLayout: React.FC = () => {
  const posts = allPosts.reverse();
  return (
    <>
      <h2 className="mt-2 mb-4 text-3xl font-bold">投稿一覧:</h2>
      {posts.map((post) => {
        return (
          <div key={post.basename} className="mt-2 mb-12">
            {format(post.date, 'yy/MM/dd')}
            <InternalLink href={`/posts/${post.basename}`}>
              <h2 className="mt-1 text-xl">{post.title}</h2>
            </InternalLink>
          </div>
        );
      })}
    </>
  );
};

export default PostLayout;
