import apiClient from "@/services/apiClient";
import { CartItem } from "../types";

/**
 * Cart Service
 * Handles all API interactions related to the shopping cart.
 * This acts as the bridge between your UI and the Backend.
 */
export const cartService = {
  /**
   * Fetches the current user's cart from the server
   */
  getCart: async () => {
    const response = await apiClient.get<CartItem[]>("/cart");
    return response.data;
  },

  /**
   * Adds a product to the cart
   */
  addToCart: async (productId: string, quantity: number) => {
    const response = await apiClient.post("/cart/add", { productId, quantity });
    return response.data;
  },

  /**
   * Updates the quantity of an item already in the cart
   */
  updateQuantity: async (productId: string, quantity: number) => {
    const response = await apiClient.patch(`/cart/update/${productId}`, {
      quantity,
    });
    return response.data;
  },

  /**
   * Removes an item from the cart
   */
  removeFromCart: async (productId: string) => {
    const response = await apiClient.delete(`/cart/remove/${productId}`);
    return response.data;
  },

  /**
   * Clears all items from the cart
   */
  clearCart: async () => {
    const response = await apiClient.delete("/cart/clear");
    return response.data;
  },
};
