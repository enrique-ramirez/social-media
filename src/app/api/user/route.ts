import generateUser from "@/app/utils/generateUser";

export async function GET() {
  return new Response(JSON.stringify(generateUser()), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
