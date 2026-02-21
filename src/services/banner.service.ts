import apiClient from "./apiClient";

export const bannerService = {
  getAll: async () => {
    const response = await apiClient.get("/banners");
    return response.data;
  },
  create: async (data: any) => {
    const response = await apiClient.post("/banners", data);
    return response.data;
  },
};
