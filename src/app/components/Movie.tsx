interface IProps {
  movie: any;
}
const Movie = ({ movie }: IProps) => (
  <div className="flex justify-start">
    <div className="flex-shrink">{movie.url}</div>
    <div className="flex">
      <p>{movie.title}</p>
      <p>{movie.description}</p>
    </div>
  </div>
);

export default Movie;
