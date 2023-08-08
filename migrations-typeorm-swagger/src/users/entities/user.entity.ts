import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty({ example: 'iva@mail.com', description: 'User email' })
  email: string;

  @Column()
  @ApiProperty({ example: 'Iva', description: 'User first name' })
  first_name: string;

  @Column()
  @ApiProperty({ example: 'Ivanova', description: 'User last name' })
  last_name: string;

  @Column()
  @ApiProperty({ example: 'Sofia', description: 'User current city' })
  city: string;

  @Column()
  @ApiProperty({
    example: 'Some text',
    description:
      'Example for the revert migration where we will first add this column and then remove it to have the revert example.',
  })
  bad_column: string;
}
