import { notFound } from 'next/navigation';

import { strapiFetch } from '@/lib/strapi';
import type { BlogPageData, BlogSummary, StrapiSingle } from '@/lib/types/strapi';

export const BLOG_IDS_QUERY = `{
  blogs (pagination: {limit:50}) {
    data {
      id
      attributes {
        title
        description
        slug
        publishedAt
        updatedAt
        metaImage {
          data {
            attributes {
              url
              alternativeText
              width
              height
            }
          }
        }
      }
    }
  }
}`;

/** Fetches the id/title/description/slug summary for every blog post. */
export async function getBlogIds(): Promise<BlogSummary[]> {
  const data = await strapiFetch<{ blogs: { data: BlogSummary[] } }>(BLOG_IDS_QUERY);
  return data.blogs.data;
}

/** Fetches the full content for a single blog post, or 404s if missing. */
export async function getBlogData(id: string | number): Promise<BlogPageData> {
  const data = await strapiFetch<{ blog: StrapiSingle<BlogPageData> }>(`{
    blog(id: ${id}) {
      data {
        attributes {
          subtitle
          title
          contentParagraph
          metaImage {
            data {
              attributes {
                url
                alternativeText
                height
                width
              }
            }
          }
          metaTitle
          metaSubtitle
          metaParagraph
          metaButtonLink
          metaButtonText
          popularPostsTitle
          metaImage {
            data {
              attributes {
                url
                alternativeText
                width
                height
              }
            }
          }
        }
      }
    }
  }`);

  if (data?.blog?.data == null) notFound();

  return data.blog.data.attributes;
}
