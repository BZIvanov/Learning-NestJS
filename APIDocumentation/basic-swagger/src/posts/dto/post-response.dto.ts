import { ApiProperty } from '@nestjs/swagger';

export class PostResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'My post content' })
  content: string;
}
