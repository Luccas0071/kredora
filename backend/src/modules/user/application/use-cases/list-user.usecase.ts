import { Inject } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/user.repository';

export class ListUserUseCase {
  constructor(
    @Inject(UserRepository)
    private readonly repository: UserRepository,
  ) {}

  execute() {
    return this.repository.findAll();
  }
}
