import { MetadataRoute } from 'next';

import { SITE_URL } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/'] },

      // AI crawlers are split by PURPOSE, not by vendor.
      //
      // Allowed: agents that index or fetch pages so the site can be *cited* in
      // an AI answer. These send referral traffic and are the point of GEO.
      {
        userAgent: [
          'OAI-SearchBot', // ChatGPT Search index
          'ChatGPT-User', // user asked ChatGPT to open a link
          'Claude-SearchBot', // Claude search index
          'Claude-User', // user asked Claude to open a link
          'PerplexityBot', // Perplexity citation index
        ],
        allow: '/',
      },

      // Blocked: agents that collect content to TRAIN models. The photographs
      // are the product, so they are not offered as training data.
      //
      // Note: blocking Google-Extended affects Gemini training/grounding ONLY —
      // it has no effect on Googlebot or Google Search ranking.
      {
        userAgent: [
          'GPTBot', // OpenAI model training
          'ClaudeBot', // Anthropic general crawler
          'Google-Extended', // Gemini training/grounding (NOT Google Search)
          'CCBot', // Common Crawl — feeds many training corpora
          'Applebot-Extended', // Apple Intelligence training (plain Applebot unaffected)
          'Bytespider', // ByteDance training
          'meta-externalagent', // Meta AI training
          'img2dataset', // builds image training datasets
        ],
        disallow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
