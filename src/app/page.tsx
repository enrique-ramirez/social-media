import PostsList from "@/components/posts-list";
import Post from "@/components/post";
import Pagination from "@/components/pagination";
import type { Post as PostType } from "@/app/types/post";

export default async function Home() {
  const res =  await fetch('http://localhost:3000/api/posts');
  const posts: PostType[] = await res.json();

  return (
    <section className="container mx-auto m-8">
      <PostsList>
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Most recent activity:</li>
        {posts.map((post) => (
          <li key={post.id} className="list-row">
            <Post {...post} />
          </li>
        ))}
      </PostsList>

      <Pagination />
    </section>
  );
}
