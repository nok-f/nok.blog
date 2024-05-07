import { format } from 'date-fns';
import { allPosts } from 'contentlayer/generated';

import Post from '../../../components/Post';

const PostLayout = ({ params }: { params: { slug: string } }) => {
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
