import { Column, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity("settings")
export class Setting {
    @PrimaryColumn()
    id: string;

    @Column()
    username: string;

    @Column()
    chat: boolean;

    @UpdateDateColumn()
    updated_at: Date;

    @UpdateDateColumn()
    created_at: Date;

    constructor(
        id: string, username: string, chat: boolean, updated_at: Date, created_at: Date
    ) {
        if (!id) {
            this.id = uuidv4();
        } else {
            this.id = id;
        }
        this.username = username;
        this.chat = chat;
        this.updated_at = updated_at;
        this.created_at = created_at;
    }
}