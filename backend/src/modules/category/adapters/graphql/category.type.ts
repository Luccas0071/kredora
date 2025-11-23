import { Field, ObjectType, ID } from '@nestjs/graphql';
import { UserType } from '../../../user/adapters/graphql/user.type';

@ObjectType()
export class CategoryType {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => UserType)
  user: UserType;
}
