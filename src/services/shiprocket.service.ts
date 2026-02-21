import apiClient from "./apiClient";

export const shiprocketService = {
  trackOrder: async (orderId: string) => {
    const response = await apiClient.get(`/shipping/track/${orderId}`);
    return response.data;
  },
};
