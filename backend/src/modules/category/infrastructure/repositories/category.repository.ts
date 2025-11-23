import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CategoryOrmEntity } from '../entities/category.orm-entity';
import { ICategoryRepository } from '../../domain/repositories/category.interface.repository';
import { Category } from '../../domain/entities/category.entity';
import { CreateCategoryInput } from '../../adapters/graphql/category.input';
import { UserOrmEntity } from '../../../user/infrastructure/entities/user.orm-entity';

@Injectable()
export class CategoryRepository implements ICategoryRepository {
  constructor(
    @InjectRepository(CategoryOrmEntity)
    private readonly categoryRepository: Repository<CategoryOrmEntity>,
    @InjectRepository(UserOrmEntity)
    private readonly userRepository: Repository<UserOrmEntity>,
  ) {}

  async create(data: CreateCategoryInput): Promise<Category> {
    const user = await this.userRepository.findOne({
      where: { id: data.user_id },
    });
    if (!user) {
      throw new Error('User not found');
    }

    const category = this.categoryRepository.create({
      name: data.name,
      description: data.description,
      user,
    });

    const saved = await this.categoryRepository.save(category);
    return saved;
  }

  async findById(id: string): Promise<Category | null> {
    const category = await this.categoryRepository.findOne({ where: { id } });
    if (!category) {
      return null;
    }
    return category;
  }

  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }

  update(id: string, data: Partial<Category>): Promise<Category> {
    return this.categoryRepository.save({ id, ...data });
  }

  async delete(id: string): Promise<boolean> {
    await this.categoryRepository.delete(id);
    return true;
  }
}
