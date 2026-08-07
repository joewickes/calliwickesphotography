'use client';

import { useEffect } from 'react';

import { Lora, Raleway } from 'next/font/google';

import './globals.css';

const lora = Lora({ subsets: ['latin'] });
const raleway = Raleway({ subsets: ['latin'] });

/**
 * Last-resort error boundary for failures in the root layout itself. Because it
 * replaces the root layout it must render its own `<html>`/`<body>`, and it
 * cannot rely on the router, so it links with plain anchors.
 */
export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className={raleway.className}>
        <main className="px-[30px] xl:px-[100px] min-h-[100dvh] flex flex-col items-center justify-center text-black text-center">
          <h1 className={`${lora.className} text-[40px] leading-1 mb-[30px]`}>{`Something went wrong on our end.`}</h1>
          <p className="font-thin max-w-[600px] mb-[20px]">
            {`The site didn't load the way it should have. It's not you — please give it another moment and try again.`}
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
            {/* Plain anchors on purpose: the root layout failed, so a client-side
                navigation would re-render the same broken tree. A full document
                load is what actually recovers here. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/"
              aria-label="HomePage"
              className="border border-black py-[15px] text-[16px] tracking-[.35em] px-[30px] text-black"
            >
              {`Return to Site`}
            </a>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/contact"
              aria-label="Contact"
              className="border border-black py-[15px] text-[16px] tracking-[.35em] px-[30px] text-black"
            >
              {`Get in Touch`}
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
