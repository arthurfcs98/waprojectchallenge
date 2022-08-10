import cors from 'cors';
import express from 'express';
import 'express-async-error';
import 'reflect-metadata';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
    return response.json({ message: 'Hello World!' });
});

app.listen(5001, () => console.log('Server is running on port 5001'));
