import { movieApi } from '../../../../shared/api/MovieApi';
import { AppError } from '../../../../shared/errors/AppError';
import { Movie } from '../../entities/Movie';
import { IMoviesRepository } from '../../repositories/IMoviesRepository';

class RefreshMoviesUseCase {
    constructor(private moviesRepository: IMoviesRepository) {}

    async execute(refresh_page: number) {
        if (refresh_page > 500)
            throw new AppError(
                'refresh_page must be less than or equal to 500',
                422,
            );

        const { data: responseData1 } = await movieApi.get('/movie/popular', {
            params: {
                page: 2 * refresh_page - 1,
            },
        });

        const { data: responseData2 } = await movieApi.get('/movie/popular', {
            params: {
                page: 2 * refresh_page,
            },
        });

        const movies = [
            ...(responseData1.results as Movie[]),
            ...(responseData2.results as Movie[]),
        ];

        movies.forEach(movie => {
            movie.poster_path = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
            delete movie.id;
        });

        await this.moviesRepository.clearMoviesTable();
        await this.moviesRepository.InsertMoviesByArray(movies);

        return;
    }
}

export { RefreshMoviesUseCase };
