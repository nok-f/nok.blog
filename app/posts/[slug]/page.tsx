import { format } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

import Post from '../../../components/Post';

type PathParams = {
  params: {
    slug: string;
  };
};

const PostLayout = ({ params }: PathParams) => {
  const post = allPosts.find((post) => post.basename === params.slug);
  if (!post) notFound();

  return (
    <div>
      <Post
        title={post.title}
        date={format(post.date, 'yyyy/MM/dd')}
        categories={post.categories}
        content={post.body.code}
      />
    </div>
  );
};

export default PostLayout;
