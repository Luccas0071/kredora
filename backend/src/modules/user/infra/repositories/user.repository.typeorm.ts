import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserRepository } from '../../domain/repositories/user.repository';
import { User } from '../../domain/entities/user.entity';
import { UserOrmEntity } from '../entities/user.orm-entity';

@Injectable()
export class UserRepositoryTypeorm implements UserRepository {
  constructor(
    @InjectRepository(UserOrmEntity)
    private readonly userRepository: Repository<UserOrmEntity>,
  ) {}

  async create(data: User): Promise<User> {
    const user = this.userRepository.create(data);
    const saved = await this.userRepository.save(user);
    return saved;
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      return null;
    }
    return user;
  }

  async findAll(): Promise<User[]> {
    const users = await this.userRepository.find();
    return users.map((user) => ({
      ...user,
      deleted_at: user.deleted_at || undefined,
    }));
  }

  update(id: string, data: Partial<User>): Promise<User> {
    return this.userRepository.save({ id, ...data });
  }

  async delete(id: string): Promise<boolean> {
    await this.userRepository.delete(id);
    return true;
  }
}
