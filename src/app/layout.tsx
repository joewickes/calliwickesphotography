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
    'Calli Wickes Photography is a family photographer based out of Tampa, FL. She is a natural light photographer for families seeking the perfect blend of candid and portrait photos. With over a decade of experience, she’s created an authentic family photography experience that will leave you at ease and having a blast with your crew. You will leave your family photo session having spent joyful and quality time with your favorite people and gain timeless family photos that you will cherish for years to come.',
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
