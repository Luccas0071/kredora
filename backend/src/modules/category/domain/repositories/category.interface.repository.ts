import { CreateCategoryInput } from '../../adapters/graphql/category.input';
import { Category } from '../entities/category.entity';

export abstract class ICategoryRepository {
  abstract create(data: CreateCategoryInput): Promise<Category>;
  abstract update(id: string, data: Partial<Category>): Promise<Category>;
  abstract delete(id: string): Promise<boolean>;
  abstract findAll(): Promise<Category[]>;
  abstract findById(id: string): Promise<Category | null>;
}
