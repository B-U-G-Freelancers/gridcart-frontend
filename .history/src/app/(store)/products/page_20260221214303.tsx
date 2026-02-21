import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "Premium Emerald Watch",
      price: 299,
      category: "Accessories",
    },
    { id: 2, name: "Gold Minimalist Ring", price: 150, category: "Jewelry" },
    { id: 3, name: "Structured Leather Tote", price: 450, category: "Bags" },
    { id: 4, name: "Silk Blend Scarf", price: 85, category: "Accessories" },
    { id: 5, name: "Velvet Evening Gown", price: 899, category: "Apparel" },
    { id: 6, name: "Classic Gold Cufflinks", price: 120, category: "Jewelry" },
  ];

  return (
    <div className="py-12 bg-white">
      <Container>
        <div className="flex items-baseline justify-between mb-12">
          <h1 className="text-3xl font-heading font-semibold">
            Our Collection
          </h1>
          <p className="text-gray-500">{products.length} Products Found</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-3/4 bg-gray-100 rounded-2xl overflow-hidden mb-4 transition-transform group-hover:scale-[1.02]">
                {/* Mock Image Placeholder */}
                <div className="w-full h-full flex items-center justify-center text-gray-300 font-heading text-4xl">
                  {product.name[0]}
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge
                    variant="outline"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    {product.category}
                  </Badge>
                </div>
                <h3 className="group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="price text-gray-900">
                  ${product.price.toLocaleString()}
                </p>
                <Button
                  variant="outline"
                  className="w-full mt-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
