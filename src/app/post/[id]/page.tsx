import Post from '@/components/post';
import CommentForm from '@/components/commentForm';
import { Post as PostType } from '@/app/types/post';

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>,
}) {
  const { id } = await params;
  const res = await fetch(`http://localhost:3000/api/post/${id}`);
  const post: PostType = await res.json();

  return (
    <section className="container mx-auto m-8">
      <div className="bg-base-100 shadow-md rounded-lg p-6">
        <ul className="list">
          <li className="list-row">
            <Post {...post} />
          </li>
        </ul>
      </div>

      <h2 className="my-5 text-xl font-bold">Comments:</h2>

      <CommentForm />
    </section>
  )

}
