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
  baseURL: url
  // validateStatus: status => status < 500
});

apiClient.interceptors.request.use(apiRequestInterceptor);
apiClient.interceptors.response.use(...apiResponseInterceptor);

export { apiClient };
