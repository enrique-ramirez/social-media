import generatePost from '@/app/utils/generatePost';

export async function GET() {
  const posts = [];

  for (let i = 0; i < 20; i++) {
    posts.push(generatePost())
  }
  // Ugly sorting from latest to oldest
  posts.sort((a, b) => (new Date(b.date)) - (new Date(a.date)))

  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
