import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visual Stories Unveiled | Calli Wickes Photography Portfolio",
  description:
    "Immerse yourself in the artistry of Calli Wickes Photography through a diverse portfolio. Explore a collection of visually stunning stories captured with creativity and precision. From family or senior portraits to special events, each image reflects the unique essence of the moment. Check out the work and imagine how we can transform your memories into timeless visual narratives.",
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
