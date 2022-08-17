import { IsNotEmpty } from 'class-validator';
import { Permission } from '../entities/permission.entity';

export class CreateRoleDto {
  @IsNotEmpty({ message: '请输入角色名称' })
  roleName: string;

  permission: Permission[];
}
