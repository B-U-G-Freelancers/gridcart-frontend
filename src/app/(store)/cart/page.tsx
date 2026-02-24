"use client";

import { useCartStore } from "@/store/useCartStore";
import { Button } from "@/components/ui/Button";

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const total = useCartStore((state) => state.getTotalPrice());

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="mb-8 text-3xl font-bold text-emerald-900 dark:text-emerald-50">
        Your Royal Cart
      </h2>
      {items.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-zinc-500">
            Your cart is empty. Start adding royal essentials!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-6 rounded-2xl border border-zinc-100 p-4 dark:border-zinc-800"
              >
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-zinc-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-emerald-900 dark:text-emerald-50">
                    {item.name}
                  </h4>
                  <p className="text-sm text-zinc-500">${item.price}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold text-gold">x{item.quantity}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-zinc-50 p-8 dark:bg-zinc-900">
            <h3 className="mb-6 text-xl font-bold">Summary</h3>
            <div className="mb-6 flex justify-between text-lg font-bold">
              <span>Total</span>
              <span className="text-emerald-700 dark:text-gold">${total}</span>
            </div>
            <Button className="w-full bg-emerald-900">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
