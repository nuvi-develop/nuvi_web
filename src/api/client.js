import axios from "axios";

const url = "http://localhost:5000";

const apiClient = axios.create({
  baseURL: url
  // validateStatus: status => status < 500
});

export { apiClient };
