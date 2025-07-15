import generatePost from "@/app/utils/generatePost";

export async function GET() {
  return new Response(JSON.stringify(generatePost()), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
