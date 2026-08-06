import { strapiFetch } from '@/lib/strapi';
import type { FooterData, StrapiSingle } from '@/lib/types/strapi';

export const FOOTER_QUERY = `{
  footer {
    data {
      attributes {
        cwpTitle
        cwpParagraph
        cwpEmail
        cwpPhoneNumber
        newsletterTitle
        newsletterParagraph
        newsletterFormName
        newsletterFormEmail
        newsletterFacebookLink
        newsletterInstagramLink
        newsletterPinterestLink
        newsletterYelpLink
        newsletterLinkedInLink
        newsletterYouTubeLink
        newsletterSpotifyLink
        newsletterApplePodcastsLink
        directoryListingsPreamble
        directory_listings {
          data {
            attributes {
              directoryListingTitle
              directoryListingLink
            }
          }
        }
        location_home_pages (pagination: {limit:50}) {
          data {
            attributes {
              location
              urlSlug
            }
          }
        }
      }
    }
  }
}`;

/** Fetches the footer content. */
export async function getFooterData(): Promise<FooterData> {
  const data = await strapiFetch<{ footer: StrapiSingle<FooterData> }>(FOOTER_QUERY);

  if (data?.footer?.data == null) {
    throw new Error('Strapi returned no data for the Footer single type — is it published?');
  }

  return data.footer.data.attributes;
}
