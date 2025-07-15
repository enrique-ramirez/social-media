import { faker } from "@faker-js/faker"

export type User = {
  id: string;
  avatar: string;
  name: string;
  gender: string;
  email: string;
}

export default function generateUser() {
  return {
    id: faker.string.uuid(),
    avatar: faker.image.avatar(),
    name: faker.person.fullName(),
    gender: faker.person.gender(),
    email: faker.internet.email(),
  }
}
