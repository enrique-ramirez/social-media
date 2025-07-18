import { NextResponse } from "next/server";
import generateUser from "@/app/utils/generateUser";
import type { User } from "@/app/types/user";

export async function GET(request: Request, {
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  return NextResponse.json({ ...generateUser(), id });
}
