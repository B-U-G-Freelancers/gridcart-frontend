import apiClient from "./apiClient";

export const orderService = {
  create: async (data: any) => {
    const response = await apiClient.post("/orders", data);
    return response.data;
  },
  getMyOrders: async () => {
    const response = await apiClient.get("/orders/my-orders");
    return response.data;
  },
  getById: async (id: string) => {
    const response = await apiClient.get(`/orders/${id}`);
    return response.data;
  },
};
