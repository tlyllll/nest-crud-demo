import { Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('list')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('list')
  create(): string {
    return this.appService.getHello();
  }

  @Get('user_*')
  getUser(): string {
    return 'getUser';
  }

  @Put('list/:id')
  update() {
    return { userId: 1 };
  }
}
