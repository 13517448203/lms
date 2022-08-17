import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user', { schema: 'library' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'username', length: 20 })
  username: string;

  @Column('char', {
    name: 'password',
    nullable: true,
    length: 32,
    select: false,
  })
  password: string | null;

  @Column('varchar', { name: 'name', nullable: true, length: 50 })
  name: string | null;

  @Column('char', { name: 'tel', nullable: true, length: 11 })
  tel: string | null;

  @Column('varchar', { name: 'email', nullable: true, length: 50 })
  email: string | null;

  @Column('int', { name: 'status', nullable: true, default: () => "'1'" })
  status: number | null;

  @Column('timestamp', {
    name: 'create_time',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createTime: Date | null;

  @Column('int', { name: 'role_id', nullable: true })
  roleId: number | null;
}
