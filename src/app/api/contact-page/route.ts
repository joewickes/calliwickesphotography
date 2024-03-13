export async function POST(req: Request) {
  const data = await fetch(`${process.env.STRAPI_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${process.env.STRAPI_API_TOKEN}`,
    },
    body: JSON.stringify({
      query: `{
        contactPage {
          data {
            attributes {
              heroImage {
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
              formTitle
              formParagraph
              formImage {
                data {
                  attributes {
                    url
                    alternativeText
                    width
                    height
                  }
                }
              }
              formNamePlaceholder
              formEmailPlaceholder
              formPhoneNumberPlaceholder
              formMessagePlaceholder
              formButtonText
              responseTitle
              responseParagraph
            }
          }
        }
      }
      `,
    }),
  });

  const json = await data.json();
  return Response.json({ data: json.data.contactPage.data.attributes });
}
