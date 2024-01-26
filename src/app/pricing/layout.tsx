import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Photography Packages | Calli Wickes Photography Pricing",
  description:
    "Explore professional photography packages at Calli Wickes Photography. Discover transparent pricing for high-quality photo sessions tailored to your needs. Choose the perfect package for your special moments and capture memories that last a lifetime. View affordable rates and book your session with Calli Wickes, an experienced photographer dedicated to creating stunning visual stories.",
};

import GoogleAnalytics from "@/app/GoogleAnalytics";

import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
