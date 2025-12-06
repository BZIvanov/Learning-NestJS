import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({
    example: 'My post text',
    description: 'Content of the post',
  }) // info for the specific property, we can see this after expanding a specific endpoint
  @Column({ nullable: false })
  content: string;
}
