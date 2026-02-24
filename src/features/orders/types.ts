export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered";
  createdAt: string;
}

export interface OrdersState {
  items: Order[];
  isLoading: boolean;
  error: string | null;
}
