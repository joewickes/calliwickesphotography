export async function POST(req: Request) {
  const data = await fetch(`${process.env.STRAPI_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${process.env.STRAPI_API_TOKEN}`,
    },
    body: JSON.stringify({
      query: `{
          aboutMePage {
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
                heroParagraph
                heroButtonText
                heroButtonLink
                aboutMePhoto {
                  data {
                    attributes {
                      url
                      alternativeText
                      width
                      height
                    }
                  }
                }
                aboutMeTitle
                aboutMeSubtitle
                aboutMeParagraph
                aboutMeButtonText
                aboutMeButtonLink
                contactTitle
                contactButtonLink
                contactImage
              }
            }
          }
        }
      `,
    }),
  });

  return Response.json(data);
}
