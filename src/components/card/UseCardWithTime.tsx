'use client';

import Image from 'next/image';
import { baseURL } from '@/actions/variables';
import { IPost } from '@/lib/mongoose/models/Post/types';
import { formatDistanceToNowStrict } from 'date-fns';
import OptionsButton from './Post/button/OptionsBtn';

type Props = {
  post: IPost;
};

export default function UserCardWithTime({ post }: Props) {
  const avatar = post.user.avatar ?? `${baseURL}/default_avatar.jpg`;
  const date = formatDistanceToNowStrict(post.createdAt);
  return (
    <div className="flex justify-between py-2 text-sm">
      <div className="flex items-center gap-4">
        <Image
          width={45}
          height={45}
          className="rounded-full flex-shrink-0 w-[40px] h-auto aspect-square"
          alt="avatar"
          src={avatar}
        />
        <div className="font-semibold text-sm">
          {post.user.username}
          <span className="text-skin-accent font-normal">
            &nbsp;•&nbsp;{date}
          </span>
          <div className="font-normal text-xs">
            <p>{post.location}</p>
          </div>
        </div>
      </div>
      <OptionsButton />
    </div>
  );
}
