import { NextResponse } from "next/server";
import generatePost from "@/app/utils/generatePost";
import type { Post } from "@/app/types/post";

export async function GET(request: Request, {
  params
}: {
  params: Promise<{ id: string }>
}): Promise<NextResponse<Post>> {
  const { id } = await params;
  return NextResponse.json({ ...generatePost(), id });
}
