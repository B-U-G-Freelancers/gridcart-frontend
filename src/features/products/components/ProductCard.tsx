"use client";

import Image from "next/image";
import { Product } from "../types";
import { Button } from "@/components/ui/Button";
import { useCartStore } from "@/store/useCartStore";

interface ProductCardProps {
  product: Product;
}

/**
 * ProductCard Component
 * This is a "Feature Component" because it depends on the "Product" type
 * and has logic for interaction like "Add to Cart".
 */
export const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="group overflow-hidden rounded-xl border border-zinc-200 bg-white transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
      <div className="relative aspect-square overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={product.image || "/placeholder-product.jpg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
            {product.category}
          </span>
          <span className="text-lg font-bold text-zinc-900 dark:text-white">
            ${product.price}
          </span>
        </div>

        <h3 className="mb-2 line-clamp-1 text-base font-semibold text-zinc-800 dark:text-zinc-100">
          {product.name}
        </h3>

        <p className="mb-4 line-clamp-2 text-sm text-zinc-500 dark:text-zinc-400">
          {product.description}
        </p>

        <Button
          onClick={() =>
            addItem({
              id: product.id,
              name: product.name,
              price: product.price,
              quantity: 1,
              image: product.image,
            })
          }
          className="w-full bg-emerald-700 hover:bg-emerald-800 text-white"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};
