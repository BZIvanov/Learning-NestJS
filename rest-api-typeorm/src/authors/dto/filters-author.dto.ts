import { IsString, IsOptional } from 'class-validator';

export class FiltersAuthorDto {
  @IsString()
  @IsOptional()
  readonly firstName?: string;

  @IsString()
  @IsOptional()
  readonly lastName?: string;
}
