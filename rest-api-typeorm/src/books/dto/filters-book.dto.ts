import { Transform } from 'class-transformer';
import { IsString, IsOptional, Min, Max } from 'class-validator';

export class FiltersBookDto {
  @IsString()
  @IsOptional()
  readonly title?: string;

  @Transform(({ value }) => parseInt(value, 10))
  @Min(1)
  @Max(new Date().getFullYear())
  @IsOptional()
  readonly year?: number;
}
