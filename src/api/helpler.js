import { getAuthCookie } from "data/cookie";

export const apiRequestInterceptor = req => {
  const token = getAuthCookie();
  if (token) {
    req.headers["x-access-token"] = token;
  }
  return req;
};

// 나중에 적용하고 해당 form 에 맞게 기존코드 고치기
export const apiResponseInterceptor = [
  res => {
    const { response, error } = res.data;
    if (error) {
      return Promise.reject(JSON.stringify(error, null, 2));
    } else {
      return response;
    }
  },
  error => Promise.reject(error)
];
