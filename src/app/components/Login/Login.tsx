import { ACCESS_TOKEN_KEY } from 'app/apis/common/constants';
import { createUser, getUserByEmail } from 'app/apis/userClient';
import { UserRequest } from 'app/types/user';
import { useState } from 'react';
import { ChangeEvent, SyntheticEvent } from 'react';
import MD5 from 'crypto-js/md5';
import { createFakeToken } from 'app/utils/token';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { authorized, addToken, emailLoggedIn } from '../../store/authSlice';
import { useHistory } from 'react-router';
export const Login = () => {
  const history = useHistory();
  const isAuthorized = useSelector(authorized);
  const email = useSelector(emailLoggedIn);
  const dispatch = useDispatch();
  const [user, setUser] = useState<UserRequest>({
    email: '',
    password: '',
  });

  const onFinish = async (event: SyntheticEvent) => {
    event.preventDefault();
    try {
      const pass = MD5(user.password).toString();
      const newUser = { email: user.email, password: pass };
      const result = await getUserByEmail(newUser.email);
      if (!result || result.length === 0) {
        const addedUser = await createUser(newUser);
        const token = createFakeToken(addedUser.email, addedUser.id);
        dispatch(addToken({ token, email: addedUser.email }));
        toast.info(`Created ${addedUser.email} and logged in successfully`);
      } else {
        const [userDetail] = result;
        if (userDetail.email === newUser.email && userDetail.password === newUser.password) {
          const token = createFakeToken(userDetail.email, userDetail.id);
          dispatch(addToken({ token, email: userDetail.email }));
          toast.info('Logged in successfully');
        } else {
          toast.error('wrong email or password');
        }
      }
    } catch (err) {}
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };
  const logout = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(addToken({ token: '', email: '' }));
  };

  const shareMovie = (event: SyntheticEvent) => {
    event.preventDefault();
    history.push('/share');
  };

  const showUserInfo = () => (
    <div className="flex space-x-4 con items-center">
      <div>Welcome: {email}</div>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={shareMovie}
      >
        Share a movie
      </button>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );

  const showLogin = () => (
    <>
      <form className="flex space-x-4" onSubmit={onFinish}>
        <input
          className=" shadow bg-white rounded  appearance-none border leading-tight focus:outline-none focus:shadow-outline px-1 py-1 color:black"
          type="email"
          name="email"
          placeholder="email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <input
          className="shadow bg-white rounded  appearance-none border leading-tight focus:outline-none focus:shadow-outline px-1 py-1"
          type="password"
          name="password"
          placeholder="password"
          value={user.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Login / Register
        </button>
      </form>
    </>
  );
  return <div className="flex">{!isAuthorized ? showLogin() : showUserInfo()}</div>;
};
