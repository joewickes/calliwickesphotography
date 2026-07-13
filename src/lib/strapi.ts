/**
 * Shared Strapi GraphQL fetch helper.
 *
 * Posts a GraphQL query to the Strapi endpoint and returns the `data` payload.
 * Errors are intentionally NOT swallowed: a failed request or GraphQL error
 * throws so that pages surface the real problem instead of crashing later on
 * `undefined`.
 */
export async function strapiFetch<T>(
  query: string,
  options?: { variables?: Record<string, unknown>; revalidate?: number },
): Promise<T> {
  const res = await fetch(`${process.env.STRAPI_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
    body: JSON.stringify({ query, variables: options?.variables }),
    next: { revalidate: options?.revalidate ?? 60 },
  });

  if (!res.ok) {
    throw new Error(`Strapi request failed: ${res.status}`);
  }

  const json = await res.json();

  if (json.errors) {
    throw new Error(`Strapi GraphQL error: ${JSON.stringify(json.errors)}`);
  }

  return json.data as T;
}
