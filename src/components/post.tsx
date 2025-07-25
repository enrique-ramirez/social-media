import Link from "next/link";

import type { Post as PostType } from "@/app/utils/generatePost";

export default function Post({ user, date, content, id }: PostType) {
  const formattedDate = (new Date(date)).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <Link href={`/profile/${user.id}`}>
        <img className="size-10 rounded-box" src={user.avatar} alt={user.name} />
      </Link>
      <div>
        <div><Link href={`/profile/${user.id}`} className="hover:underline">{user.name}</Link></div>
        <div className="text-xs uppercase font-semibold opacity-60 mb-2.5">
          <Link href={`/post/${id}`} className="hover:underline">{formattedDate}</Link>
        </div>

        <div className="list-col-wrap text-s">
          {content.split('\n').map((paragraph, i) => (
            <p key={i} className="mb-2">{paragraph}</p>
          ))}
        </div>
      </div>
      <button className="btn btn-square btn-ghost">
        <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
      </button>
    </>
  )
}
