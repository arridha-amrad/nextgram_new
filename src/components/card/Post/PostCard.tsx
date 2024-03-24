'use client';

import ImageCarousel from '@/components/carousel/ImageCarousel';
import { IPost } from '@/lib/mongoose/models/Post/types';
import { Spacer } from '@nextui-org/react';
import Link from 'next/link';
import PostCommentInput from '../../form/PostCommentForm';
import UserCardWithTime from '../UseCardWithTime';
import PostLikedButton from './PostLikedBtn';
import CommentButton from './button/CommentBtn';
import ShareButton from './button/ShareBtn';
import BookmarkButton from './button/BookmarkBtn';

type Props = {
  post: IPost;
};

export default function PostCard({ post }: Props) {
  const images = post.images.map((i) => i.url);
  const height = [...post.images].sort((a, b) => b.height - a.height)[0].height;

  return (
    <article className="w-full max-w-[468px]">
      <UserCardWithTime post={post} />
      <div style={{ height }} className="max-h-[600px] overflow-hidden rounded">
        <ImageCarousel urls={images} />
      </div>
      <div className="h-14 w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <PostLikedButton post={post} />
          <CommentButton postId={post.id} />
          <ShareButton />
        </div>
        <BookmarkButton />
      </div>

      {post.totalLikes > 0 && (
        <h1 className="font-semibold px-1 text-sm">
          {post.totalLikes} {post.totalLikes > 1 ? 'likes' : 'like'}
        </h1>
      )}

      <p className="text-ellipsis whitespace-pre-line text-sm px-1">
        <span className="font-semibold">arridhaamrad</span>&nbsp;&nbsp;
        {post.description}
      </p>

      {post.totalComments > 0 && (
        <>
          <Spacer y={1} />
          <Link
            className="text-skin-accent text-sm px-1 font-medium"
            href={`/p/${post.id}`}
          >
            See {post.totalComments}{' '}
            {post.totalComments > 1 ? 'comments' : 'comment'}
          </Link>
        </>
      )}
      <PostCommentInput post={post} />
    </article>
  );
}
