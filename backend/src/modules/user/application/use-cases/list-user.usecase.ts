import { Inject } from '@nestjs/common';
import { IUserRepository } from '../../domain/repositories/user.repository';

export class ListUserUseCase {
  constructor(
    @Inject(IUserRepository)
    private readonly repository: IUserRepository,
  ) {}

  execute() {
    return this.repository.findAll();
  }
}
