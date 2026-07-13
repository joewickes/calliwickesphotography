import { describe, it, expect } from 'vitest';
import { validateContactRequest, isRateLimited, FIELD_LIMITS } from './contact-request';

describe('validateContactRequest', () => {
  const validContact = { name: 'Jane Doe', email: 'jane@example.com', message: 'Hello, I have a question.' };

  it('accepts a valid contact submission and normalizes the value', () => {
    const result = validateContactRequest(validContact);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value.email).toBe('jane@example.com');
      expect(result.value.newsletter).toBe(false);
    }
  });

  it('accepts a newsletter submission without a message', () => {
    const result = validateContactRequest({ name: 'Jane', email: 'jane@example.com', newsletter: true });
    expect(result.ok).toBe(true);
    if (result.ok) expect(result.value.newsletter).toBe(true);
  });

  it('rejects non-object bodies', () => {
    expect(validateContactRequest(null).ok).toBe(false);
    expect(validateContactRequest('nope').ok).toBe(false);
    expect(validateContactRequest(42).ok).toBe(false);
  });

  it('rejects a contact submission missing the message', () => {
    const result = validateContactRequest({ name: 'Jane', email: 'jane@example.com' });
    expect(result.ok).toBe(false);
  });

  it('rejects blank required fields', () => {
    const result = validateContactRequest({ ...validContact, name: '   ' });
    expect(result.ok).toBe(false);
  });

  it('rejects an invalid email address', () => {
    for (const email of ['not-an-email', 'missing@domain', 'no-at-sign.com', '']) {
      expect(validateContactRequest({ ...validContact, email }).ok).toBe(false);
    }
  });

  it('trips the honeypot when the hidden company field is filled', () => {
    const result = validateContactRequest({ ...validContact, company: 'bot corp' });
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.error).toMatch(/spam/i);
  });

  it('ignores an empty honeypot field', () => {
    expect(validateContactRequest({ ...validContact, company: '' }).ok).toBe(true);
  });

  it('rejects fields that exceed their length caps', () => {
    expect(validateContactRequest({ ...validContact, name: 'x'.repeat(FIELD_LIMITS.name + 1) }).ok).toBe(false);
    expect(validateContactRequest({ ...validContact, message: 'y'.repeat(FIELD_LIMITS.message + 1) }).ok).toBe(false);
  });
});

describe('isRateLimited', () => {
  it('allows a burst up to the limit, then blocks further requests', () => {
    const key = `test-allow-${process.hrtime.bigint()}`;
    const results = Array.from({ length: 7 }, () => isRateLimited(key));
    // First 5 requests within the window are allowed (not limited).
    expect(results.slice(0, 5)).toEqual([false, false, false, false, false]);
    // The 6th and beyond are blocked.
    expect(results[5]).toBe(true);
    expect(results[6]).toBe(true);
  });

  it('tracks distinct keys independently', () => {
    const busy = `test-busy-${process.hrtime.bigint()}`;
    const fresh = `test-fresh-${process.hrtime.bigint()}`;
    for (let i = 0; i < 6; i++) isRateLimited(busy);
    expect(isRateLimited(fresh)).toBe(false);
  });
});
