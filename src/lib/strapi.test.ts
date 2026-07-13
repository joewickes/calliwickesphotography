import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { strapiFetch } from './strapi';

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
}

describe('strapiFetch', () => {
  beforeEach(() => {
    process.env.STRAPI_URL = 'https://cms.example.com/graphql';
    process.env.STRAPI_API_TOKEN = 'test-token';
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('returns the data payload on a successful response', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => jsonResponse({ data: { hello: 'world' } })),
    );
    await expect(strapiFetch('{ hello }')).resolves.toEqual({ hello: 'world' });
  });

  it('POSTs the query with a Bearer auth header', async () => {
    const fetchMock = vi.fn(async () => jsonResponse({ data: {} }));
    vi.stubGlobal('fetch', fetchMock);

    await strapiFetch('{ q }');

    const [url, init] = fetchMock.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe('https://cms.example.com/graphql');
    expect(init.method).toBe('POST');
    expect((init.headers as Record<string, string>).Authorization).toBe('Bearer test-token');
    expect(JSON.parse(init.body as string).query).toBe('{ q }');
  });

  it('throws on a non-ok HTTP response', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => jsonResponse({}, 500)),
    );
    await expect(strapiFetch('{ q }')).rejects.toThrow(/500/);
  });

  it('throws when the response contains GraphQL errors', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => jsonResponse({ errors: [{ message: 'boom' }] })),
    );
    await expect(strapiFetch('{ q }')).rejects.toThrow(/GraphQL error/);
  });
});
