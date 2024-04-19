import { GoogleAnalytics } from '@next/third-parties/google';
import FullStoryInit from './FullstoryInit';
import { MarkupHelper } from './MarkupHelper';

import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'] });

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.calliwickesphotography.com'),
  title: 'Calli Wickes Photography | Florida Family Photographer',
  description:
    'Calli Wickes is a Family Photographer located in central Florida | Natural photography for authentic families seeking the perfect blend of candid and portrait photos',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${raleway.className}`}>{children}</body>
      <GoogleAnalytics gaId="G-DR6QE7KKZ3" />
      <FullStoryInit />
      <MarkupHelper />
    </html>
  );
}
