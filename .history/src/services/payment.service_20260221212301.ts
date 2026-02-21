import apiClient from "./apiClient";

export const paymentService = {
  createOrder: async (amount: number) => {
    const response = await apiClient.post("/payments/create-order", { amount });
    return response.data;
  },
  verifyPayment: async (paymentData: any) => {
    const response = await apiClient.post("/payments/verify", paymentData);
    return response.data;
  },
};
