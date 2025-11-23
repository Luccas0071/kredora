import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('categories')
export class CategoryOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
