import { UserEntity } from './user.entity';
import { UserService } from './user.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Post()
  async create(@Body() user) {
    return await this.usersService.create(user);
  }

  @Get('getAll')
  async findAll(): Promise<UserEntity[]> {
    return await this.usersService.findAll();
  }
}
