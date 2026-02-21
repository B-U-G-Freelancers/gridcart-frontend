import apiClient from "./apiClient";

export const authService = {
  login: async (credentials: any) => {
    const response = await apiClient.post("/auth/login", credentials);
    return response.data;
  },
  signup: async (userData: any) => {
    const response = await apiClient.post("/auth/signup", userData);
    return response.data;
  },
  logout: async () => {
    await apiClient.post("/auth/logout");
  },
};
