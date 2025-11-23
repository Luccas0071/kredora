import { Inject } from '@nestjs/common';
import { ICategoryRepository } from '../../domain/repositories/category.interface.repository';
import { UpdateCategoryInput } from '../../adapters/graphql/category.input';

export class UpdateCategoryUseCase {
  constructor(
    @Inject(ICategoryRepository)
    private readonly repository: ICategoryRepository,
  ) {}

  execute(id: string, input: UpdateCategoryInput) {
    return this.repository.update(id, input);
  }
}
