import React from "react";

const Login = () => {
  return (
    <div className="flex-1">
      <form className="flex space-x-4">
        <input
          className=" shadow bg-white rounded  appearance-none border leading-tight focus:outline-none focus:shadow-outline px-1 py-1 color:black"
          type="text"
          name="email"
          placeholder="email"
        ></input>
        <input
          className="shadow bg-white rounded  appearance-none border leading-tight focus:outline-none focus:shadow-outline px-1 py-1"
          type="password"
          name="password"
          placeholder="password"
        ></input>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Login / Register
        </button>
      </form>
    </div>
  );
};

export default Login;
