import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
} from 'typeorm';

@Entity()
export class Idea {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @Column('text')
  idea: string;

  @Column('text')
  description: string;
}
