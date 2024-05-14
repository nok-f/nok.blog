import React from 'react';
import { format } from 'date-fns';
import { allPosts } from 'contentlayer/generated';

import InternalLink from 'components/InternalLink';

type Post = {
  title: string;
  date: string;
  basename: string;
};

type PathParams = {
  params: {
    slug: string;
  };
};

type PageProps = {
  category: string;
  posts: Post[];
};

async function getPostsByCategory({ params }: PathParams): Promise<PageProps> {
  const posts = allPosts
    .filter((post) => params && post.categories.includes(params.slug))
    .map((post) => {
      return {
        title: post.title,
        date: format(post.date, 'yyyy/MM/dd'),
        basename: post.basename,
      };
    })
    .reverse();

  return {
    posts,
    category: params.slug ?? '',
  };
}

async function CategoryLayout(params: PathParams) {
  const { posts, category } = await getPostsByCategory(params);
  return (
    <>
      <h2 className="mt-2 mb-4 text-3xl font-bold">
        カテゴリー: {category} ({posts.length})
      </h2>
      {posts.map((post) => {
        return (
          <div key={post.basename} className="mt-2 mb-12">
            {post.date}
            <InternalLink href={`/posts/${post.title}`}>
              <h2 className="mt-1 text-xl">{post.title}</h2>
            </InternalLink>
          </div>
        );
      })}
    </>
  );
}

export default CategoryLayout;
