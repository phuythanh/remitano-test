import React from 'react';
import IconHome from '../../icons/IconHome';
import Login from '../Login';
import { Link } from 'react-router-dom';
const AppHeader = () => {
  return (
    <div className="border-b-2 border-black">
      <div className="flex justify-between py-3 items-end">
        <div className="flex  items-end">
          <Link to="/">
            <IconHome />
          </Link>
          <span className="text-2xl font-bold">Funny Movies</span>
        </div>
        <div className="flex items-end">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
