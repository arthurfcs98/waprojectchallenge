import { MoviesRepository } from '../../repositories/implementations/MoviesRepository';
import { ListMoviesUseCase } from './ListMoviesUseCase';

const moviesRepository = MoviesRepository.getInstance();

const listMoviesUseCase = new ListMoviesUseCase(moviesRepository);

export { listMoviesUseCase };
