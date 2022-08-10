import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, StrategyOptions } from 'passport-jwt';
import { Strategy } from 'passport-local';
import { User } from 'src/modules/user/entities/user.entity';
import { Repository } from 'typeorm';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly configService: ConfigService,
    private readonly authService: AuthService,
  ) {
    console.log('jj', ExtractJwt.fromHeader('token'));

    super({
      jwtFromRequest: ExtractJwt.fromHeader('token'),
      ignoreExpiration: false,
      secretOrKey: configService.get('SECRET'),
    } as StrategyOptions);
  }

  async validate(user: User) {
    console.log('111');
    const existUser = await this.authService.getUser(user);
    console.log('v', existUser);
    if (!existUser) {
      throw new UnauthorizedException('token 不正确');
    }
    return existUser;
  }
}
