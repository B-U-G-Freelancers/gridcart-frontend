import { Button } from "@/components/ui/Button";
import { useCartStore } from "@/store/useCartStore";

export const CheckoutScreen = () => {
  const items = useCartStore((state) => state.items);
  const total = useCartStore((state) => state.getTotalPrice());

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-emerald-900 dark:text-emerald-50">
          Shipping Details
        </h2>
        <form className="grid grid-cols-2 gap-6">
          <div className="col-span-2 space-y-2">
            <label className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">
              Full Name
            </label>
            <input
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50 p-4 outline-none focus:border-gold dark:border-zinc-800 dark:bg-zinc-900"
              placeholder="Sanjeev R."
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">
              Email
            </label>
            <input
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50 p-4 outline-none focus:border-gold dark:border-zinc-800 dark:bg-zinc-900"
              placeholder="sanjeev@example.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">
              Phone
            </label>
            <input
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50 p-4 outline-none focus:border-gold dark:border-zinc-800 dark:bg-zinc-900"
              placeholder="+91 98765 43210"
            />
          </div>
          <div className="col-span-2 space-y-2">
            <label className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">
              Address
            </label>
            <textarea
              className="h-32 w-full rounded-xl border border-zinc-200 bg-zinc-50 p-4 outline-none focus:border-gold dark:border-zinc-800 dark:bg-zinc-900"
              placeholder="123 Royal Palace, Emerald City..."
            />
          </div>
        </form>
      </div>

      <div className="space-y-8">
        <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950">
          <h3 className="mb-6 text-xl font-bold text-emerald-900 dark:text-emerald-50">
            Order Summary
          </h3>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span className="text-zinc-600 dark:text-zinc-400">
                  {item.name} x {item.quantity}
                </span>
                <span className="font-bold">${item.price * item.quantity}</span>
              </div>
            ))}
            <div className="mt-6 border-t border-zinc-100 pt-6 flex justify-between text-xl font-bold text-emerald-900 dark:text-emerald-50">
              <span>Total Amount</span>
              <span className="text-gold">${total}</span>
            </div>
          </div>
          <Button className="mt-8 w-full bg-gold py-6 text-lg font-bold">
            Place Royal Order
          </Button>
        </div>
      </div>
    </div>
  );
};
