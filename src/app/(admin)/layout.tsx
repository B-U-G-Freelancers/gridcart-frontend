import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Sidebar */}
      <aside className="w-64 bg-primary text-white hidden lg:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-white/10">
          <span className="text-xl font-bold font-heading">Admin Panel</span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a
            href="/admin/dashboard"
            className="block p-3 rounded-lg hover:bg-white/10"
          >
            Dashboard
          </a>
          <a
            href="/admin/products"
            className="block p-3 rounded-lg hover:bg-white/10"
          >
            Products
          </a>
          <a
            href="/admin/orders"
            className="block p-3 rounded-lg hover:bg-white/10"
          >
            Orders
          </a>
          <a
            href="/admin/banners"
            className="block p-3 rounded-lg hover:bg-white/10"
          >
            Banners
          </a>
          <a
            href="/admin/settings"
            className="block p-3 rounded-lg hover:bg-white/10"
          >
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b flex items-center justify-between px-8">
          <h2 className="font-heading font-semibold">Dashboard</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Admin User</span>
            <button className="text-sm text-red-600">Logout</button>
          </div>
        </header>
        <main className="p-8 flex-1">{children}</main>
      </div>
    </div>
  );
}
