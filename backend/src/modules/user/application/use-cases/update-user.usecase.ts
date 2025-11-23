import { Inject } from '@nestjs/common';
import { UpdateUserInput } from '../../adapters/graphql/user.input';
import { UserRepository } from '../../domain/repositories/user.repository';

export class UpdateUserUseCase {
  constructor(
    @Inject(UserRepository)
    private readonly repository: UserRepository,
  ) {}

  execute(id: string, input: UpdateUserInput) {
    return this.repository.update(id, input);
  }
}
