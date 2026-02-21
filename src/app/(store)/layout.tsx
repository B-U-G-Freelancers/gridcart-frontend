import { ReactNode } from "react";

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href="/"
              className="text-2xl font-bold font-heading text-primary"
            >
              GridCart
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <a href="/products">Products</a>
              <a href="/categories">Categories</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2">Cart (0)</button>
            <a href="/login" className="text-sm font-medium">
              Login
            </a>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t bg-gray-50 py-12">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-heading font-semibold mb-4 text-lg">
              GridCart
            </h4>
            <p className="text-sm text-gray-600">
              Premium eCommerce solutions.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Shop</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>All Products</li>
              <li>Featured</li>
            </ul>
          </div>
          {/* Add more footer columns as needed */}
        </div>
        <div className="container mt-12 pt-8 border-t text-center text-sm text-gray-500">
          © {new Date().getFullYear()} GridCart. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
