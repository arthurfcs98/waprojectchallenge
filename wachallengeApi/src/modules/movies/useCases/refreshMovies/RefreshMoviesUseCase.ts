import { movieApi } from '../../../../shared/api/MovieApi';
import { AppError } from '../../../../shared/errors/AppError';
import { Movie } from '../../entities/Movie';
import { IMoviesRepository } from '../../repositories/IMoviesRepository';

class RefreshMoviesUseCase {
    constructor(private moviesRepository: IMoviesRepository) {}

    async execute(refresh_page = 1) {
        const { data: firstPageMovies } = await movieApi.get('/movie/popular', {
            params: {
                page: 2 * refresh_page - 1,
            },
        });
        const { data: secondPageMovies } = await movieApi.get(
            '/movie/popular',
            {
                params: {
                    page: 2 * refresh_page,
                },
            },
        );

        const movies = [
            ...(firstPageMovies.results as Movie[]),
            ...(secondPageMovies.results as Movie[]),
        ];

        movies.forEach(movie => delete movie.id);

        await this.moviesRepository.clearMoviesTable();
        await this.moviesRepository.InsertMoviesByArray(movies);

        return;
    }
}

export { RefreshMoviesUseCase };
