import React from "react";
import Movie from "./Movie";
const ListMovies = ({ movies }) => {
  return movies.map((m, index) => <Movie key={index} movie={m}></Movie>);
};

export default ListMovies;
