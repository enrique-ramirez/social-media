import generateUser from "@/app/utils/generateUser";

export async function GET() {
  const users = [];

  for (let i = 0; i < 20; i++) {
    users.push(generateUser())
  }

  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
