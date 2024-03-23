'use client';

import { useEffect } from 'react';
import PostCard from '../card/Post/PostCard';
import usePostsStore from '@/lib/zustand/store/postStore';
import { Divider } from '@nextui-org/react';

type Props = {
  data: string;
};

const PostList = ({ data }: Props) => {
  const { setPosts, posts, setLoading, isLoading } = usePostsStore();

  useEffect(
    () => {
      setPosts(JSON.parse(data));
      setLoading(false);
    },
    // eslint-disable-next-line
    [data]
  );

  if (!!posts && isLoading) {
    return <p>loading...</p>;
  }
  return (
    <div className="space-y-4">
      {posts.map((post, i) =>
        posts.length !== i + 1 ? (
          <>
            <PostCard post={post} key={post.id} />
            <Divider />
          </>
        ) : (
          <PostCard post={post} key={post.id} />
        )
      )}
    </div>
  );
};

export default PostList;
