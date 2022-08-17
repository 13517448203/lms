import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Permission } from './permission.entity';

@Entity('role', { schema: 'library' })
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'role_name', nullable: true, length: 255 })
  roleName: string | null;

  @Column('int', { name: 'role_status', nullable: true })
  roleStatus: number | null;

  @Column('timestamp', { name: 'create_time', nullable: true })
  createTime: Date | null;

  @ManyToMany(() => Permission, (permission) => permission.role)
  @JoinTable()
  permission: Permission[];
  // {
  //   name: 'roles_permissions',
  //   joinColumns: [{ name: 'role_id' }],
  //   inverseJoinColumns: [{ name: 'permission_id' }],
  // }
}
