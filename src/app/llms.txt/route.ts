import { BUSINESS, isUnlistedBlog, SITE_NAME, SITE_URL } from '@/lib/constants';
import { getBlogIds } from '@/lib/queries/blog';
import { getLocationPageIds } from '@/lib/queries/page-slug';

// Regenerate hourly so the page/location/blog lists track the CMS.
export const revalidate = 3600;

/**
 * Serves /llms.txt — a plain-text summary for large language models and
 * generative search engines, following the llms.txt convention.
 */
export async function GET() {
  const [locations, blogs] = await Promise.all([getLocationPageIds(), getBlogIds()]);

  const lines: string[] = [
    `# ${SITE_NAME}`,
    '',
    `> ${SITE_NAME} is a Tampa, FL family photographer offering candid, natural-light family photo sessions across the Tampa Bay area, with over a decade of experience.`,
    '',
    '## Key facts',
    '',
    `- Business: ${SITE_NAME}`,
    `- Location: ${BUSINESS.addressLocality}, ${BUSINESS.addressRegion} (serving the greater Tampa Bay area)`,
    `- Services: Candid + portrait family photography sessions using natural light`,
    `- Phone: ${BUSINESS.telephone}`,
    `- Email: ${BUSINESS.email}`,
    `- Booking: ${SITE_URL}/contact`,
    '',
    '## Pages',
    '',
    `- [About Calli](${SITE_URL}/about): Meet the photographer behind ${SITE_NAME}.`,
    `- [Family Experience](${SITE_URL}/family-experience): What a family session looks like, start to finish.`,
    `- [Contact](${SITE_URL}/contact): Inquire about booking a session.`,
    `- [Blog](${SITE_URL}/blogs): Family photography tips and session guides.`,
  ];

  if (locations.length > 0) {
    lines.push('', '## Service areas', '');
    for (const location of locations) {
      lines.push(`- [${location.attributes.title}](${SITE_URL}/${location.attributes.urlSlug})`);
    }
  }

  // Share-only sales pages are withheld from LLMs for the same reason they are
  // withheld from the sitemap: they are sent to a client directly, not found.
  const listableBlogs = blogs.filter((blog) => !isUnlistedBlog(blog.attributes.slug));

  if (listableBlogs.length > 0) {
    lines.push('', '## Blog posts', '');
    for (const blog of listableBlogs) {
      lines.push(
        `- [${blog.attributes.title}](${SITE_URL}/blogs/${blog.attributes.slug}): ${blog.attributes.description}`,
      );
    }
  }

  return new Response(lines.join('\n') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
