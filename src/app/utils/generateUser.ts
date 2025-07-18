import { faker } from "@faker-js/faker"
import type { User } from "@/app/types/user";

export default function generateUser(): User {
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
