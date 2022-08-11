import { Movie } from '../entities/Movie';

interface IMoviesRepository {
    clearMoviesTable(): Promise<void>;
    InsertMoviesByArray(movies: Movie[]): Promise<void>;
    getMoviesByRange(start: number, count: number): Promise<Movie[]>;
}

export { IMoviesRepository };
