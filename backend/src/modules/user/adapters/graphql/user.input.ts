import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}

@InputType()
export class UpdateUserInput {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
