import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <div className="text-center">
          <a href="/" className="text-3xl font-bold font-heading text-primary">
            GridCart
          </a>
          <p className="mt-2 text-sm text-gray-600">
            Premium eCommerce Experience
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}
