import { GoogleAnalytics } from '@next/third-parties/google';
import FullStoryInit from './FullstoryInit';
import { MarkupHelper } from './MarkupHelper';

import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'] });

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.calliwickesphotography.com'),
  alternates: {
    canonical: '/',
  },
  title: 'Tampa Family Photographer | Calli Wickes Photography',
  description:
    'Calli Wickes is a Tampa Family Photographer serving Tampa, Wesley Chapel, Clearwater + surrounding areas | Natural photography for authentic families seeking the perfect blend of candid and portrait photos',
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
