import { ImageResponse } from 'next/og';

import { SITE_NAME } from '@/lib/constants';

export const alt = `${SITE_NAME} — Tampa, FL Family Photographer`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/**
 * Default Open Graph / Twitter share image, generated at build time. Uses a
 * clean typographic layout on the site's brand cream so it renders reliably
 * without depending on binary design assets. Routes can override this by
 * defining their own image (blog posts supply their Strapi metaImage instead).
 */
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#faf9f7',
        color: '#333333',
        fontFamily: 'Georgia, serif',
      }}
    >
      <div style={{ fontSize: 30, letterSpacing: 6, textTransform: 'uppercase', color: '#8a8578' }}>
        Tampa, FL Family Photographer
      </div>
      <div
        style={{
          fontSize: 96,
          marginTop: 24,
          marginBottom: 24,
          textAlign: 'center',
          lineHeight: 1.1,
          padding: '0 80px',
        }}
      >
        {SITE_NAME}
      </div>
      <div style={{ width: 120, height: 2, backgroundColor: '#333333' }} />
      <div style={{ fontSize: 30, marginTop: 28, fontStyle: 'italic', color: '#555' }}>
        Candid, natural-light family sessions
      </div>
    </div>,
    size,
  );
}
