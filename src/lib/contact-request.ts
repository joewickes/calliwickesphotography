// Validation and best-effort rate limiting for the public contact/newsletter endpoint.

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const FIELD_LIMITS = {
  name: 100,
  email: 254,
  phone: 40,
  message: 5000,
} as const;

export type ContactRequest = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  newsletter?: boolean;
  // Honeypot: bots fill hidden fields; humans leave them empty.
  company?: string;
};

export type ValidationResult = { ok: true; value: ContactRequest } | { ok: false; error: string };

export function validateContactRequest(data: unknown): ValidationResult {
  if (typeof data !== 'object' || data === null) {
    return { ok: false, error: 'Invalid request body' };
  }

  const body = data as Record<string, unknown>;

  // Honeypot tripped — silently treated as invalid by the caller.
  if (typeof body.company === 'string' && body.company.trim() !== '') {
    return { ok: false, error: 'Spam detected' };
  }

  const newsletter = body.newsletter === true;
  const requiredFields: Array<keyof typeof FIELD_LIMITS> = newsletter
    ? ['name', 'email']
    : ['name', 'email', 'message'];

  for (const field of requiredFields) {
    const value = body[field];
    if (typeof value !== 'string' || value.trim() === '') {
      return { ok: false, error: `Missing required field: ${field}` };
    }
  }

  for (const [field, max] of Object.entries(FIELD_LIMITS)) {
    const value = body[field];
    if (typeof value === 'string' && value.length > max) {
      return { ok: false, error: `Field "${field}" exceeds maximum length of ${max}` };
    }
  }

  const email = String(body.email);
  if (!EMAIL_PATTERN.test(email)) {
    return { ok: false, error: 'Invalid email address' };
  }

  return {
    ok: true,
    value: {
      name: String(body.name),
      email,
      phone: typeof body.phone === 'string' ? body.phone : undefined,
      message: typeof body.message === 'string' ? body.message : '',
      newsletter,
    },
  };
}

// Best-effort in-memory rate limiter. Note: serverless instances are ephemeral and
// not shared, so this only throttles bursts hitting the same warm instance. For
// durable limits, back this with Upstash/Vercel KV.
const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((ts) => now - ts < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  return recent.length > MAX_REQUESTS_PER_WINDOW;
}
