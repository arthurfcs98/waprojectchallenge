import { Movie } from '../../entities/Movie';
import { IMoviesRepository } from '../IMoviesRepository';

class InMemoryMoviesRepository implements IMoviesRepository {
    movies: Movie[] = [];

    async clearMoviesTable(): Promise<void> {
        this.movies = [];
        return;
    }
    async InsertMoviesByArray(movies: Movie[]): Promise<void> {
        this.movies = [...this.movies, ...movies];
        return;
    }
    async getMoviesByRange(start: number, count: number): Promise<Movie[]> {
        return this.movies.slice(start, start + count);
    }
}

export { InMemoryMoviesRepository };
