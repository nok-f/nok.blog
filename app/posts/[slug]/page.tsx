import { format } from 'date-fns';
import { allPosts } from 'contentlayer/generated';

import Post from '../../../components/Post';

type PathParams = {
  params: {
    slug: string;
  };
};

const PostLayout = ({ params }: PathParams) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

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
