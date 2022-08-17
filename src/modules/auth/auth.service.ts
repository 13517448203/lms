import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/modules/user/entities/user.entity';
import { UserService } from 'src/modules/user/user.service';
// import { compareSync } from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.userService.findUser(username);

    // if (!user || !compareSync(password, user.password)) {
    //   throw new BadRequestException('用户名或密码不正确错误！');
    // }

    console.log(username, password, user.password);
    if (!user || password !== user.password) {
      throw new BadRequestException('用户名或密码错误！');
    }

    return user;
  }

  createToken(user: Partial<User>) {
    return this.jwtService.sign(user);
  }

  async login(user: Partial<User>) {
    const token = this.createToken({
      id: user.id,
      username: user.username,
      roleId: user.roleId,
    });

    return { token };
  }

  async getUser(user) {
    return await this.userService.findOne(user.id);
  }
}
