import { Inject } from '@nestjs/common';
import { CreateUserInput } from '../../adapters/graphql/user.input';
import { IUserRepository } from '../../domain/repositories/user.repository';

export class CreateUserUseCase {
  constructor(
    @Inject(IUserRepository)
    private readonly repository: IUserRepository,
  ) {}

  execute(input: CreateUserInput) {
    return this.repository.create(input);
  }
}
