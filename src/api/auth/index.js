import { apiClient } from "../client";

export const api = {
  register: async userRegisterInfo => {
    return await apiClient
      .post("/api/auth/register", userRegisterInfo)
      .catch(error => {
        throw new Error(error.response.data.message);
      });
  },

  login: async userLoginInfo => {
    return await apiClient
      .post("/api/auth/login", userLoginInfo)
      .catch(error => {
        throw new Error(error.response.data.message);
      });
  },

  checkEmail: async emailAddress => {
    return await apiClient
      .post("/api/auth/checkEmail", emailAddress)
      .catch(error => {
        throw new Error(error.response.data.message);
      });
  }
};
