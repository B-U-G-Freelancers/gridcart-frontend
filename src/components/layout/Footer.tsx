import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-emerald-950 pt-20 pb-10 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-emerald-900">
                <span className="text-xl font-bold">G</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight">
                  GridCart
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-gold uppercase">
                  Royal Grocers
                </span>
              </div>
            </Link>
            <p className="text-zinc-400">
              Experience the epitome of convenience and quality. GridCart brings
              the royal market experience to your fingertips.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-6 font-bold text-gold uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3 text-zinc-400">
              <li>
                <Link href="/about" className="hover:text-gold">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-gold">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-gold uppercase tracking-wider">
              Customer Service
            </h4>
            <ul className="space-y-3 text-zinc-400">
              <li>
                <Link href="/faqs" className="hover:text-gold">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-gold">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-gold">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Apps */}
          <div>
            <h4 className="mb-6 font-bold text-gold uppercase tracking-wider">
              Download App
            </h4>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center justify-center gap-2 rounded-lg bg-white/10 p-3 text-sm font-medium hover:bg-white/20"
              >
                Google Play
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-2 rounded-lg bg-white/10 p-3 text-sm font-medium hover:bg-white/20"
              >
                App Store
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-8 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} GridCart Royal Grocers. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};
