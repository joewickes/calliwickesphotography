import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet the Artist: About Calli Wickes Photography",
  description:
    "Learn the story behind Calli Wickes Photography and the passionate artist behind the lens. The About page delves into the journey, inspiration, and commitment of Calli Wickes in capturing timeless moments. Discover the unique approach to photography, the personal connection with clients, and the dedication to transforming ordinary moments into extraordinary memories. Explore the artistic vision and experience that sets Calli Wickes Photography apart in the world of visual storytelling.",
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
