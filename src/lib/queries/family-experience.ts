import { strapiFetch } from '@/lib/strapi';
import type { FamilyExperiencePageData } from '@/lib/types/strapi';

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
  const data = await strapiFetch<{ familyExperiencePage: { data: { attributes: FamilyExperiencePageData } } }>(
    FAMILY_EXPERIENCE_QUERY,
  );
  return data.familyExperiencePage.data.attributes;
}
