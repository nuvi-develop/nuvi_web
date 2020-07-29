import { apiClient } from "../client";

export const api = {
  registerTraditional: async userRegisterInfo => {
    return await apiClient.post(
      "/api/auth/registerTraditional",
      userRegisterInfo
    );
  },
  registerSocial: async userRegisterInfo => {
    return await apiClient.post("/api/auth/registerSocial", userRegisterInfo);
  },

  loginTraditional: async userLoginInfo => {
    return await apiClient.post("/api/auth/loginTraditional", userLoginInfo);
  },

  loginSocial: async userLoginInfo => {
    return await apiClient.post("/api/auth/loginSocial", userLoginInfo);
  },

  checkEmail: async emailAddress => {
    return await apiClient.post("/api/auth/checkEmail", emailAddress);
  },
  logout: async () => {
    return await apiClient.get("/api/auth/logout");
  }
};
