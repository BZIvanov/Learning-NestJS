import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Book } from '../../books/entities/book.entity';

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, name: 'first_name' })
  firstName: string;

  @Column({ nullable: false, name: 'last_name' })
  lastName: string;

  // email will not be selected as part of the queries, because we don't want to return it as part of response
  @Column({ nullable: true, unique: true, select: false })
  email?: string;

  @Column({ nullable: true })
  nickname?: string;

  @Column({ nullable: true })
  country?: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => Book, (book) => book.author)
  books: Book[];
}
