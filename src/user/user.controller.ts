import { Controller, Get, Post, UsePipes, Body } from '@nestjs/common';

import { UserService } from './user.service';
import { UserDTO } from './user.dto';
import { ValidationPipe } from '../shared/validation.pipe';

@Controller()
export class UserController {
  constructor(private userSerice: UserService) {}

  @Get('api/users')
  showAllUsers() {
    return this.userSerice.showAll();
  }

  @Post('auth/login')
  @UsePipes(new ValidationPipe())
  login(@Body() data: UserDTO) {
    return this.userSerice.login(data);
  }

  @Post('auth/register')
  @UsePipes(new ValidationPipe())
  register(@Body() data: UserDTO) {
    return this.userSerice.register(data);
  }
}
