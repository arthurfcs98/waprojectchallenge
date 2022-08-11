import { Request, Response } from 'express';
import { refreshMoviesUseCase } from '.';
import { AppError } from '../../../../shared/errors/AppError';

class RefreshMoviesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const refresh_page = request.query.refresh_page;

        if (!refresh_page || isNaN(Number(refresh_page)))
            throw new AppError('Missing or wrong query params');

        await refreshMoviesUseCase.execute(Number(refresh_page));

        return response.status(200).send();
    }
}

export { RefreshMoviesController };
