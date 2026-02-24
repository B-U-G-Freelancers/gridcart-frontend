"use client";

import { OrderHistory } from "@/features/orders/components/OrderHistory";
import { Order } from "@/features/orders/types";

export default function OrderHistoryPage() {
  // Mock data for the boilerplate
  const mockOrders: Order[] = [
    {
      id: "ord_123456789",
      userId: "user_1",
      items: [],
      total: 156.0,
      status: "delivered",
      createdAt: new Date().toISOString(),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <OrderHistory orders={mockOrders} />
    </div>
  );
}
