import { apiClient } from "../client";

export const api = {
  getDepartmentList: async () => {
    return await apiClient.get("/api/department/list").catch(error => {
      console.log("error.message", error.message);
      throw Error(error.message);
    });
  }
};
