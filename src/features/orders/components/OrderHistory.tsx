import { Order } from "../types";

interface OrderHistoryProps {
  orders: Order[];
}

export const OrderHistory = ({ orders }: OrderHistoryProps) => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-emerald-900 dark:text-emerald-50">
        Order History
      </h2>

      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <table className="w-full text-left">
          <thead className="bg-zinc-50 dark:bg-zinc-900">
            <tr>
              <th className="p-4 font-bold text-zinc-600 dark:text-zinc-400">
                Order ID
              </th>
              <th className="p-4 font-bold text-zinc-600 dark:text-zinc-400">
                Date
              </th>
              <th className="p-4 font-bold text-zinc-600 dark:text-zinc-400">
                Total
              </th>
              <th className="p-4 font-bold text-zinc-600 dark:text-zinc-400">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800 text-sm">
            {orders.map((order) => (
              <tr
                key={order.id}
                className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
              >
                <td className="p-4 font-mono font-bold text-gold">
                  #{order.id.slice(0, 8)}
                </td>
                <td className="p-4 text-zinc-500">Feb 24, 2026</td>
                <td className="p-4 font-bold">${order.total}</td>
                <td className="p-4">
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
