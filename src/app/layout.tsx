import { GoogleAnalytics } from '@next/third-parties/google';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calli Wickes Photography',
  description: 'Calli Wickes Photography - Family and Senior Photographer',
};

import { Raleway } from 'next/font/google';
import './globals.css';

const raleway = Raleway({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
      <GoogleAnalytics gaId="G-DR6QE7KKZ3" />
    </html>
  );
}
