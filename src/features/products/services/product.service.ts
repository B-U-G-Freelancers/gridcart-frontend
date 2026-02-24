import apiClient from "@/services/apiClient";
import { Product } from "../types";

export const productService = {
  getProducts: async (params?: Record<string, string | number>) => {
    const response = await apiClient.get<Product[]>("/products", { params });
    return response.data;
  },

  getProductBySlug: async (slug: string) => {
    const response = await apiClient.get<Product>(`/products/${slug}`);
    return response.data;
  },

  getCategories: async () => {
    const response = await apiClient.get<string[]>("/products/categories");
    return response.data;
  },
};
