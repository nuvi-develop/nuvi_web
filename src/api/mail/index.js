import { apiClient } from "../client";

export const api = {
  sendTempPassword: async tempPasswordInfo => {
    return await apiClient.post(`/api/mail/sendTempPassword`, tempPasswordInfo);
  }
};
