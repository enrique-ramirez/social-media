import type { User } from '@/app/types/user';

export type Post = {
  id: string;
  user: User;
  date: Date;
  content: string;
}
