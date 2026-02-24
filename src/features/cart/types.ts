export interface CartItem {
  productId: string;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  totalAmount: number;
  isLoading: boolean;
  error: string | null;
}
