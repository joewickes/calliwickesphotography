import { describe, it, expect } from 'vitest';
import { SITE_URL } from './constants';
import { businessSchema, personSchema, blogPostingSchema, breadcrumbSchema, faqSchema } from './schema';

describe('businessSchema', () => {
  it('uses https schema.org context and dual type', () => {
    const s = businessSchema();
    expect(s['@context']).toBe('https://schema.org');
    expect(s['@type']).toEqual(['LocalBusiness', 'ProfessionalService']);
    expect(s.geo).toMatchObject({ '@type': 'GeoCoordinates' });
  });

  it('maps areaServed cities and includes sameAs when provided', () => {
    const s = businessSchema({ sameAs: ['https://instagram.com/x'], areaServed: ['Tampa', 'Clearwater'] });
    expect(s.areaServed).toEqual([
      { '@type': 'City', name: 'Tampa' },
      { '@type': 'City', name: 'Clearwater' },
    ]);
    expect(s.sameAs).toEqual(['https://instagram.com/x']);
  });

  it('omits areaServed and sameAs when empty', () => {
    const s = businessSchema();
    expect(s.areaServed).toBeUndefined();
    expect(s.sameAs).toBeUndefined();
  });

  it('does not fabricate an aggregateRating', () => {
    expect(businessSchema().aggregateRating).toBeUndefined();
  });
});

describe('personSchema', () => {
  it('links the photographer to the business', () => {
    const s = personSchema();
    expect(s['@type']).toBe('Person');
    expect(s.worksFor).toMatchObject({ '@id': `${SITE_URL}/#business` });
  });
});

describe('blogPostingSchema', () => {
  it('builds a BlogPosting with dates, author, and absolute url', () => {
    const s = blogPostingSchema({
      title: 'What to Wear',
      description: 'Outfit tips',
      slug: 'what-to-wear',
      image: 'https://cdn.test/a.jpg',
      publishedAt: '2024-01-01T00:00:00.000Z',
      updatedAt: '2024-02-01T00:00:00.000Z',
    });
    expect(s['@type']).toBe('BlogPosting');
    expect(s.headline).toBe('What to Wear');
    expect(s.datePublished).toBe('2024-01-01T00:00:00.000Z');
    expect(s.dateModified).toBe('2024-02-01T00:00:00.000Z');
    expect(s.mainEntityOfPage).toBe(`${SITE_URL}/blogs/what-to-wear`);
    expect(s.author).toMatchObject({ '@id': `${SITE_URL}/#calli-wickes` });
  });

  it('omits optional date/image fields when absent', () => {
    const s = blogPostingSchema({ title: 'T', description: 'D', slug: 's' });
    expect(s.datePublished).toBeUndefined();
    expect(s.dateModified).toBeUndefined();
    expect(s.image).toBeUndefined();
  });
});

describe('breadcrumbSchema', () => {
  it('assigns sequential positions and absolute urls', () => {
    const s = breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blogs' },
    ]);
    expect(s.itemListElement).toEqual([
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blogs` },
    ]);
  });
});

describe('faqSchema', () => {
  it('maps question/answer pairs into FAQPage entities', () => {
    const s = faqSchema([{ question: 'Q?', answer: 'A.' }]);
    expect(s['@type']).toBe('FAQPage');
    expect(s.mainEntity).toEqual([
      { '@type': 'Question', name: 'Q?', acceptedAnswer: { '@type': 'Answer', text: 'A.' } },
    ]);
  });
});
