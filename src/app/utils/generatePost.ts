import { faker } from '@faker-js/faker';
import generateUser from '@/app/utils/generateUser';
import type { Post } from '@/app/types/post';

export default function generatePost(): Post {
  return {
    id: faker.string.uuid(),
    user: generateUser(),
    date: faker.date.past(),
    content: faker.lorem.paragraphs(2),
  }
}
