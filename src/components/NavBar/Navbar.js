import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { handleLogoutAuthedUser } from "../../actions/authedUser";

const Navbar = () => {
  const authUser = useSelector((state) => state.authUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandle = () => {
    dispatch(handleLogoutAuthedUser());
    navigate("/login");
  };
  return (
    <div className="navbar bg-base-100">
      {authUser && (
        <>
          <div className="flex-1">
            <ul data-testid="navbuttons" className="menu menu-horizontal px-1">
              <li>
                <Link data-testid="home-link" to={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link data-testid="new-poll-link" to={"/add"}>
                  New Poll
                </Link>
              </li>
              <li>
                <Link data-testid="LeaderBoard-link" to={"/LeaderBoard"}>
                  LeaderBoard
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-2">
            <span className="mr-2">
              {authUser.avatarURL ? (
                <img
                  src={authUser.avatarURL}
                  alt={authUser.name}
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <img
                  src={`https://avatar.iran.liara.run/username?username=${authUser.name}`}
                  alt={authUser.name}
                  className="w-10 h-10 rounded-full"
                />
              )}
            </span>
            <h2 data-testid="authUserName" className="text-center text-xl mr-4">
              {authUser.name}
            </h2>
            <button data-testid="logout-link" onClick={logoutHandle}>
              Logout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
