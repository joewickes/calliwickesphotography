import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'] });
import './globals.css';

import Fullstory from './Fullstory';

export const metadata: Metadata = {
  title: 'Calli Wickes Photography',
  description: 'Calli Wickes Photography - Family and Senior Photographer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
      <GoogleAnalytics gaId="G-DR6QE7KKZ3" />
      <Fullstory />
    </html>
  );
}
