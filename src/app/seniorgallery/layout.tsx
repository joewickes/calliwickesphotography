import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Senior Snapshots | Calli Wickes Photography Senior Gallery",
  description:
    "A sample of the senior photography work of Calli Wickes Photography.",
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
