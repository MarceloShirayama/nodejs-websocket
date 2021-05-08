import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';
import { User } from "./User";


@Entity("messages")
export class Message {
  @PrimaryColumn()
  id: string;

  @Column()
  admin_id: string;

  @JoinColumn({ name: "user_id" })
  @ManyToOne(() => User)
  user: User;

  @Column()
  user_id: string;

  @Column()
  text: string;

  @CreateDateColumn()
  created_at: Date;

  constructor(
    id: string, admin_id: string, user_id: string, text: string,
    created_at: Date, user: User
  ) {
    !id ? this.id = uuidv4() : this.id = id;
    this.admin_id = admin_id;
    this.user_id = user_id;
    this.text = text;
    this.created_at = created_at;
    this.user = user;
  }
}
