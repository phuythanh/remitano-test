import { MovieResponse } from 'app/types/movie';
import { fetchAsync } from '../utils/fetch';
const baseApi = process.env.REACT_APP_BASE_API_URL;
export const fetchMovies = (userId?: number | null): Promise<MovieResponse[]> => fetchAsync(`${baseApi}/api/video`);
