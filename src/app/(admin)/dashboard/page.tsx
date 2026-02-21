import { Badge } from "@/components/ui/Badge";

export default function AdminDashboard() {
  const stats = [
    { label: "Total Revenue", value: "$45,231.89", trend: "+20.1%" },
    { label: "Orders", value: "+2350", trend: "+180.1%" },
    { label: "Sales", value: "+12,234", trend: "+19.1%" },
    { label: "Active Now", value: "+573", trend: "+201 since last hour" },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white p-6 rounded-xl border shadow-sm"
          >
            <p className="text-sm font-medium text-gray-500">{stat.label}</p>
            <div className="mt-2 flex items-baseline justify-between">
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <Badge variant="success">{stat.trend}</Badge>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b">
          <h3 className="font-semibold">Recent Orders</h3>
        </div>
        <div className="p-0 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 font-semibold">Order ID</th>
                <th className="px-6 py-3 font-semibold">Customer</th>
                <th className="px-6 py-3 font-semibold">Status</th>
                <th className="px-6 py-3 font-semibold">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="hover:bg-gray-50/50">
                  <td className="px-6 py-4 font-medium">#ORD-{1000 + i}</td>
                  <td className="px-6 py-4">Customer Name {i}</td>
                  <td className="px-6 py-4">
                    <Badge variant="success">Completed</Badge>
                  </td>
                  <td className="px-6 py-4 text-price">$99.00</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
