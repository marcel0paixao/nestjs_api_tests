import { PrismaService } from 'src/database/prisma.service';
import { MembersRepository } from '../members-repository';
import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';
import { Member } from '@prisma/client';

@Injectable()
export class PrismaMembersRepository implements MembersRepository {
  constructor(private prisma: PrismaService) {}
  get(id: string): Promise<Member | null> {
    return this.prisma.member.findUnique({
      where: {
        id: id,
      },
    });
  }
  async getAll(): Promise<Member[]> {
    return [];
    //return this.prisma.member.find();
  }
  async create(
    name: string,
    memberFunction: string,
    age: number,
    country: string,
    height: number,
    weight: number,
    date: Date,
  ): Promise<void> {
    await this.prisma.member.create({
      data: {
        id: randomUUID(),
        name,
        function: memberFunction,
        age,
        country,
        height,
        weight,
        date,
      },
    });
  }
}
