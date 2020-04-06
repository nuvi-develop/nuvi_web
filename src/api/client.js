import axios from "axios";

import { apiRequestInterceptor, apiResponseInterceptor } from "./helpler";

const url = "http://localhost:5000";

const apiClient = axios.create({
  baseURL: url
  // validateStatus: status => status < 500
});

apiClient.interceptors.request.use(apiRequestInterceptor);
// apiClient.interceptors.response.use(apiResponseInterceptor)

export { apiClient };
