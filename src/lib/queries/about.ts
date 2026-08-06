import { strapiFetch } from '@/lib/strapi';
import type { AboutPageData, StrapiSingle } from '@/lib/types/strapi';

export const ABOUT_QUERY = `{
  aboutMePage {
    data {
      attributes {
        heroPhoto {
          data {
            attributes {
              height
              width
              url
              alternativeText
            }
          }
        }
        heroParagraph
        heroButtonLink
        heroButtonText
        aboutMePhoto {
          data {
            attributes {
              height
              width
              url
              alternativeText
            }
          }
        }
        aboutMeTitle
        aboutMeSubtitle
        aboutMeParagraph
        aboutMeButtonLink
        aboutMeButtonText
        contactTitle
        contactParagraph
        contactButtonLink
        contactButtonText
        contactImage {
          data {
            attributes {
              height
              width
              url
              alternativeText
            }
          }
        }
        facts {
          data {
            attributes {
              factTitle
              factParagraph
            }
          }
        }
        am_timeline_items {
          data {
            attributes {
              image {
                data {
                  attributes {
                    url
                    alternativeText
                    width
                    height
                  }
                }
              }
              title
              paragraph
            }
          }
        }
      }
    }
  }
}`;

/** Fetches the About / Meet Calli page content. */
export async function getAboutData(): Promise<AboutPageData> {
  const data = await strapiFetch<{ aboutMePage: StrapiSingle<AboutPageData> }>(ABOUT_QUERY);

  if (data?.aboutMePage?.data == null) {
    throw new Error('Strapi returned no data for the About Me Page single type — is it published?');
  }

  return data.aboutMePage.data.attributes;
}
