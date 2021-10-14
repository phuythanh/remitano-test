import React, { useState } from 'react';
import ListMovies from '../components/ListMovies';
const HomePage = () => {
  const [movies, setMovies] = useState<any[]>([
    {
      title: 'Home',
      url: 'http://a',
      description: 'aa',
    },
  ]);
  return (
    <div className="flex justify-center">
      <ListMovies movies={movies} />
    </div>
  );
};

export default HomePage;
