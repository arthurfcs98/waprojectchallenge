import { Column, Entity, PrimaryColumn, Timestamp } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('movies')
class Movie {
    @PrimaryColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    original_language: string;

    @Column()
    overview: string;

    @Column()
    poster_path: string;

    @Column()
    release_date: Date;

    @Column()
    vote_average: number;

    constructor() {
        if (!this.id) this.id = uuidV4();
    }
}

export { Movie };
