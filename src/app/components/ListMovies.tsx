import React from 'react';
import Movie from './Movie';
interface IProps {
  movies: any[];
}
const ListMovies = ({ movies }: IProps) => {
  return (
    <>
      {movies.map((m, index) => (
        <Movie key={index} movie={m} />
      ))}
    </>
  );
};

export default ListMovies;
