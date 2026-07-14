import { BUSINESS, PHOTOGRAPHER_NAME, SITE_NAME, SITE_URL } from '@/lib/constants';

/**
 * schema.org JSON-LD builders. Each returns a plain object ready to hand to the
 * <JsonLd> component. The business and person nodes share stable @id values so
 * other nodes (BlogPosting author/publisher) can reference them by @id.
 */

const BUSINESS_ID = `${SITE_URL}/#business`;
const PERSON_ID = `${SITE_URL}/#calli-wickes`;

type JsonLdObject = Record<string, unknown>;

/**
 * LocalBusiness / ProfessionalService node for the photography business.
 * `sameAs` (social profiles) and `areaServed` (served cities) are passed in
 * from Strapi footer data so they track the CMS rather than being hardcoded.
 */
export function businessSchema({
  sameAs = [],
  areaServed = [],
}: {
  sameAs?: string[];
  areaServed?: string[];
} = {}): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': BUSINESS_ID,
    name: BUSINESS.name,
    image: BUSINESS.image,
    url: `${SITE_URL}/`,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    address: {
      '@type': 'PostalAddress',
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      addressCountry: BUSINESS.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    ...(areaServed.length > 0 ? { areaServed: areaServed.map((name) => ({ '@type': 'City', name })) } : {}),
    ...(sameAs.length > 0 ? { sameAs } : {}),
    founder: { '@id': PERSON_ID },
    review: {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Caitlin' },
      reviewBody:
        'Calli did our first family photo shoot in 2018. She captured such precious photos of us with our baby girl. I still look at these photos almost everyday. She made us feel very comfortable during the session. It was such a positive experience and I can’t wait to have Calli photograph us again next time we are in Florida.',
    },
  };
}

/** Person node for the photographer, linked to the business via worksFor. */
export function personSchema({ sameAs = [] }: { sameAs?: string[] } = {}): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': PERSON_ID,
    name: PHOTOGRAPHER_NAME,
    jobTitle: 'Family Photographer',
    url: `${SITE_URL}/about`,
    worksFor: { '@id': BUSINESS_ID },
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

/** BlogPosting node for an individual blog post. */
export function blogPostingSchema({
  title,
  description,
  slug,
  image,
  publishedAt,
  updatedAt,
}: {
  title: string;
  description: string;
  slug: string;
  image?: string;
  publishedAt?: string;
  updatedAt?: string;
}): JsonLdObject {
  const url = `${SITE_URL}/blogs/${slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    ...(image ? { image } : {}),
    ...(publishedAt ? { datePublished: publishedAt } : {}),
    ...(updatedAt ? { dateModified: updatedAt } : {}),
    author: { '@id': PERSON_ID, name: PHOTOGRAPHER_NAME },
    publisher: { '@id': BUSINESS_ID, name: SITE_NAME },
    mainEntityOfPage: url,
    url,
  };
}

/** BreadcrumbList node. `path` values are joined to SITE_URL as absolute URLs. */
export function breadcrumbSchema(items: { name: string; path: string }[]): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/** FAQPage node built from question/answer text pairs. */
export function faqSchema(faqs: { question: string; answer: string }[]): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}
