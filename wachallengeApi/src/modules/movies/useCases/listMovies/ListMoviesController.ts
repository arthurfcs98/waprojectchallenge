import { Request, Response } from 'express';
import { listMoviesUseCase } from '.';
import { AppError } from '../../../../shared/errors/AppError';

class ListMoviesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const refresh_page = request.query.page;

        if (!refresh_page || isNaN(Number(refresh_page)))
            throw new AppError('Missing or wrong query params');

        const movies = await listMoviesUseCase.execute(Number(refresh_page));

        return response.status(200).json(movies);
    }
}

export { ListMoviesController };
