import { Raleway } from "next/font/google";
import "./globals.css";
const raleway = Raleway({ subsets: ["latin"] });

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calli Wickes Photography",
  description: "Calli Wickes Photography - Family and Senior Photographer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
