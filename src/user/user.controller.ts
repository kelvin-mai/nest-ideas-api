import {
  Controller,
  Get,
  Post,
  UsePipes,
  Logger,
  Body,
  UseGuards,
} from '@nestjs/common';

import { UserService } from './user.service';
import { UserDTO } from './user.dto';
import { ValidationPipe } from '../shared/validation.pipe';
import { AuthGuard } from 'shared/auth.gaurd';
import { User } from './user.decorator';

@Controller()
export class UserController {
  logger = new Logger('UserController');

  constructor(private userSerice: UserService) {}

  @Get('api/users')
  @UseGuards(new AuthGuard())
  showAllUsers(@User() user) {
    console.log(user);
    return this.userSerice.showAll();
  }

  @Post('auth/login')
  @UsePipes(new ValidationPipe())
  login(@Body() data: UserDTO) {
    this.logger.log(JSON.stringify(data));
    return this.userSerice.login(data);
  }

  @Post('auth/register')
  @UsePipes(new ValidationPipe())
  register(@Body() data: UserDTO) {
    this.logger.log(JSON.stringify(data));
    return this.userSerice.register(data);
  }
}
