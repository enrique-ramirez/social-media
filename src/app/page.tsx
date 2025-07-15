import PostsList from "@/components/posts-list";
import Post from "@/components/post";

export default async function Home() {
  const res =  await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();

  console.log(posts)
  return (
    <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start m-4">
      <PostsList>
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Most recent activity:</li>
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </PostsList>
    </div>
  );
}
