export async function POST(req: Request) {
  const data = await fetch(`${process.env.STRAPI_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${process.env.STRAPI_API_TOKEN}`,
    },
    body: JSON.stringify({
      query: `
      {
            homePage {
              data {
                attributes {
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
                }
              }
            }
          
    }
      `,
    }),
  });

  const json = await data.json();
  return Response.json({ data: json.data.homePage.data.attributes });
}
