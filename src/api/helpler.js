import { getAuthCookie } from "data/cookie";

export const apiRequestInterceptor = req => {
  // 원래는 이런식으로 인증했으나, 지금은 httpOnly 를 사용해서 따로 쿠키를 가지고와서 작업하는 내용이 없습니다.
  // const token = getAuthCookie();
  // if (token) {
  //   req.headers["x-access-token"] = token;
  // }
  return req;
};

//response error handling 처리하기에 용이하다
export const apiResponseInterceptor = [
  res => {
    return res;
    // data 에 error 정보 담아 보낼경우 이렇게 하면되지만, 보통 api 에서 error 를 throw 하고 error handler 에서 처리되기때문에 사용하지 않음
    // const { response, error } = res.data;
    // if (error) {
    //   console.log("error", error);
    //   return Promise.reject(JSON.stringify(error, null, 2));
    // } else {
    //   return response;
    // }
  },
  // 이렇게 단순화 해서 보냅니다.
  error => {
    error.message = error.response.data.message;
    error.status = error.response.data.error.status;
    throw error;
  }
];
