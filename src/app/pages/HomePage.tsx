import { List } from '../components/List/List';
import { Card } from '../components/Card/Card';
import { useFetch } from 'app/hooks/useFetch';
import { IMovie } from 'app/types/movie';
import { fetchMovies } from 'app/apis/moveClient';
import { Spinner } from 'app/components/Spinner/Spinner';
const HomePage = () => {
  const { loading: loadingMovie, data: originalMovies } = useFetch<IMovie[]>(fetchMovies);
  return (
    <div>
      {loadingMovie ? (
        <Spinner />
      ) : (
        <div className="flex-col justify-center">
          <List
            className=""
            items={originalMovies || []}
            renderItem={(item: IMovie, key: number) => <Card movie={item} key={key} />}
          />
        </div>
      )}
    </div>
  );
};

export default HomePage;
