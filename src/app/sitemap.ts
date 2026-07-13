import { MetadataRoute } from 'next';

import { SITE_URL } from '@/lib/constants';
import { getBlogIds } from '@/lib/queries/blog';
import { getLocationPageIds } from '@/lib/queries/page-slug';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [blogs, locations] = await Promise.all([getBlogIds(), getLocationPageIds()]);

  // Main static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/about`, changeFrequency: 'yearly', priority: 0.1 },
    { url: `${SITE_URL}/contact`, changeFrequency: 'yearly', priority: 0.1 },
    { url: `${SITE_URL}/family-experience`, changeFrequency: 'monthly', priority: 0.1 },
    { url: `${SITE_URL}/privacypolicy`, changeFrequency: 'yearly', priority: 0.1 },
    { url: `${SITE_URL}/termsandconditions`, changeFrequency: 'yearly', priority: 0.1 },
  ];

  // Blog posts (generated from Strapi)
  const blogPages = blogs.map((blog): MetadataRoute.Sitemap[number] => ({
    url: `${SITE_URL}/blogs/${blog.attributes.slug}`,
    changeFrequency: 'yearly',
    priority: 0.4,
  }));

  // Duplicated location home pages (generated from Strapi)
  const locationPages = locations.map((location): MetadataRoute.Sitemap[number] => ({
    url: `${SITE_URL}/${location.attributes.urlSlug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticPages, ...blogPages, ...locationPages];
}
