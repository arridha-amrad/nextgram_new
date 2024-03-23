'use client';

import Link from 'next/link';

type Props = {
  postId: string;
};

export default function CommentButton({ postId }: Props) {
  return (
    <Link className="group" href={`/p/${postId}`}>
      <svg
        aria-label="Comment"
        className="group-hover:text-gray-500"
        fill="currentColor"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <title>Comment</title>
        <path
          d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        ></path>
      </svg>
    </Link>
  );
}
