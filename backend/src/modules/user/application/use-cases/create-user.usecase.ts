import { Inject } from '@nestjs/common';
import { CreateUserInput } from '../../adapters/graphql/user.input';
import { UserRepository } from '../../domain/repositories/user.repository';

export class CreateUserUseCase {
  constructor(
    @Inject(UserRepository)
    private readonly repository: UserRepository,
  ) {}

  execute(input: CreateUserInput) {
    return this.repository.create(input);
  }
}
