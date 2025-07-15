import { faker } from '@faker-js/faker';
import generateUser from '@/app/utils/generateUser';
import type { User } from '@/app/utils/generateUser';

export type Post = {
  id: string;
  user: User;
  date: string;
  content: string;
}

export default function generatePost() {
  return {
    id: faker.string.uuid(),
    user: generateUser(),
    date: faker.date.past(),
    content: faker.lorem.paragraphs(2),
  }
}
