import { getAuthCookie } from "data/cookie";

//인증처리하는데 용이하다
export const apiRequestInterceptor = req => {
  const token = getAuthCookie();
  if (token) {
    req.headers["x-access-token"] = token;
  }
  return req;
};

//response error handling 처리하기에 용이하다
export const apiResponseInterceptor = [
  res => {
    return res;
    // const { response, error } = res.data;
    // if (error) {
    //   console.log("error1", error);
    //   return Promise.reject(JSON.stringify(error, null, 2));
    // } else {
    //   return response;
    // }
  },
  error => {
    error.message = error.response.data.message;
    error.status = error.response.data.error.status;
    throw error;
  }
];
