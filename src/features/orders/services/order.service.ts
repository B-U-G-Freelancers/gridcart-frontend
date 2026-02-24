import apiClient from "@/services/apiClient";
import { Order } from "../types";

export const orderService = {
  getOrders: async () => {
    const response = await apiClient.get<Order[]>("/orders");
    return response.data;
  },

  getOrderById: async (id: string) => {
    const response = await apiClient.get<Order>(`/orders/${id}`);
    return response.data;
  },

  createOrder: async (data: any) => {
    const response = await apiClient.post<Order>("/orders", data);
    return response.data;
  },
};
