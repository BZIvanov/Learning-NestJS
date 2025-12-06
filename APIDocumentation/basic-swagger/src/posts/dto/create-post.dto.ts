import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({
    example: 'My first post',
    description: 'Content of the new post',
  })
  @IsString()
  content: string;
}
