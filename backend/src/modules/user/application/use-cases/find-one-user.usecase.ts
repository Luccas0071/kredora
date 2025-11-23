import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/user.repository';
import { User } from '../../domain/entities/user.entity';

@Injectable()
export class FindOneUserUseCase {
  constructor(
    @Inject(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  async execute(id: string): Promise<User | null> {
    return await this.userRepository.findById(id);
  }
}
