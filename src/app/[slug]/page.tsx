import { notFound } from 'next/navigation';

import HomeLanding from '@/components/HomeLanding/HomeLanding';
import JsonLd from '@/components/JsonLd/JsonLd';
import { getHeaderData } from '@/lib/queries/header';
import { getLocationPageData, getLocationPageIds } from '@/lib/queries/page-slug';
import { breadcrumbSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/constants';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const pages = await getLocationPageIds();
  const page = pages.find((p) => p.attributes.urlSlug === slug);

  if (!page?.attributes.title) notFound();

  return {
    title: page.attributes.title,
    description: page.attributes.description,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      title: page.attributes.title,
      description: page.attributes.description,
      url: `${SITE_URL}/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  const pages = await getLocationPageIds();

  return pages.map((page) => ({
    slug: page.attributes.urlSlug,
  }));
}

export default async function Home({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [pages, headerData] = await Promise.all([getLocationPageIds(), getHeaderData()]);
  const page = pages.find((page) => page.attributes.urlSlug === slug);

  if (page == null) notFound();

  const data = await getLocationPageData(page.id);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: page.attributes.title, path: `/${slug}` },
        ])}
      />
      <HomeLanding data={data} headerData={headerData} />
    </>
  );
}
