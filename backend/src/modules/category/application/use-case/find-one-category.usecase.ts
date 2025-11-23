import { Inject, Injectable } from '@nestjs/common';
import { ICategoryRepository } from '../../domain/repositories/category.interface.repository';
import { Category } from '../../domain/entities/category.entity';

@Injectable()
export class FindOneCategoryUseCase {
  constructor(
    @Inject(ICategoryRepository)
    private readonly categoryRepository: ICategoryRepository,
  ) {}

  async execute(id: string): Promise<Category | null> {
    return await this.categoryRepository.findById(id);
  }
}
