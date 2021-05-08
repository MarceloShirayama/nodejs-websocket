import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';


@Entity('users')
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  constructor(id: string, email: string, created_at: Date) {
    !id ? this.id = uuidv4() : this.id = id;
    this.email = email;
    this.created_at = created_at;
  }
};
