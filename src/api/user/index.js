import { apiClient } from "../client";

export const api = {
  getWaitingAdmin: async () => {
    return await apiClient.get("/api/user/waitingAdmin").catch(error => {
      console.log("error.messege", error.messege);
      throw Error(error.messege);
    });
  },
  getAdminList: async () => {
    return await apiClient.get("api/user/adminList").catch(error => {
      console.log("error.messege", error.messege);
      throw Error(error.messege);
    });
  },
  deleteUser: async userId => {
    return await apiClient.delete(`/api/user/${userId}`).catch(error => {
      console.log("error.messege", error.messege);
      throw Error(error.messege);
    });
  },
  toggleApproved: async userId => {
    return await apiClient
      .put(`/api/user/toggleApproved/${userId}`)
      .catch(error => {
        console.log("error.messege", error.messege);
        throw Error(error.messege);
      });
  },
  whoAmI: async token => {
    const headers = { "x-access-token": token };
    return await apiClient.get("api/user/me", { headers }).catch(error => {
      console.log("error.messege", error.messege);
      throw Error(error.messege);
    });
  }
};
