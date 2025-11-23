import { Inject } from '@nestjs/common';
import { ICategoryRepository } from '../../domain/repositories/category.interface.repository';
import { CreateCategoryInput } from '../../adapters/graphql/category.input';

export class CreateCategoryUseCase {
  constructor(
    @Inject(ICategoryRepository)
    private readonly repository: ICategoryRepository,
  ) {}

  execute(input: CreateCategoryInput) {
    return this.repository.create(input);
  }
}
