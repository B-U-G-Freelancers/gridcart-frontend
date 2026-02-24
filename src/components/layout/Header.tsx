import Link from "next/link";
import {
  ShoppingCart,
  Heart,
  MapPin,
  Search,
  ChevronDown,
  User,
} from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-900 text-gold">
            <span className="text-xl font-bold">G</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-emerald-900 dark:text-emerald-50">
              GridCart
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-gold uppercase">
              Royal Grocers
            </span>
          </div>
        </Link>

        {/* Search Bar */}
        <div className="hidden max-w-xl flex-1 px-8 lg:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search for organic honey, A2 milk, royal spices..."
              className="h-11 w-full rounded-full border border-zinc-200 bg-zinc-50 pl-10 pr-4 text-sm outline-none focus:border-gold dark:border-zinc-800 dark:bg-zinc-900"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-2 lg:flex">
            <MapPin className="h-5 w-5 text-gold" />
            <div className="flex flex-col text-xs">
              <span className="text-zinc-400">Delivering to</span>
              <span className="font-bold text-emerald-900 dark:text-emerald-50">
                Chennai, India
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-emerald-900 dark:text-emerald-50">
            <Link href="/wishlist" className="hover:text-gold">
              <Heart className="h-6 w-6" />
            </Link>
            <Link href="/cart" className="relative hover:text-gold">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-white">
                3
              </span>
            </Link>
          </div>

          <button className="flex items-center gap-2 rounded-full bg-zinc-50 p-1.5 pr-3 transition-colors hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-900">
              <User className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium">Account</span>
            <ChevronDown className="h-4 w-4 text-zinc-400" />
          </button>
        </div>
      </div>
    </header>
  );
};
