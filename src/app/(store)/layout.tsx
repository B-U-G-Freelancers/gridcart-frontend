import { ReactNode } from "react";

export default function StoreLayout({ children }: { children: ReactNode }) {
  return <div className="flex flex-col">{children}</div>;
}
