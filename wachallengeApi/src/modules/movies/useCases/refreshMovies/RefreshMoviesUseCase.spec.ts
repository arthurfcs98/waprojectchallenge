import { AppError } from '../../../../shared/errors/AppError';
import { IMoviesRepository } from '../../repositories/IMoviesRepository';
import { InMemoryMoviesRepository } from '../../repositories/in-memory/InMemoryMoviesRepository';
import { RefreshMoviesUseCase } from './RefreshMoviesUseCase';

let refreshMoviesUseCase: RefreshMoviesUseCase;
let moviesRepository: IMoviesRepository;

describe('Refresh Movies', () => {
    beforeEach(() => {
        moviesRepository = new InMemoryMoviesRepository();
        refreshMoviesUseCase = new RefreshMoviesUseCase(moviesRepository);
    });

    it('Should be able to refresh the movie list', async () => {
        const clearDataBase = jest.spyOn(moviesRepository, 'clearMoviesTable');
        const insertMovies = jest.spyOn(
            moviesRepository,
            'InsertMoviesByArray',
        );
        const refresh_page = 1;

        await refreshMoviesUseCase.execute(refresh_page);

        expect(clearDataBase).toBeCalled();
        expect(insertMovies).toBeCalled();
    });

    it('Should not be able to refresh the movie list with a refresh_page more than 500 ', async () => {
        const refresh_page = 501;
        await expect(
            refreshMoviesUseCase.execute(refresh_page),
        ).rejects.toEqual(
            new AppError('page must be less than or equal to 500', 422),
        );
    });
});
