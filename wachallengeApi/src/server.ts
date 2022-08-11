import cors from 'cors';
import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import { defaultDataSource } from './database';
import { router } from './routes';
import { AppError } from './shared/errors/AppError';

defaultDataSource
    .initialize()
    .then(() => console.log('Database Connected!!'))
    .catch(err => console.error(err));

const app = express();

app.use(express.json());
app.use(cors());

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
app.listen(5001, () => console.log('Server is running on port 5001'));
