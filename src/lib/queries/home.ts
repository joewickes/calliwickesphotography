import { strapiFetch } from '@/lib/strapi';
import type { HomePageData, StrapiSingle } from '@/lib/types/strapi';

/**
 * The full set of attributes rendered by the home landing layout. Shared by the
 * root `homePage` singleton and each `locationHomePage` entry so both stay in
 * sync.
 */
export const HOME_CONTENT_FIELDS = `
  heroSubtitle
  heroTitle
  heroSubHeading
  aboutMePhotoSidebar
  aboutMeSubtitle
  aboutMeTitle
  aboutMeParagraph
  aboutMeButtonText
  aboutMeButtonLink
  aboutMeImage {
    data {
      attributes {
        url
        alternativeText
        width
        height
      }
    }
  }
  preExperienceTitle
  preExperienceParagraph
  preExperienceButtonText
  preExperienceButtonLink
  preExperienceImage {
    data {
      attributes {
        url
        alternativeText
        width
        height
      }
    }
  }
  preExperiencePhotoSidebar
  experienceTitle
  home_experience_timeline_items {
    data {
      attributes {
        homeExperienceTimelineImage {
          data {
            attributes {
              url
              alternativeText
              width
              height
            }
          }
        }
        homeExperienceTimelineTitle
        homeExperienceTimelineParagraph
      }
    }
  }
  newsletterSubtitle
  newsletterTitle
  newsletterParagraph
  newletterFormName
  newsletterFormEmail
  home_carousel_items {
    data {
      attributes {
        homeCarouselImage {
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
  homeFaqTitle
  home_faqs {
    data {
      attributes {
        homeFaqQuestion
        homeFaqAnswer
      }
    }
  }
  homeContactTitle
  homeContactParagraph
  homeContactButtonText
  homeContactButtonLink
  homeContactPhoto {
    data {
      attributes {
        url
        alternativeText
        width
        height
      }
    }
  }
  homeContactPhotoSidebar
  blogResourceHeader
  blog_resources {
    data {
      attributes {
        link
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
      }
    }
  }
`;

export const HOME_QUERY = `{
  homePage {
    data {
      attributes {
        ${HOME_CONTENT_FIELDS}
      }
    }
  }
}`;

/** Fetches the root home page content. */
export async function getHomeData(): Promise<HomePageData> {
  const data = await strapiFetch<{ homePage: StrapiSingle<HomePageData> }>(HOME_QUERY);

  if (data?.homePage?.data == null) {
    throw new Error('Strapi returned no data for the Home Page single type — is it published?');
  }

  return data.homePage.data.attributes;
}
