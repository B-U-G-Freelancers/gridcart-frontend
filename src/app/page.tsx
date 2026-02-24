import { Hero, CategoryGrid } from "@/components/layout/HomeSections";
import { ProductGrid } from "@/features/products/components/ProductGrid";

export default function Home() {
  // Mock products for the homepage
  const featuredProducts = [
    {
      id: "1",
      name: "Organic Wildflower Honey",
      description:
        "Pure, raw honey sourced from the high-altitude wildflowers of the Himalayas.",
      price: 24,
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
      category: "Pantry",
      stock: 50,
      rating: 4.8,
    },
    {
      id: "2",
      name: "Premium A2 Desi Cow Milk",
      description:
        "Rich, nutritious A2 milk from free-range Desi cows. Farm fresh delivery.",
      price: 12,
      image:
        "https://images.unsplash.com/photo-1464226184884-fa280b67c3ff?auto=format&fit=crop&q=80&w=800",
      category: "Dairy",
      stock: 100,
      rating: 4.9,
    },
    {
      id: "3",
      name: "Royal Kashmiri Saffron",
      description:
        "Grade A+ hand-picked saffron threads from the valleys of Pampore.",
      price: 45,
      image:
        "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=800",
      category: "Spices",
      stock: 20,
      rating: 5.0,
    },
    {
      id: "4",
      name: "Artisanal Sourdough Bread",
      description:
        "Slow-fermented for 24 hours. Crusty outside, soft and airy inside.",
      price: 8,
      image:
        "https://images.unsplash.com/photo-1506484334406-382be3894e9e?auto=format&fit=crop&q=80&w=800",
      category: "Bakery",
      stock: 30,
      rating: 4.7,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <Hero />
      <CategoryGrid />

      <div>
        <div className="mb-8 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-emerald-900 dark:text-emerald-50">
            Best Sellers
          </h3>
          <button className="text-sm font-bold text-gold hover:underline">
            View All
          </button>
        </div>
        <ProductGrid products={featuredProducts} />
      </div>

      <div className="rounded-2xl bg-emerald-900 p-8 text-white lg:p-12">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gold lg:text-4xl">
              Royal Flash Sale
            </h2>
            <p className="max-w-md text-emerald-100">
              Get up to 40% off on premium organic selections. Offer valid for a
              limited time only.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col items-center rounded-lg bg-white/10 p-4 min-w-20">
              <span className="text-2xl font-bold text-gold">02</span>
              <span className="text-xs uppercase text-emerald-200">Hours</span>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-white/10 p-4 min-w-20">
              <span className="text-2xl font-bold text-gold">45</span>
              <span className="text-xs uppercase text-emerald-200">Mins</span>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-white/10 p-4 min-w-20">
              <span className="text-2xl font-bold text-gold">12</span>
              <span className="text-xs uppercase text-emerald-200">Secs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
