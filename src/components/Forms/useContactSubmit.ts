'use client';

import { useState } from 'react';

export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  newsletter: boolean;
};

/**
 * Shared submit lifecycle for the contact and newsletter forms.
 * Owns the disabled/submitted/error state and the POST to /api/email so the
 * two forms don't each re-implement it. Returns whether the send succeeded so
 * callers can clear their own field state.
 */
export function useContactSubmit() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  async function submit(payload: ContactPayload): Promise<boolean> {
    setIsDisabled(true);
    setError('');

    try {
      const res = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitted(true);
        return true;
      }

      setError('Something went wrong. Please try again.');
      return false;
    } catch {
      setError('Network error. Please check your connection and try again.');
      return false;
    } finally {
      setIsDisabled(false);
    }
  }

  return { isDisabled, submitted, error, submit };
}
