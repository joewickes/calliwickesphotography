export async function POST(req: Request) {
  const data = await fetch(`${process.env.STRAPI_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${process.env.STRAPI_API_TOKEN}`,
    },
    body: JSON.stringify({
      query: `{
        header {
          data {
            attributes {
              logoText
              logoImage {
                data {
                  attributes {
                    url
                    alternativeText
                    width
                    height
                  }
                }
              }
              menuTitle
            }
          }
        }
      }`,
    }),
  });

  return Response.json(data);
}

// NEED MENU ITEMS
