import { faker } from "@faker-js/faker"

export type User = {
  id: string;
  avatar: string;
  name: string;
  gender: string;
  email: string;
  location: string;
  bio: string;
  about: string;
}

export default function generateUser() {
  return {
    id: faker.string.uuid(),
    avatar: faker.image.avatar(),
    name: faker.person.fullName(),
    gender: faker.person.gender(),
    email: faker.internet.email(),
    location: faker.location.city(),
    bio: faker.person.bio(),
    about: faker.lorem.paragraph(5),
  }
}
