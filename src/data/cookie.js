import Cookies from "js-cookie";

const API_TOKEN = "API_TOKEN";

// 여기있는 함수들은 사용하지 않습니다.  httpOnly cookie 를 이용하기 때문에
export const setAuthCookie = apiToken => {
  Cookies.set(API_TOKEN, apiToken);
};

export const getAuthCookie = () => {
  return Cookies.getJSON(API_TOKEN);
};

export const clearAuthCookie = () => {
  Cookies.remove(API_TOKEN);
};
