import { LOGIN_AUTHED_USER, LOGOUT_AUTHED_USER } from "../actions/authedUser";

const authUser = (state = null, action) => {
  const authUser = localStorage.getItem("authedUser") || null;
  switch (action.type) {
    case LOGIN_AUTHED_USER:
      return action.authedUser;
    case LOGOUT_AUTHED_USER:
      return null;
    default:
      return JSON.parse(authUser);
  }
};

export default authUser;
