import React from "react";
import Login from "./Login";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NotFound = () => {
  const loggedIn = useSelector((state) => !!state.authUser);
  if (!loggedIn) return <Login />;
  return (
    <div className=" h-screen grid place-content-center">
      <h1 className=" text-6xl text-center font-extrabold">Error 404</h1>
      <p className=" text-center font-semibold text-2xl">Page not found</p>
      <Link
        to="/login"
        className=" text-center block text-2xl font-semibold mt-20 text-blue-500 underline"
      >
        Login
      </Link>
    </div>
  );
};

export default NotFound;
