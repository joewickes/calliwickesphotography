import { MetadataRoute } from 'next';

import { isUnlistedBlog, SITE_URL } from '@/lib/constants';
import { getBlogIds } from '@/lib/queries/blog';
import { getLocationPageIds } from '@/lib/queries/page-slug';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [blogs, locations] = await Promise.all([getBlogIds(), getLocationPageIds()]);

  // Main static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${SITE_URL}/family-experience`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/about`, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${SITE_URL}/contact`, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${SITE_URL}/blogs`, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${SITE_URL}/privacypolicy`, changeFrequency: 'yearly', priority: 0.1 },
    { url: `${SITE_URL}/termsandconditions`, changeFrequency: 'yearly', priority: 0.1 },
  ];

  // Blog posts (generated from Strapi). Share-only sales pages are omitted so
  // they are never submitted for indexing.
  const blogPages = blogs
    .filter((blog) => !isUnlistedBlog(blog.attributes.slug))
    .map((blog): MetadataRoute.Sitemap[number] => ({
      url: `${SITE_URL}/blogs/${blog.attributes.slug}`,
      lastModified: new Date(blog.attributes.updatedAt),
      changeFrequency: 'yearly',
      priority: 0.5,
    }));

  // Duplicated location home pages (generated from Strapi)
  const locationPages = locations.map((location): MetadataRoute.Sitemap[number] => ({
    url: `${SITE_URL}/${location.attributes.urlSlug}`,
    lastModified: new Date(location.attributes.updatedAt),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticPages, ...blogPages, ...locationPages];
}
