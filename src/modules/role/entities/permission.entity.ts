import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from './role.entity';

@Entity('permission', { schema: 'library' })
export class Permission extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', nullable: true, length: 50 })
  name: string | null;

  @Column('int', { name: 'parent_id', nullable: true })
  parentId: number | null;

  @Column('varchar', { name: 'type', nullable: true, length: 50 })
  type: string | null;

  @Column('varchar', { name: ' path', nullable: true, length: 50 })
  path: string | null;

  @Column('varchar', { name: 'key', nullable: true, length: 255 })
  key: string | null;

  @ManyToMany(() => Role, (role) => role.permission)
  role: Role[];
}
