import { notFound } from 'next/navigation';

import { strapiFetch } from '@/lib/strapi';
import { HOME_CONTENT_FIELDS } from '@/lib/queries/home';
import type { HomePageData, LocationPageSummary, StrapiSingle } from '@/lib/types/strapi';

export const LOCATION_PAGE_IDS_QUERY = `{
  locationHomePages (pagination: {limit:100}) {
    data {
      id
      attributes {
        urlSlug
        title
        description
      }
    }
  }
}`;

/** Fetches the id/slug/title/description summary for every location home page. */
export async function getLocationPageIds(): Promise<LocationPageSummary[]> {
  const data = await strapiFetch<{ locationHomePages: { data: LocationPageSummary[] } }>(
    LOCATION_PAGE_IDS_QUERY,
  );
  return data.locationHomePages.data;
}

/** Fetches the full content for a single location home page, or 404s if missing. */
export async function getLocationPageData(id: string | number): Promise<HomePageData> {
  const data = await strapiFetch<{ locationHomePage: StrapiSingle<HomePageData> }>(`{
    locationHomePage(id: ${id}) {
      data {
        attributes {
          ${HOME_CONTENT_FIELDS}
        }
      }
    }
  }`);

  if (data?.locationHomePage?.data == null) notFound();

  return data.locationHomePage.data.attributes;
}
