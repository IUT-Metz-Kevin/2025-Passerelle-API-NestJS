import { DataSourceOptions } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export type DbConfig<T extends DataSourceOptions> = T;

export const dbConfig: DbConfig<PostgresConnectionOptions> = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'mvc_sample',
  synchronize: true,
};
