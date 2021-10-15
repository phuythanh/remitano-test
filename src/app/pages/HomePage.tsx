import { List } from '../components/List/List';
import { Card } from '../components/Card/Card';
import { useFetch } from 'app/hooks/useFetch';
import { MovieResponse } from 'app/types/movie';
import { fetchMovies } from 'app/apis/moveClient';
import { Spinner } from 'app/components/Spinner/Spinner';
const HomePage = () => {
  const { loading: loadingMovie, data: originalMovies } = useFetch<MovieResponse[]>(fetchMovies);
  return (
    <>
      {loadingMovie ? (
        <Spinner />
      ) : (
        <>
          <List
            className="flex-col justify-center lg:w-2/3"
            items={originalMovies || []}
            renderItem={(item: MovieResponse, key: number) => <Card movie={item} key={key} />}
          />
        </>
      )}
    </>
  );
};

export default HomePage;
