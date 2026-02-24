"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";

export const Hero = () => {
  return (
    <section className="relative h-125 w-full overflow-hidden rounded-2xl">
      <Image
        src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=2000"
        alt="Premium Groceries"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-r from-emerald-950/90 to-emerald-950/40" />

      <div className="relative flex h-full items-center px-12 text-white">
        <div className="max-w-xl space-y-6">
          <p className="font-bold tracking-[0.2em] text-gold uppercase">
            Exclusive Collection
          </p>
          <h1 className="text-5xl font-extrabold leading-[1.1] text-white">
            Premium Quality, <br />
            <span className="text-gold">Royal Savings</span>
          </h1>
          <p className="text-lg text-zinc-300">
            Experience the finest organic selections and daily essentials
            delivered to your palace in 10 minutes.
          </p>
          <div className="flex gap-4 pt-4">
            <Button
              size="lg"
              className="bg-gold text-white hover:bg-gold/90 border-none"
            >
              Shop Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              View Deals
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const CATEGORIES = [
  { name: "Fruits & Veg", icon: "🥬" },
  { name: "Dairy", icon: "🥚" },
  { name: "Snacks", icon: "🍪" },
  { name: "Household", icon: "🛍️" },
  { name: "Personal Care", icon: "🧴" },
  { name: "Frozen", icon: "❄️" },
  { name: "Baby", icon: "👶" },
  { name: "Pet", icon: "🐾" },
];

export const CategoryGrid = () => {
  return (
    <section className="py-12">
      <div className="mb-8 flex items-center justify-between">
        <h3 className="text-2xl font-bold text-emerald-900 dark:text-emerald-50">
          Shop by Category
        </h3>
        <button className="text-sm font-bold text-gold hover:underline">
          View All
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.name}
            className="group flex cursor-pointer flex-col items-center gap-3"
          >
            <div className="flex h-24 w-full items-center justify-center rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:text-gold dark:bg-zinc-900">
              <span className="text-3xl">{cat.icon}</span>
            </div>
            <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-gold">
              {cat.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
