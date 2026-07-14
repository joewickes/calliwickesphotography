import { GoogleAnalytics } from '@next/third-parties/google';
import FullStoryInit from './FullstoryInit';
import JsonLd from '@/components/JsonLd/JsonLd';

import type { Metadata, Viewport } from 'next';
import { Raleway } from 'next/font/google';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { getFooterData } from '@/lib/queries/footer';
import { businessSchema, personSchema } from '@/lib/schema';
import type { FooterData } from '@/lib/types/strapi';

const raleway = Raleway({ subsets: ['latin'] });

import './globals.css';

const SITE_TITLE = `${SITE_NAME} | Florida Family Photographer`;
const SITE_DESCRIPTION =
  'Tampa, FL family photographer specializing in candid, natural-light family sessions across the Tampa Bay area, with over a decade of experience.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

/** Collects non-empty social profile URLs from the CMS footer for schema `sameAs`. */
function socialLinksFrom(footer: FooterData): string[] {
  return [
    footer.newsletterFacebookLink,
    footer.newsletterInstagramLink,
    footer.newsletterPinterestLink,
    footer.newsletterYelpLink,
    footer.newsletterLinkedInLink,
    footer.newsletterYouTubeLink,
    footer.newsletterSpotifyLink,
    footer.newsletterApplePodcastsLink,
  ].filter((link): link is string => typeof link === 'string' && link.trim().length > 0);
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Social links + served cities enrich the LocalBusiness schema. This is
  // supplementary data, so fall back to the core schema if the CMS is
  // unavailable rather than failing every route's <head>.
  let sameAs: string[] = [];
  let areaServed: string[] = [];
  try {
    const footer = await getFooterData();
    sameAs = socialLinksFrom(footer);
    areaServed = footer.location_home_pages.data
      .map((page) => page.attributes.location)
      .filter((name): name is string => typeof name === 'string' && name.trim().length > 0);
  } catch {
    // Non-critical enrichment; core business/person schema still renders.
  }

  return (
    <html lang="en">
      <body className={`${raleway.className}`}>
        {children}
        <GoogleAnalytics gaId="G-DR6QE7KKZ3" />
        <FullStoryInit />
        <JsonLd data={businessSchema({ sameAs, areaServed })} />
        <JsonLd data={personSchema({ sameAs })} />
      </body>
    </html>
  );
}
