import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact Calli Wickes Photography | Get in Touch for Professional Photography Services",
  description:
    "Contact Calli Wickes Photography to inquire about my professional photography services. Reach out for booking information, collaboration opportunities, or any inquiries you may have. We are here to capture your special moments with expertise and creativity. Use the provided contact form, email, or phone to connect with Calli Wickes, your dedicated photographer for memorable visual experiences.",
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
