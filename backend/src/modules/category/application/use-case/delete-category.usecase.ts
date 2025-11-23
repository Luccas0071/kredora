import { Inject, Injectable } from '@nestjs/common';
import { ICategoryRepository } from '../../domain/repositories/category.interface.repository';
import { Category } from '../../domain/entities/category.entity';

@Injectable()
export class DeleteCategoryUseCase {
  constructor(
    @Inject(ICategoryRepository)
    private readonly categoryRepository: ICategoryRepository,
  ) {}

  async execute(categoryId: string): Promise<Category> {
    const user = await this.categoryRepository.findById(categoryId);

    if (!user) {
      throw new Error('Category not found');
    }

    await this.categoryRepository.delete(categoryId);
    return user;
  }
}
