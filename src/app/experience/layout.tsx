import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capture Your Moments | Calli Wickes Photography Experience",
  description:
    "Discover the seamless and personalized experience at Calli Wickes Photography. From initial consultation to the final delivery, the process is designed to capture your moments with creativity and precision. Explore the steps involved in creating stunning visual stories, including personalized planning, expert photo sessions, and meticulous post-production. Trust Calli Wickes to turn your vision into timeless memories.",
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
