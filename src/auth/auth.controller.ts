import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import {
  Controller,
  Body,
  UseGuards,
  Req,
  UseInterceptors,
  ClassSerializerInterceptor,
  Post,
} from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  async login(@Body() user: LoginDto, @Req() req) {
    return await this.authService.login(req.user);
  }
}
