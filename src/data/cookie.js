import Cookies from "js-cookie";

const USER_SESSION = "userSession";

export const setAuthCookie = userSession => {
  Cookies.set(USER_SESSION, userSession);
};

export const getAuthCookie = () => {
  return Cookies.getJSON(USER_SESSION);
};

export const clearAuthCookie = () => {
  Cookies.remove(USER_SESSION);
};
