import { Movie } from '../../entities/Movie';
import { IMoviesRepository } from '../../repositories/IMoviesRepository';

class ListMoviesUseCase {
    constructor(private moviesRepository: IMoviesRepository) {}

    async execute(page: number): Promise<Movie[]> {
        const startCount = page === 1 ? 0 : 10 * (page - 1);

        const movies = await this.moviesRepository.getMoviesByRange(
            startCount,
            10,
        );

        return movies;
    }
}

export { ListMoviesUseCase };
