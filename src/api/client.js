import axios from "axios";

import { apiRequestInterceptor, apiResponseInterceptor } from "./helpler";
import { apiServer } from "config";

const env = process.env.REACT_APP_NODE_ENV
  ? process.env.REACT_APP_NODE_ENV
  : process.env.NODE_ENV;
const creatorLinkCname = apiServer.production;
const local = apiServer.development;
let url = local;
if (env === "production") {
  url = creatorLinkCname;
} else if (env === "staged") {
  url = apiServer.staged;
}

const apiClient = axios.create({
  baseURL: url,
  withCredentials: true
  //이런식으로 status 코드를 보고, error 를 정의할 수도 있습니다.
  // validateStatus: status => status < 500
});

//DEL LATER
// apiClient.interceptors.request.use(apiRequestInterceptor);
apiClient.interceptors.response.use(...apiResponseInterceptor);

export { apiClient };
