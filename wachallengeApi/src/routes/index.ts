import { Router } from 'express';
import { ListMoviesController } from '../modules/movies/useCases/listMovies/ListMoviesController';
import { RefreshMoviesController } from '../modules/movies/useCases/refreshMovies/RefreshMoviesController';

const router = Router();

const refreshMoviesController = new RefreshMoviesController();
const listMoviesController = new ListMoviesController();
router.post('/', refreshMoviesController.handle);
router.get('/', listMoviesController.handle);

export { router };
