import { IMovie } from 'app/types/movie';
import { fetchAsync } from '../utils/fetch';
const baseApi = process.env.REACT_APP_BASE_API_URL;
export const fetchMovies = (userId?: number | null): Promise<IMovie[]> => fetchAsync(`${baseApi}/api/video`);
