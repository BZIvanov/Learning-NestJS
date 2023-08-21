import { IsNumberString } from 'class-validator';

export class FindBookParams {
  @IsNumberString()
  id: number;
}

export class UpdateBookParams {
  @IsNumberString()
  id: number;
}

export class RemoveBookParams {
  @IsNumberString()
  id: number;
}
