import { GoogleAnalytics } from '@next/third-parties/google';
import FullStoryInit from './FullstoryInit';

import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'] });
import './globals.css';

export const metadata: Metadata = {
  title: 'Tampa Family Photographer  | Calli Wickes Photography',
  description: 'Calli is a Tampa Family Photographer serving Tampa + surrounding areas | Capturing beautiful photos of you with your favorite people in Tampa, FL',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
      <GoogleAnalytics gaId="G-DR6QE7KKZ3" />
      <FullStoryInit />
    </html>
  );
}
