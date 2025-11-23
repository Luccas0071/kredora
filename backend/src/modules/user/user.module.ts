import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserOrmEntity } from './infra/entities/user.orm-entity';
import { UserResolver } from './adapters/graphql/user.resolver';
import { CreateUserUseCase } from './application/use-cases/create-user.usecase';
import { UserRepository } from './domain/repositories/user.repository';
import { UserRepositoryTypeorm } from './infra/repositories/user.repository.typeorm';
import { ListUserUseCase } from './application/use-cases/list-user.usecase';
import { FindOneUserUseCase } from './application/use-cases/find-one-user.usecase';
import { UpdateUserUseCase } from './application/use-cases/update-user.usecase';
import { DeleteUserUseCase } from './application/use-cases/delete-user.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([UserOrmEntity])],
  providers: [
    UserResolver,
    CreateUserUseCase,
    UpdateUserUseCase,
    DeleteUserUseCase,
    ListUserUseCase,
    FindOneUserUseCase,
    {
      provide: UserRepository,
      useClass: UserRepositoryTypeorm,
    },
  ],
  exports: [UserRepository],
})
export class UserModule {}
