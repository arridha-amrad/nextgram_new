import { getPostById } from '@/actions/server/post';
import PostDetail from '@/components/PostPage/PostDetail';
import ImageCarousel from '@/components/carousel/ImageCarousel';
import { unstable_noStore } from 'next/cache';

type Props = {
  params: {
    postId: string;
  };
};

const Page = async ({ params: { postId } }: Props) => {
  unstable_noStore();
  const post = await getPostById(postId);

  if (!post) {
    return (
      <div>
        <p>Post not found</p>
      </div>
    );
  }

  return (
    <div className="h-full mx-auto w-full">
      <div className="flex h-screen p-4 border border-skin-base rounded-lg overflow-hidden">
        <div className="w-full max-w-[60%] overflow-hidden h-full">
          <ImageCarousel urls={post.images.map((i) => i.url)} />
        </div>
        <PostDetail data={JSON.stringify(post)} />
      </div>
    </div>
  );
};

export default Page;
