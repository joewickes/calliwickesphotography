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
      url: 'https://www.calliwickesphotography.com/blogs/pricing',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
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
        {
      url: 'https://www.calliwickesphotography.com/blogs/things-to-do-in-tampa',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: 'https://www.calliwickesphotography.com/blogs/tips-for-genuine-smiles',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: 'https://calliwickesphotography.com/blogs/family-session-game-ideas',
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
    {
      url: 'https://www.calliwickesphotography.com/blogs/usf-senior-session',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: 'https://www.calliwickesphotography.com/blogs/curtis-hixon-family-session',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: 'https://www.calliwickesphotography.com/blogs/riverwalk-family-session',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
     {
      url: 'https://www.calliwickesphotography.com/blogs/hyde-park-village-family-session',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: 'https://calliwickesphotography.com/blogs/outdoor-milestone-session',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: 'https://www.calliwickesphotography.com/blogs/extended-family-photos',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: 'https://www.calliwickesphotography.com/blogs/newborn-session',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: 'https://www.calliwickesphotography.com/blogs/sunset-photo-session',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: 'https://www.calliwickesphotography.com/blogs/tampa-senior-photographer',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: 'https://www.calliwickesphotography.com/blogs/historic-hyde-park-family-session',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: 'https://www.calliwickesphotography.com/blogs/downtown-dade-city-session',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },

    //duplicated homepages
    {
      url: 'https://www.calliwickesphotography.com/tampa-family-photographer',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.2,
    },
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
    {
      url: 'https://www.calliwickesphotography.com/land-o-lakes-family-photographer',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.2,
    },
    {
      url: 'https://www.calliwickesphotography.com/dunedin-family-photographer',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.2,
    },
    {
      url: 'https://www.calliwickesphotography.com/west-chase-family-photographer',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.2,
    },
    {
      url: 'https://www.calliwickesphotography.com/largo-family-photographer',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.2,
    },
  ];
}
