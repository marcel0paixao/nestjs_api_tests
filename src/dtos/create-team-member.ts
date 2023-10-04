import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  Length,
  Max,
  Min,
} from 'class-validator';

export class CreateTeamMemberBody {
  @IsNotEmpty()
  @Length(5, 100)
  name: string;

  @IsNotEmpty({
    message: 'Member function should not be empty',
  })
  function: string;

  @IsNotEmpty()
  @Min(18)
  @Max(150)
  @IsNumber()
  age: number;

  @IsNotEmpty()
  @Length(5, 100)
  country: string;

  @IsNumber()
  @IsNotEmpty()
  height: number;

  @IsNumber()
  @IsNotEmpty()
  weight: number;

  @IsDateString()
  @IsNotEmpty()
  date: Date;
}
