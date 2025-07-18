import { NextResponse } from 'next/server';
import generatePost from '@/app/utils/generatePost';
import type { Post } from '@/app/types/post';

type Response = Post[];

export async function GET(): Promise<NextResponse<Response>> {
  const posts: Post[] = [];

  for (let i = 0; i < 20; i++) {
    posts.push(generatePost())
  }
  // Ugly sorting from latest to oldest
  posts.sort((a, b) => (
    new Date(b.date).getTime()) - (new Date(a.date).getTime())
  );

  return NextResponse.json(posts);
}
