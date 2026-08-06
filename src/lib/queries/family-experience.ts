import { strapiFetch } from '@/lib/strapi';
import type { FamilyExperiencePageData, StrapiSingle } from '@/lib/types/strapi';

export const FAMILY_EXPERIENCE_QUERY = `{
  familyExperiencePage {
    data {
      attributes {
        heroPhoto {
          data {
            attributes {
              url
              alternativeText
              width
              height
            }
          }
        }
        heroTitle
        heroSubtitle
        familyExperienceTitle
        familyExperienceParagraph
        sessionInfoTitle
        fe_timeline_items {
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
        session_infos {
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
              subtitle
              paragraph
            }
          }
        }
        contactTitle
        contactSubtitle
        contactButtonText
        contactButtonLink
        contactImage {
          data {
            attributes {
              url
              alternativeText
              width
              height
            }
          }
        }
        aboutTitle
        aboutSubtitle
        aboutButtonText
        aboutButtonLink
        aboutImage {
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

/** Fetches the Family Experience page content. */
export async function getFamilyExperienceData(): Promise<FamilyExperiencePageData> {
  const data = await strapiFetch<{ familyExperiencePage: StrapiSingle<FamilyExperiencePageData> }>(
    FAMILY_EXPERIENCE_QUERY,
  );

  if (data?.familyExperiencePage?.data == null) {
    throw new Error('Strapi returned no data for the Family Experience Page single type — is it published?');
  }

  return data.familyExperiencePage.data.attributes;
}
