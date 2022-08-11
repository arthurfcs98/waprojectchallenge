import { DataSource } from 'typeorm';
import { v4 } from 'uuid';
import { defaultDataSource } from '../../../../database';
import request from 'supertest';
import { app } from '../../../../app';

let connection: DataSource;
describe('List movies', () => {
    beforeAll(async () => {
        connection = await defaultDataSource.initialize();
        await connection.runMigrations();
        await connection.query(`
            INSERT INTO MOVIES(id, title, original_language, overview, poster_path, release_date, vote_average)
            VALUES
                ('${v4()}','TEST','TEST','TEST','TEST','NOW()','123'),
                ('${v4()}','TEST','TEST','TEST','TEST','NOW()','123'),
                ('${v4()}','TEST','TEST','TEST','TEST','NOW()','123'),
                ('${v4()}','TEST','TEST','TEST','TEST','NOW()','123'),
                ('${v4()}','TEST','TEST','TEST','TEST','NOW()','123'),
                ('${v4()}','TEST','TEST','TEST','TEST','NOW()','123'),
                ('${v4()}','TEST','TEST','TEST','TEST','NOW()','123'),
                ('${v4()}','TEST','TEST','TEST','TEST','NOW()','123'),
                ('${v4()}','TEST','TEST','TEST','TEST','NOW()','123'),
                ('${v4()}','TEST','TEST','TEST','TEST','NOW()','123'),
                ('${v4()}','TEST','TEST','TEST','TEST','NOW()','123'),
                ('${v4()}','TEST','TEST','TEST','TEST','NOW()','123');
        `);
    });
    afterAll(async () => {
        await connection.dropDatabase();
        await connection.destroy();
    });

    it('Should be able to list movies', async () => {
        const response = await request(app).get('/?page=1');
        expect(response.status).toBe(200);
        expect(response.body.length).toEqual(10);
    });

    it('Should not be able to list movies on database with wrong params type', async () => {
        const response = await request(app).post('/?page=asfjkh');
        expect(response.status).toEqual(400);
        expect(response.body).toHaveProperty('message');
    });

    it('Should not be able to list movies on database with missing params', async () => {
        const response = await request(app).post('/');
        expect(response.status).toEqual(400);
        expect(response.body).toHaveProperty('message');
    });
});
