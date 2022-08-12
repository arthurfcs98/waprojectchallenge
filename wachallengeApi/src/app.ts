import cors from 'cors';
import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import { defaultDataSource } from './database';
import { router } from './routes';
import { AppError } from './shared/errors/AppError';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../swagger.json';

defaultDataSource
    .initialize()
    .then(() => console.log('Database Connected!!'))
    .catch(err => console.error(err));

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError)
            return response
                .status(err.statusCode)
                .json({ message: err.message });

        return response.status(500).json({
            status: 'error',
            message: `Internal Server Error - ${err.message}`,
        });
    },
);

export { app };
