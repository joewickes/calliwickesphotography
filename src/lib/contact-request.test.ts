import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import {
  validateContactRequest,
  isRateLimited,
  FIELD_LIMITS,
  __getRateLimitTrackedKeyCountForTests,
} from './contact-request';

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

  describe('window expiry', () => {
    afterEach(() => {
      vi.useRealTimers();
    });

    it('allows requests again once the window has fully elapsed', () => {
      vi.useFakeTimers();
      const key = `test-window-expiry-${process.hrtime.bigint()}`;

      for (let i = 0; i < 5; i++) isRateLimited(key);
      expect(isRateLimited(key)).toBe(true); // 6th request within the window is blocked.

      vi.advanceTimersByTime(60_001); // Past the 60s window.

      expect(isRateLimited(key)).toBe(false); // Old hits have aged out; this one is fresh.
    });
  });
});

describe('rate limiter memory pruning', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('sweeps out keys whose hits have fully aged out of the window', async () => {
    // Isolate this test's module state so the shared prune-call counter and hits map
    // aren't polluted by (or don't pollute) the other tests in this file.
    vi.resetModules();
    vi.useFakeTimers();
    const freshModule = await import('./contact-request');

    freshModule.isRateLimited('prune-seed');
    expect(freshModule.__getRateLimitTrackedKeyCountForTests()).toBe(1);

    vi.advanceTimersByTime(60_001); // The seed key's only hit is now fully expired.

    // Drive the opportunistic sweep (every 100th call) with fresh, still-live keys.
    for (let i = 0; i < 100; i++) {
      freshModule.isRateLimited(`prune-fresh-${i}`);
    }

    // Only the 100 fresh (unexpired) keys remain — if the seed key hadn't been
    // pruned, the map would hold 101 entries instead.
    expect(freshModule.__getRateLimitTrackedKeyCountForTests()).toBe(100);
  });
});
