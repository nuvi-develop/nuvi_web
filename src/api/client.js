import axios from "axios";

import { apiRequestInterceptor, apiResponseInterceptor } from "./helpler";

const env = process.env.NODE_ENV;
const awsHttpOnly = "http://nuviapi-env.ap-northeast-2.elasticbeanstalk.com/";
const creatorLinkCname = "https://api.nuvi-labs.com";
const local = "http://localhost:5000";
let url = creatorLinkCname;
if (env === "development") {
  url = awsHttpOnly;
}

const apiClient = axios.create({
  baseURL: url
  // validateStatus: status => status < 500
});

apiClient.interceptors.request.use(apiRequestInterceptor);
apiClient.interceptors.response.use(...apiResponseInterceptor);

export { apiClient };
