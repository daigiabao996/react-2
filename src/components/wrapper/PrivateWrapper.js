import React from "react";
import Login from "../../pages/Login";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const PrivateWrapper = () => {
  const loggedIn = useSelector((state) => !!state.authUser);
  return (
    <div className=" md:mx-10 mx-4">{loggedIn ? <Outlet /> : <Login />}</div>
  );
};

export default PrivateWrapper;
