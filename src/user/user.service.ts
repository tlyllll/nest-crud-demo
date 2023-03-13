import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

export interface UsersRo {
  list: UserEntity[];
  count: number;
}
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async create(post: Partial<UserEntity>): Promise<UserEntity> {
    const { name, password } = post;
    if (!name || !password) {
      throw new HttpException(JSON.stringify(post) + ' ', 401);
    }
    const user = await this.usersRepository.findOne({ where: { name } });
    if (user) {
      throw new HttpException('用户已存在', 401);
    }
    return await this.usersRepository.save(post);
  }
  async findAll() {
    return this.usersRepository.find();
  }

  async findById(id): Promise<UserEntity> {
    return this.usersRepository.findOne(id);
  }
}
