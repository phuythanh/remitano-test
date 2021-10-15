import { MovieRequest, MovieResponse } from 'app/types/movie';
import { fetchAsync } from '../utils/fetch';
const baseApi = process.env.REACT_APP_BASE_API_URL;
export const fetchMovies = (userId?: number | null): Promise<MovieResponse[]> => fetchAsync(`${baseApi}/api/video`);

export const createMovie = (movie: MovieRequest): Promise<MovieResponse> =>
  fetchAsync(`${baseApi}/api/video`, {
    method: 'POST',
    body: movie,
  });
