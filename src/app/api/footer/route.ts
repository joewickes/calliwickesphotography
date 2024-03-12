export async function POST(req: Request) {
  const data = await fetch(`${process.env.STRAPI_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${process.env.STRAPI_API_TOKEN}`,
    },
    body: JSON.stringify({
      query: `{
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
              directoryListingsPreamble
            }
          }
        }
      }`,
    }),
  });

  const json = await data.json();
  return Response.json({ data: json.data.footer.data.attributes });
}

// NEED DIRECTORY LISTINGS
