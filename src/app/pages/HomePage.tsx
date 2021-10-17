import { List } from '../components/List/List';
import { Card } from '../components/Card/Card';
import { useFetch } from 'app/hooks/useFetch';
import { MovieResponse } from 'app/types/movie';
import { fetchMovies } from 'app/apis/moveClient';
import { Spinner } from 'app/components/Spinner/Spinner';
export const HomePage = () => {
  const { loading: loadingMovie, data: originalMovies } = useFetch<MovieResponse[]>(fetchMovies);
  return (
    <>
      {loadingMovie ? (
        <Spinner />
      ) : (
        <>
          <List
            className="flex-col justify-center lg:w-60rem"
            items={originalMovies || []}
            renderItem={(item: MovieResponse) => <Card movie={item} />}
          />
        </>
      )}
    </>
  );
};
