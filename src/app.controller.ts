import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTeamMemberBody } from './dtos/create-team-member';
import { MembersRepository } from './repositories/members-repository';
import { GetTeamMemberBody } from './dtos/get-team-member-body';

@Controller('members')
export class AppController {
  constructor(private membersRepository: MembersRepository) {}

  @Get('get')
  async get(@Body() body: GetTeamMemberBody) {
    return this.membersRepository.get(body.id);
  }

  @Get('getAll')
  async getAll() {
    return this.membersRepository.getAll();
  }

  @Post('insert')
  async insert(@Body() body: CreateTeamMemberBody) {
    const {
      name,
      function: memberFunction,
      age,
      country,
      height,
      weight,
      date,
    } = body;

    await this.membersRepository.create(
      name,
      memberFunction,
      age,
      country,
      height,
      weight,
      date,
    );
  }
}
