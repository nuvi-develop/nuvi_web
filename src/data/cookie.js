import Cookies from "js-cookie";

const API_TOKEN = "API_TOKEN";

export const setAuthCookie = apiToken => {
  Cookies.set(API_TOKEN, apiToken);
};

export const getAuthCookie = () => {
  return Cookies.getJSON(API_TOKEN);
};

export const clearAuthCookie = () => {
  Cookies.remove(API_TOKEN);
};
