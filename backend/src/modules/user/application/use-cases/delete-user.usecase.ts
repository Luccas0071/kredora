import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/user.repository';
import { User } from '../../domain/entities/user.entity';

@Injectable()
export class DeleteUserUseCase {
  constructor(
    @Inject(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  async execute(userId: string): Promise<User> {
    const user = await this.userRepository.findById(userId);

    if (!user) {
      throw new Error('User not found');
    }

    await this.userRepository.delete(userId);
    return user;
  }
}
