import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateUserInput, UpdateUserInput } from './user.input';
import { UserType } from './user.type';
import { CreateUserUseCase } from '../../application/use-cases/create-user.usecase';
import { UpdateUserUseCase } from '../../application/use-cases/update-user.usecase';
import { ListUserUseCase } from '../../application/use-cases/list-user.usecase';
import { DeleteUserUseCase } from '../../application/use-cases/delete-user.usecase';
import { FindOneUserUseCase } from '../../application/use-cases/find-one-user.usecase';

@Resolver(() => UserType)
export class UserResolver {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly updateUserUseCase: UpdateUserUseCase,
    private readonly deleteUserUseCase: DeleteUserUseCase,
    private readonly listUserUseCase: ListUserUseCase,
    private readonly findOneUserUseCase: FindOneUserUseCase,
  ) {}

  @Query(() => [UserType])
  findAllUser() {
    return this.listUserUseCase.execute();
  }

  @Mutation(() => UserType)
  createUser(@Args('input') input: CreateUserInput) {
    return this.createUserUseCase.execute(input);
  }

  @Query(() => UserType)
  findOneUser(@Args('id', { type: () => String }) id: string) {
    return this.findOneUserUseCase.execute(id);
  }

  @Mutation(() => UserType)
  updateUser(@Args('input') input: UpdateUserInput) {
    return this.updateUserUseCase.execute(input.id, input);
  }

  @Mutation(() => UserType)
  removeUser(@Args('id', { type: () => String }) id: string) {
    return this.deleteUserUseCase.execute(id);
  }
}
