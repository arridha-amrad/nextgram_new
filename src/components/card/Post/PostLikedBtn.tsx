'use client';

import { likePost as like } from '@/actions/server/post';
import { IPost } from '@/lib/mongoose/models/Post/types';
import usePostsStore from '@/lib/zustand/store/postStore';
import HeartIcon from '@heroicons/react/24/outline/HeartIcon';
import HeartIconSolid from '@heroicons/react/24/solid/HeartIcon';
import { useParams } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  post: IPost;
};

const PostLikedButton = ({ post }: Props) => {
  const { isLiked, id } = post;
  const { likePost } = usePostsStore();
  const param = useParams();

  const liked = async () => {
    if (param.postId) {
      likePost();
    } else {
      likePost(id);
    }
    await like(id);
  };
  const ref = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (isLiked) {
      ref.current?.classList.add('scale-125');
      setTimeout(() => {
        ref.current?.classList.remove('scale-125');
      }, 300);
    }
  }, [isLiked]);
  return (
    <button
      ref={ref}
      className={twMerge('transition-all duration-250 ease-linear', 'group')}
      onClick={liked}
    >
      {isLiked ? (
        <HeartIconSolid title="Disliked" className="w-7 h-7 text-pink-600" />
      ) : (
        <HeartIcon
          title="Liked"
          className="w-7 h-7 group-hover:stroke-gray-500 transition-colors duration-250 ease-linear"
        />
      )}
    </button>
  );
};

export default PostLikedButton;
