import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
} from 'typeorm';
import { Role } from '../enums/role.enum';

@Entity()
@Unique(['userId'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  userId: string;

  @Column()
  role: Role;

  @Column({
    nullable: true,
  })
  type: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
