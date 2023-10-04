import { Member } from '@prisma/client';

export abstract class MembersRepository {
  abstract create(
    name: string,
    memberFunction: string,
    age: number,
    country: string,
    height: number,
    weight: number,
    date: Date,
  ): Promise<void>;

  abstract get(id: string): Promise<Member>;
  abstract getAll(): Promise<Member[]>;
}
