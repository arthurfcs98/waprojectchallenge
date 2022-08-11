import { Movie } from '../../entities/Movie';
import { IMoviesRepository } from '../../repositories/IMoviesRepository';
import { InMemoryMoviesRepository } from '../../repositories/in-memory/InMemoryMoviesRepository';
import { ListMoviesUseCase } from './ListMoviesUseCase';

let listMoviesUseCase: ListMoviesUseCase;
let moviesRepository: IMoviesRepository;

describe('List Movies', () => {
    beforeEach(() => {
        moviesRepository = new InMemoryMoviesRepository();
        listMoviesUseCase = new ListMoviesUseCase(moviesRepository);
    });

    it('Should be able to list movie with pagination', async () => {
        const movie = new Movie();

        Object.assign(movie, {
            original_language: 'en',
            overview: 'example overview',
            poster_path: '/asdk',
            release_date: 'now()',
            title: 'jest test',
            vote_average: 7.6,
        });

        await moviesRepository.InsertMoviesByArray(Array(10).fill(movie));
        const page = 1;

        const movies = await listMoviesUseCase.execute(page);

        expect(movies.length).toEqual(10);
        expect(movies[0]).toHaveProperty('id');
    });
});
