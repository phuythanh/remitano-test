import IconThumbDown from 'app/icons/IconThumbDown';
import IconThumbUp from 'app/icons/IconThumbUp';
import { MovieResponse } from 'app/types/movie';

interface IProps {
  movie: MovieResponse;
}
export const Card = ({ movie }: IProps) => (
  <div className="flex justify-center m-5 space-x-12  rounded overflow-hidden shadow-lg ">
    <div className="flex-shrink">
      <iframe
        src={movie.url}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="video"
        width="420"
        height="315"
      />
    </div>
    <div className="">
      <div className="text-red-600 font-bold ">{movie.title}</div>
      <div>Shared by: {movie.userName}</div>
      <div className="flex space-x-3">
        <div className="flex ">
          <span className="mr-1">{movie.like}</span>
          <IconThumbUp />
        </div>
        <div className="flex">
          <span className="mr-1">{movie.dislike}</span>
          <IconThumbDown />
        </div>
      </div>
      <div>Description:</div>
      <div className="text-black font-bold  ">{movie.description}</div>
    </div>
  </div>
);
