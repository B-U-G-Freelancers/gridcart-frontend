import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function HomePage() {
  return (
    <div className="py-20">
      <Container>
        <div className="max-w-3xl">
          <h1 className="mb-6">Modern eCommerce for the Next Generation.</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            A production-ready template built with Next.js App Router, Tailwind
            CSS 4, and Zustand. Designed for scalability, performance, and
            developer experience.
          </p>
          <div className="flex gap-4">
            <Button size="lg">Shop Collection</Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>

        <section className="mt-32">
          <h2 className="mb-12">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="group relative aspect-4/5 bg-gray-100 rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-linear-to-t from-black/60 to-transparent">
                  <h3 className="text-white mb-2">Category {i}</h3>
                  <p className="text-white/80 text-sm">
                    Explore the latest trends in our premium collection.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
