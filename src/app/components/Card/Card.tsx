import IconThumbDown from 'app/icons/IconThumbDown';
import IconThumbUp from 'app/icons/IconThumbUp';
import { MovieResponse } from 'app/types/movie';

interface IProps {
  movie: MovieResponse;
}
export const Card = ({ movie }: IProps) => (
  <div className="lg:flex justify-center m-5 lg:space-x-12  rounded overflow-hidden shadow-lg p-5">
    <div className="flex">
      <iframe
        src={`https://www.youtube.com/embed/${movie.youtubeId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="video"
        width="420"
        height="315"
      />
    </div>
    <div className="flex-1">
      <div className="text-red-600 font-bold break-normal ">{movie.title}</div>
      <div>Shared by: {movie.userName}</div>
      <div className="flex space-x-3 break-normal">
        <div className="flex ">
          <span className="mr-1">{movie.like}</span>
          <IconThumbUp />
        </div>
        <div className="flex break-normal">
          <span className="mr-1">{movie.dislike}</span>
          <IconThumbDown />
        </div>
      </div>
      <div>Description:</div>
      <div className="text-black font-bold break-normal ">
        {movie.description?.length > 200 ? `${movie.description.substring(0, 200)}...` : movie.description}
      </div>
    </div>
  </div>
);
