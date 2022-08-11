import { Request, Response } from 'express';
import { refreshMoviesUseCase } from '.';

class RefreshMoviesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const refresh_page = request.query.refresh_page;

        await refreshMoviesUseCase.execute(Number(refresh_page));

        return response.status(200).send();
    }
}

export { RefreshMoviesController };
