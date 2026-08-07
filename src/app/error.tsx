'use client';

import { useEffect } from 'react';

import Link from 'next/link';
import { Lora } from 'next/font/google';

const lora = Lora({ subsets: ['latin'] });

/**
 * Route-level error boundary for every page under `src/app`.
 *
 * Deliberately shows no technical detail: the visitor is a prospective client,
 * so the raw message/stack is logged to the console instead.
 */
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="px-[30px] xl:px-[100px] min-h-[100dvh] flex flex-col items-center justify-center text-black text-center">
      <h1 className={`${lora.className} text-[40px] leading-1 mb-[30px]`}>{`Something went wrong on our end.`}</h1>
      <p className="font-thin max-w-[600px] mb-[20px]">
        {`This page didn't load the way it should have. It's not you — please give it another moment and try again.`}
      </p>
      <p className="font-thin max-w-[600px] mb-[50px]">
        {`If it keeps happening, I'd still love to hear from you — reach out and we'll get your session on the calendar.`}
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-[20px]">
        <button
          type="button"
          onClick={reset}
          className="border border-black py-[15px] text-[16px] tracking-[.35em] px-[30px] text-black"
        >
          {`Try Again`}
        </button>
        <Link
          href="/"
          aria-label="HomePage"
          className="border border-black py-[15px] text-[16px] tracking-[.35em] px-[30px] text-black"
        >
          {`Return to Site`}
        </Link>
        <Link
          href="/contact"
          aria-label="Contact"
          className="border border-black py-[15px] text-[16px] tracking-[.35em] px-[30px] text-black"
        >
          {`Get in Touch`}
        </Link>
      </div>
    </main>
  );
}
