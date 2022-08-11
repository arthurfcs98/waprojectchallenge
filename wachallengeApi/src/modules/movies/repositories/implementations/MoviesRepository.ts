import { Repository } from 'typeorm';
import { defaultDataSource } from '../../../../database';
import { Movie } from '../../entities/Movie';
import { IMoviesRepository } from '../IMoviesRepository';

class MoviesRepository implements IMoviesRepository {
    private repository: Repository<Movie>;

    private static INSTANCE: MoviesRepository;

    constructor() {
        this.repository = defaultDataSource.getRepository(Movie);
    }

    public static getInstance(): MoviesRepository {
        if (!MoviesRepository.INSTANCE) {
            MoviesRepository.INSTANCE = new MoviesRepository();
        }
        return MoviesRepository.INSTANCE;
    }

    async clearMoviesTable(): Promise<void> {
        await this.repository.clear();
    }

    async InsertMoviesByArray(movies: Movie[]): Promise<void> {
        const dbMovies = this.repository.create(movies);

        await this.repository.insert(dbMovies);

        return;
    }
    async getMoviesByRange(start: number, count: number): Promise<Movie[]> {
        return await this.repository.find({
            take: count,
            skip: start,
        });
    }
}

export { MoviesRepository };
