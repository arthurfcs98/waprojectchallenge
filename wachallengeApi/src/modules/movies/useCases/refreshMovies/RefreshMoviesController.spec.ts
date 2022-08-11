import { DataSource } from 'typeorm';
import { defaultDataSource } from '../../../../database';
import request from 'supertest';
import { app } from '../../../../app';

let connection: DataSource;
describe('Refresh Movies Controller', () => {
    beforeAll(async () => {
        connection = await defaultDataSource.initialize();
        await connection.runMigrations();
    });
    afterAll(async () => {
        await connection.dropDatabase();

        await connection.destroy();
    });

    it('Should be able to refresh movies list on database', async () => {
        const response = await request(app).post('/?refresh_page=1');
        expect(response.status).toEqual(200);
    });

    it('Should not be able to refresh movies list on database with wrong params type', async () => {
        const response = await request(app).post('/?refresh_page=asfjkh');
        expect(response.status).toEqual(400);
        expect(response.body).toHaveProperty('message');
    });

    it('Should not be able to refresh movies list on database with missing params', async () => {
        const response = await request(app).post('/');
        expect(response.status).toEqual(400);
        expect(response.body).toHaveProperty('message');
    });
});
