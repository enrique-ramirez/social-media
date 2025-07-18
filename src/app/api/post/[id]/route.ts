import generatePost from "@/app/utils/generatePost";

export async function GET(request: Request, {
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  return new Response(JSON.stringify({ ...generatePost(), id }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
