import { MoviesRepository } from '../../repositories/implementations/MoviesRepository';
import { RefreshMoviesUseCase } from './RefreshMoviesUseCase';

const movieRepository = MoviesRepository.getInstance();

const refreshMoviesUseCase = new RefreshMoviesUseCase(movieRepository);

export { refreshMoviesUseCase };
