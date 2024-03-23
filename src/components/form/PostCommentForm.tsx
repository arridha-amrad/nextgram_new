'use client';

import { baseURL } from '@/actions/variables';
import { IPost } from '@/lib/mongoose/models/Post/types';
import usePostsStore from '@/lib/zustand/store/postStore';
import FaceSmileIcon from '@heroicons/react/24/outline/FaceSmileIcon';
import EmojiPicker, { EmojiClickData, Theme } from 'emoji-picker-react';
import { useSession } from 'next-auth/react';
import { FormEvent, useState } from 'react';

type Props = {
  post: IPost;
};

const PostCommentForm = ({ post }: Props) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [comment, setComment] = useState('');
  const { data } = useSession();
  const { addComment } = usePostsStore();
  const [loading, setLoading] = useState(false);

  function onClick(emojiData: EmojiClickData, event: MouseEvent) {
    setComment(
      (inputValue) =>
        inputValue + (emojiData.isCustom ? emojiData.unified : emojiData.emoji)
    );
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!data) return;
    setLoading(true);
    try {
      const response = await fetch(`${baseURL}/api/comment`, {
        method: 'POST',
        body: JSON.stringify({
          content: comment,
          authId: data.user.id,
          postId: post.id
        })
      });
      const res = await response.json();
      addComment(res.comment, post.id);
      setComment('');
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <fieldset disabled={loading}>
      <form
        onSubmit={onSubmit}
        className="flex h-10 items-center relative py-2 px-1"
      >
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          type="text"
          placeholder="Add comment..."
          className="pr-16 w-full text-sm bg-transparent outline-none"
        />
        <div className="top-1/2 flex items-center gap-2 right-0 -translate-y-1/2 absolute">
          <>
            {!!comment && (
              <button
                type="submit"
                className="font-medium disabled:brightness-75 text-primary-500 text-sm"
              >
                Send
              </button>
            )}
            <button
              className="group"
              onClick={() => setShowEmojiPicker((val) => !val)}
            >
              <FaceSmileIcon className="w-5 h-5 group-hover:text-gray-500 transition-colors duration-250 ease-linear" />
            </button>
          </>
        </div>
        {showEmojiPicker && (
          <div className="absolute right-10 bottom-full z-50 ">
            <div
              onClick={() => setShowEmojiPicker(false)}
              className="fixed inset-0 bg-background/40"
            />
            <EmojiPicker
              onEmojiClick={onClick}
              previewConfig={{ showPreview: false }}
              theme={Theme.DARK}
            />
          </div>
        )}
      </form>
    </fieldset>
  );
};

export default PostCommentForm;
