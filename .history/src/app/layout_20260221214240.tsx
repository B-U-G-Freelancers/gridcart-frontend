import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

// Import local font files from @fontsource
import "@fontsource/inter/400.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/dm-sans/700.css";

export const metadata: Metadata = {
  title: "GridCart | Modern eCommerce",
  description: "A production-ready eCommerce application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
