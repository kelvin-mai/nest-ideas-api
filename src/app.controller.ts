import { Get, Controller, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(): string {
    return this.appService.root();
  }

  @Get('err')
  err() {
    throw new HttpException(
      {
        statusCode: HttpStatus.FORBIDDEN,
        error: 'Forbidden',
      },
      HttpStatus.FORBIDDEN,
    );
  }
}
