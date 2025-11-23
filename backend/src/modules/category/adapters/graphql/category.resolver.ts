import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CategoryType } from './category.type';
import { CreateCategoryUseCase } from '../../application/use-case/create-category.usecase';
import { UpdateCategoryUseCase } from '../../application/use-case/update-category.usecase';
import { DeleteCategoryUseCase } from '../../application/use-case/delete-category.usecase';
import { ListCategoryUseCase } from '../../application/use-case/list-category.usecase';
import { FindOneCategoryUseCase } from '../../application/use-case/find-one-category.usecase';
import { CreateCategoryInput, UpdateCategoryInput } from './category.input';

@Resolver(() => CategoryType)
export class CategoryResolver {
  constructor(
    private readonly createCategoryUseCase: CreateCategoryUseCase,
    private readonly updateCategoryUseCase: UpdateCategoryUseCase,
    private readonly deleteCategoryUseCase: DeleteCategoryUseCase,
    private readonly listCategoryUseCase: ListCategoryUseCase,
    private readonly findOneCategoryUseCase: FindOneCategoryUseCase,
  ) {}

  @Query(() => [CategoryType])
  findAllCategory() {
    return this.listCategoryUseCase.execute();
  }

  @Mutation(() => CategoryType)
  createCategory(@Args('input') input: CreateCategoryInput) {
    return this.createCategoryUseCase.execute(input);
  }

  @Query(() => CategoryType)
  findOneCategory(@Args('id', { type: () => String }) id: string) {
    return this.findOneCategoryUseCase.execute(id);
  }

  @Mutation(() => CategoryType)
  updateCategory(@Args('input') input: UpdateCategoryInput) {
    return this.updateCategoryUseCase.execute(input.id, input);
  }

  @Mutation(() => CategoryType)
  removeCategory(@Args('id', { type: () => String }) id: string) {
    return this.deleteCategoryUseCase.execute(id);
  }
}
