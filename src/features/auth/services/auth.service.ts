import apiClient from "@/services/apiClient";
import { User } from "../types";

export const authService = {
  login: async (email: string, password: string) => {
    const response = await apiClient.post<{ user: User; token: string }>(
      "/auth/login",
      { email, password },
    );
    return response.data;
  },

  register: async (data: any) => {
    const response = await apiClient.post<{ user: User; token: string }>(
      "/auth/register",
      data,
    );
    return response.data;
  },

  getCurrentUser: async () => {
    const response = await apiClient.get<User>("/auth/me");
    return response.data;
  },

  logout: async () => {
    await apiClient.post("/auth/logout");
  },
};
