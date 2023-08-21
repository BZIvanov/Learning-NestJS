import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsInt,
  Min,
  Max,
  IsPositive,
} from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsOptional()
  readonly description?: string;

  @IsInt()
  @Min(1)
  @Max(new Date().getFullYear())
  readonly year: number;

  @IsInt()
  @Min(1)
  @Max(1000)
  @IsOptional()
  readonly pages?: number;

  @IsInt()
  @IsPositive()
  readonly authorId: number;
}
