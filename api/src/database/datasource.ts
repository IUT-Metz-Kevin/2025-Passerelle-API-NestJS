import { DataSource, DataSourceOptions } from 'typeorm';

import { dbConfig } from '../config/db';

export const AppDataSource = new DataSource(dbConfig);
