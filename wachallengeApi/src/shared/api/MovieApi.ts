import axios from 'axios';

export const movieApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: process.env.TMDB_KEY,
        language: 'pt-BR',
    },
});
