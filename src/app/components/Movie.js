import React, { useState } from "react";

const Movie = ({ movie }) => {
  return (
    <div className="flex justify-start">
      <div className="flex-shrink">{movie.url}</div>
      <div className="flex">
        <p>{movie.title}</p>
        <p>{movie.description}</p>
      </div>
    </div>
  );
};

export default Movie;
