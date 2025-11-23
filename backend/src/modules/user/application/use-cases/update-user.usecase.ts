import { Inject } from '@nestjs/common';
import { UpdateUserInput } from '../../adapters/graphql/user.input';
import { IUserRepository } from '../../domain/repositories/user.repository';

export class UpdateUserUseCase {
  constructor(
    @Inject(IUserRepository)
    private readonly repository: IUserRepository,
  ) {}

  execute(id: string, input: UpdateUserInput) {
    return this.repository.update(id, input);
  }
}
