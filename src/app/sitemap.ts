import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    //main pages
    {
      url: 'https://www.calliwickesphotography.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.calliwickesphotography.com/about',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: 'https://www.calliwickesphotography.com/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    {
      url: 'https://www.calliwickesphotography.com/family-experience',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.calliwickesphotography.com/senior-experience',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.calliwickesphotography.com/privacypolicy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://www.calliwickesphotography.com/termsandconditions',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    //information blogs
    {
      url: 'https://www.calliwickesphotography.com/blogs/what-to-wear',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: 'https://www.calliwickesphotography.com/blogs/family-session-tips',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: 'https://www.calliwickesphotography.com/blogs/family-photo-investment',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    //location blogs
    {
      url: 'https://www.calliwickesphotography.com/blogs/cypress-point-park-family-session',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: 'https://www.calliwickesphotography.com/blogs/eagle-park-wesley-chapel-session',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: 'https://www.calliwickesphotography.com/blogs/davis-island-family-session',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: 'https://www.calliwickesphotography.com/blogs/darby-farms-family-session',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    //duplicated homepages
    {
      url: 'https://www.calliwickesphotography.com/wesley-chapel-family-photographer',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.2,
    },
    {
      url: 'https://www.calliwickesphotography.com/clearwater-family-photographer',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.2,
    },
    {
      url: 'https://www.calliwickesphotography.com/lakeland-family-photographer',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.2,
    },
    {
      url: 'https://www.calliwickesphotography.com/brandon-family-photographer',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.2,
    },
    {
      url: 'https://www.calliwickesphotography.com/riverview-family-photographer',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.2,
    },
    {
      url: 'https://www.calliwickesphotography.com/spring-hill-family-photographer',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.2,
    },
    {
      url: 'https://www.calliwickesphotography.com/orlando-family-photographer',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.2,
    },
    {
      url: 'https://www.calliwickesphotography.com/st-pete-beach-family-photographer',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.2,
    },
    {
      url: 'https://www.calliwickesphotography.com/dade-city-family-photographer',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.2,
    },
  ];
}
