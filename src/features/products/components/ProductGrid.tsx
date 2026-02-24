import { ProductCard } from "./ProductCard";
import { Product } from "../types";

interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
}

/**
 * ProductGrid Component
 * Displays a responsive grid of ProductCard components.
 */
export const ProductGrid = ({ products, isLoading }: ProductGridProps) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="h-80 animate-pulse rounded-xl bg-zinc-100 dark:bg-zinc-800"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
