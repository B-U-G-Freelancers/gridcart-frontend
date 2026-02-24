export const AdminDashboard = () => {
  const stats = [
    {
      label: "Total Sales",
      value: "$12,450",
      color: "bg-emerald-100 text-emerald-700",
    },
    { label: "Active Orders", value: "45", color: "bg-blue-100 text-blue-700" },
    {
      label: "Total Customers",
      value: "1,200",
      color: "bg-gold-100 text-gold-700",
    },
    {
      label: "Royal Products",
      value: "850",
      color: "bg-purple-100 text-purple-700",
    },
  ];

  return (
    <div className="space-y-12">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-emerald-900 dark:text-emerald-50">
          Admin Overview
        </h2>
        <button className="rounded-xl bg-emerald-900 px-6 py-2 font-bold text-white hover:bg-emerald-800">
          Add New Product
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
          >
            <p className="text-sm font-medium text-zinc-500">{stat.label}</p>
            <p className="mt-2 text-3xl font-extrabold text-zinc-900 dark:text-zinc-50">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950">
        <h3 className="mb-6 text-xl font-bold text-emerald-900 dark:text-emerald-50">
          Recent Activities
        </h3>
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-4 text-sm border-b border-zinc-100 dark:border-zinc-800 pb-4 last:border-0 last:pb-0"
            >
              <div className="h-10 w-10 shrink-0 rounded-full bg-zinc-100 dark:bg-zinc-800" />
              <div className="flex-1">
                <p className="font-bold text-zinc-800 dark:text-zinc-200">
                  New order #83920 received
                </p>
                <p className="text-xs text-zinc-500">2 minutes ago</p>
              </div>
              <span className="font-bold text-emerald-600">+$124.00</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
