import { strapiFetch } from '@/lib/strapi';
import type { HeaderData } from '@/lib/types/strapi';

export const HEADER_QUERY = `{
  header {
    data {
      attributes {
        logoText
        logoImage {
          data {
            attributes {
              url
              alternativeText
              width
              height
            }
          }
        }
        menuTitle
        social_networks {
          data {
            attributes {
              socialLink
            }
          }
        }
        menu_items {
          data {
            attributes {
              itemName
              link
            }
          }
        }
      }
    }
  }
}`;

/** Shared header data fetch used across every page, the footer, and CTAs. */
export async function getHeaderData(): Promise<HeaderData> {
  const data = await strapiFetch<{ header: { data: { attributes: HeaderData } } }>(HEADER_QUERY);
  return data.header.data.attributes;
}
