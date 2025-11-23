import { User } from '../entities/user.entity';

export abstract class UserRepository {
  abstract create(data: { name: string; email: string }): Promise<User>;
  abstract update(id: string, data: Partial<User>): Promise<User>;
  abstract delete(id: string): Promise<boolean>;
  abstract findAll(): Promise<User[]>;
  abstract findById(id: string): Promise<User | null>;
}
