import { IsNotEmpty } from 'class-validator';

export class GetTeamMemberBody {
  @IsNotEmpty()
  id: string;
}
