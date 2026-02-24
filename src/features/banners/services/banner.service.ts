import apiClient from "@/services/apiClient";
import { Banner } from "../types";

export const bannerService = {
  getBanners: async () => {
    const response = await apiClient.get<Banner[]>("/banners");
    return response.data;
  },

  getBannerById: async (id: string) => {
    const response = await apiClient.get<Banner>(`/banners/${id}`);
    return response.data;
  },
};
