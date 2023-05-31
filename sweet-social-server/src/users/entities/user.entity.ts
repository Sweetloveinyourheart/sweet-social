import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Profile } from "./profile.entity"
import { Post } from "src/posts/entities/post.entity"

export enum UserRoles {
    User = "user",
    Admin = "admin"
}

export enum AccountStatus {
    Opened = "opened",
    Closed = "closed",
    Banned = 'banned'
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    email: string

    @Column()
    password: string

    @Column({ enum: UserRoles, default: UserRoles.User })
    role: UserRoles

    @Column({ default: false })
    isVerified: boolean

    @Column({ default: AccountStatus.Opened, enum: AccountStatus })
    status: AccountStatus

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToOne(() => Profile, profile => profile.user, { cascade: true })
    @JoinColumn()
    profile: Profile;

    @OneToMany(() => Post, post => post.user)
    posts: Post[]
}
