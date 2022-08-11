import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableMovies1660225411349 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'movies',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'title',
                        type: 'varchar',
                    },
                    {
                        name: 'original_lenguage',
                        type: 'varchar',
                    },
                    {
                        name: 'overview',
                        type: 'varchar',
                    },
                    {
                        name: 'poster_path',
                        type: 'varchar',
                    },
                    {
                        name: 'release_date',
                        type: 'timestamp',
                    },
                    {
                        name: 'vote_average',
                        type: 'numeric',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('movies');
    }
}
