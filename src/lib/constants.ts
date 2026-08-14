/** Canonical, production hostname for the site. */
export const SITE_URL = 'https://www.calliwickesphotography.com';

/** Public-facing business name, reused in metadata titles and structured data. */
export const SITE_NAME = 'Calli Wickes Photography';

/** The photographer behind the business (used in Person / author schema). */
export const PHOTOGRAPHER_NAME = 'Calli Wickes';

/**
 * Blog slugs that exist only to be shared directly with an enquiring client.
 * They stay publicly reachable by URL, but are kept out of the /blogs index,
 * the sitemap, llms.txt and the popular-posts list, and are served with
 * `noindex` so search engines drop them.
 */
export const UNLISTED_BLOG_SLUGS = ['pricing', 'proposal-information'] as const;

/** True when a blog slug should be hidden from listings and search engines. */
export const isUnlistedBlog = (slug: string): boolean =>
  (UNLISTED_BLOG_SLUGS as readonly string[]).includes(slug);

/**
 * Core business facts reused by JSON-LD (src/lib/schema.ts) and the llms.txt
 * route. Contact fields mirror the Strapi footer values; social links and the
 * served-area list are sourced dynamically from Strapi footer data at render
 * time (see getFooterData) so they stay in sync with the CMS.
 */
export const BUSINESS = {
  name: SITE_NAME,
  /** E.164 form for schema.org `telephone`; the display form lives in the CMS. */
  telephone: '+1-813-406-0558',
  email: 'calliwickesphotography@gmail.com',
  image: 'https://res.cloudinary.com/dqdjqieaz/image/upload/v1720720873/2024_06_29_37_78712fcd8d.jpg',
  addressLocality: 'Tampa',
  addressRegion: 'FL',
  addressCountry: 'US',
  /** Approximate Tampa, FL coordinates for the LocalBusiness `geo` node. */
  latitude: 27.9506,
  longitude: -82.4572,
  /** schema.org price range indicator (generic mid-range). */
  priceRange: '$$',
} as const;
