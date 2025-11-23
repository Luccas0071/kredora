import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryResolver } from './adapters/graphql/category.resolver';
import { CreateCategoryUseCase } from './application/use-case/create-category.usecase';
import { UpdateCategoryUseCase } from './application/use-case/update-category.usecase';
import { DeleteCategoryUseCase } from './application/use-case/delete-category.usecase';
import { ListCategoryUseCase } from './application/use-case/list-category.usecase';
import { FindOneCategoryUseCase } from './application/use-case/find-one-category.usecase';
import { ICategoryRepository } from './domain/repositories/category.interface.repository';
import { CategoryRepository } from './infrastructure/repositories/category.repository';
import { CategoryOrmEntity } from './infrastructure/entities/category.orm-entity';
import { UserOrmEntity } from '../user/infrastructure/entities/user.orm-entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryOrmEntity, UserOrmEntity])],
  providers: [
    CategoryResolver,
    CreateCategoryUseCase,
    UpdateCategoryUseCase,
    DeleteCategoryUseCase,
    ListCategoryUseCase,
    FindOneCategoryUseCase,
    {
      provide: ICategoryRepository,
      useClass: CategoryRepository,
    },
  ],
  exports: [ICategoryRepository],
})
export class CategoryModule {}
