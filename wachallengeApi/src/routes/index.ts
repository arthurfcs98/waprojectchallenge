import { Router } from 'express';
import { refreshMoviesUseCase } from '../modules/movies/useCases/refreshMovies';
import { RefreshMoviesController } from '../modules/movies/useCases/refreshMovies/RefreshMoviesController';

const router = Router();

const refreshMoviesController = new RefreshMoviesController();
router.post('/', refreshMoviesController.handle);

export { router };
