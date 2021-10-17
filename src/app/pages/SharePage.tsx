import { fetchAsync } from 'app/utils/fetch';
import { useState, ChangeEvent, SyntheticEvent } from 'react';
import getYoutubeId from 'get-youtube-id';
import { getYoutube } from 'app/apis/userClient';
import { createMovie } from 'app/apis/moveClient';
import { emailLoggedIn } from '../store/authSlice';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';

export const SharePage = () => {
  const history = useHistory();
  const email = useSelector(emailLoggedIn);
  const [url, setUrl] = useState<string>('');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };
  const onFinish = async (event: SyntheticEvent) => {
    event.preventDefault();
    debugger;
    const id = getYoutubeId(url);
    if (id) {
      try {
        const youtubeInfo = await getYoutube(id);
        const {
          items: [info],
        } = youtubeInfo;
        if (info) {
          await createMovie({
            url: url,
            youtubeId: id,
            description: info.snippet.description,
            title: info.snippet.title,
            userName: email,
          });

          toast.info(`Share a youtube successfully`);
          history.push('/');
          return;
        }
      } catch (e) {}
    }
    toast.error(`Please input valid youtube url`);
  };
  return (
    <form className="md:w-1/3 mt-24" onSubmit={onFinish}>
      <fieldset className="border border-gray-500 p-5">
        <legend>Share a YouTube movie</legend>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Youtube URL</label>
          </div>
          <div className="md:w-2/3">
            <input
              className=" shadow bg-white rounded  appearance-none border leading-tight focus:outline-none focus:shadow-outline px-1 py-1 color:black w-5/6"
              type="url"
              name="url"
              placeholder="url"
              value={url}
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3" />
          <div className="md:w-2/3">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-5/6"
            >
              Share
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  );
};
