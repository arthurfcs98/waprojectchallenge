import { DataSource } from 'typeorm';

export const defaultDataSource = new DataSource({
    type: 'postgres',
    port: process.env.NODE_ENV === 'test' ? 5438 : 5439,
    host: 'localhost',
    username: 'docker',
    password: 'wachallenge2022',
    database: 'wachallenge',
    entities: ['./src/modules/**/entities/*.ts'],
    migrations: ['./src/database/migrations/*.ts'],
});
