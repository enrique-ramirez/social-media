import generateUser from "@/app/utils/generateUser";

export async function GET(request: Request, {
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  return new Response(JSON.stringify({ ...generateUser(), id }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
