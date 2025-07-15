import { faker } from '@faker-js/faker';
import generateUser from '@/app/utils/generateUser';
import type { User } from '@/app/utils/generateUser';

export type Post = {
  id: string;
  user: User;
  date: string;
  content: string;
}

export async function GET() {
  const posts = [];

  for (let i = 0; i < 20; i++) {
    posts.push({
      id: faker.string.uuid(),
      user: generateUser(),
      date: faker.date.past(),
      content: faker.lorem.paragraphs(2),
    })
  }
  // Ugly sorting from latest to oldest
  posts.sort((a, b) => (new Date(b.date)) - (new Date(a.date)))

  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
