import { apiClient } from "../client";

export const api = {
  updatePassword: async updatePasswordInfo => {
    return await apiClient
      .post(`/api/mail/updatePassword`, updatePasswordInfo)
      .catch(error => {
        throw new Error(error.response.data.message);
      });
  }
};
