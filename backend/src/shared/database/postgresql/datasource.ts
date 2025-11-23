import { DataSource } from 'typeorm';
import { config as dotenvConfig } from 'dotenv';
dotenvConfig(); // carrega .env dentro do CLI

// Entities
import { UserOrmEntity } from '../../../modules/user/infrastructure/entities/user.orm-entity';
import { CategoryOrmEntity } from '../../../modules/category/infrastructure/entities/category.orm-entity';

// Migrations
const migrationsPath = __dirname + '/../../migrations/*.js';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT ?? 5432),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: false,
  entities: [UserOrmEntity, CategoryOrmEntity],
  migrations: [migrationsPath],
});
