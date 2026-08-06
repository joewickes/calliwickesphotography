/**
 * Shared Strapi GraphQL fetch helper.
 *
 * Posts a GraphQL query to the Strapi endpoint and returns the `data` payload.
 * Errors are intentionally NOT swallowed: missing configuration, a failed
 * request, a GraphQL error, or a response with no `data` all throw so that
 * pages surface the real problem instead of crashing later on `undefined`.
 */

/** How long a single Strapi request may take before it is aborted. */
const REQUEST_TIMEOUT_MS = 10_000;

/** Reads a required env var, throwing a message that names the missing variable. */
function requireEnv(name: 'STRAPI_URL' | 'STRAPI_API_TOKEN'): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(
      `Missing required environment variable ${name}. Set it in .env.local (or the hosting env) so the site can reach Strapi.`,
    );
  }

  return value;
}

export async function strapiFetch<T>(
  query: string,
  options?: { variables?: Record<string, unknown>; revalidate?: number },
): Promise<T> {
  const url = requireEnv('STRAPI_URL');
  const token = requireEnv('STRAPI_API_TOKEN');

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query, variables: options?.variables }),
    next: { revalidate: options?.revalidate ?? 60 },
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  });

  if (!res.ok) {
    throw new Error(`Strapi request failed: ${res.status}`);
  }

  const json = await res.json();

  if (json.errors) {
    throw new Error(`Strapi GraphQL error: ${JSON.stringify(json.errors)}`);
  }

  if (json.data == null) {
    throw new Error(
      'Strapi response contained no `data` payload — the query may have been rejected or the content type is unavailable.',
    );
  }

  return json.data as T;
}
