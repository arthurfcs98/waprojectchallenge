import { DataSource } from 'typeorm';

export const defaultDataSource = new DataSource({
    type: 'postgres',
    port: 5439,
    host: 'localhost',
    username: 'docker',
    password: 'wachallenge2022',
    database: 'wachallenge',
    entities: ['./src/modules/**/entities/*.ts'],
    migrations: ['./src/database/migrations/*.ts'],
});
