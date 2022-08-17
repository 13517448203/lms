import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: '请输入用户名' })
  username: string;

  @IsNotEmpty({ message: '请输入姓名' })
  name: string;

  @IsNotEmpty({ message: '请输入联系电话' })
  tel: string;

  @IsNotEmpty({ message: '请输入联系邮箱' })
  email: string;

  roleId: number;
}
