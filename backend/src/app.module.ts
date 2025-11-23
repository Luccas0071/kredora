import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { AppDataSource } from './shared/database/postgresql/datasource';

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
