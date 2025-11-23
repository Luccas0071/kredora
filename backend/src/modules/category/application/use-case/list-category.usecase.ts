import { Inject } from '@nestjs/common';
import { ICategoryRepository } from '../../domain/repositories/category.interface.repository';

export class ListCategoryUseCase {
  constructor(
    @Inject(ICategoryRepository)
    private readonly repository: ICategoryRepository,
  ) {}

  execute() {
    return this.repository.findAll();
  }
}
