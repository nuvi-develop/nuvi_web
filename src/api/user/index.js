import { apiClient } from "../client";

export const api = {
  getWaitingAdmin: async () => {
    return await apiClient.get("/api/user/waitingAdmin");
  },
  getAdminList: async () => {
    return await apiClient.get("api/user/adminList");
  },
  deleteUser: async userId => {
    return await apiClient.delete(`/api/user/${userId}`);
  },
  updateUserPassword: async updateInfo => {
    return await apiClient.put(`/api/user/updateUserPassword`, updateInfo);
  },
  toggleApproved: async userId => {
    return await apiClient.put(`/api/user/toggleApproved/${userId}`);
  },
  whoAmI: async token => {
    const headers = { "x-access-token": token };
    return await apiClient.get("api/user/me", { headers });
  }
};
