import { IsNumberString } from 'class-validator';

export class FindAuthorParams {
  @IsNumberString()
  id: number;
}

export class UpdateAuthorParams {
  @IsNumberString()
  id: number;
}

export class RemoveAuthorParams {
  @IsNumberString()
  id: number;
}
