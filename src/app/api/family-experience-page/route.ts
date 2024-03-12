export async function POST(req: Request) {
  const data = await fetch(`${process.env.STRAPI_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${process.env.STRAPI_API_TOKEN}`,
    },
    body: JSON.stringify({
      query: ` {
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
            }
          }
        }
      }
      
      `,
    }),
  });

  return Response.json(data);
}
