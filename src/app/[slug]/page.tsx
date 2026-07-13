import { notFound } from 'next/navigation';

import HomeLanding from '@/components/HomeLanding/HomeLanding';
import { getHeaderData } from '@/lib/queries/header';
import { getLocationPageData, getLocationPageIds } from '@/lib/queries/page-slug';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const pages = await getLocationPageIds();
  const page = pages.find((p) => p.attributes.urlSlug === slug);

  if (!page?.attributes.title) notFound();

  return {
    title: page.attributes.title,
    description: page.attributes.description,
  };
}

export async function generateStaticParams() {
  const pages = await getLocationPageIds();

  return pages.map((page) => ({
    slug: page.attributes.urlSlug,
  }));
}

export default async function Home({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const [pages, headerData] = await Promise.all([getLocationPageIds(), getHeaderData()]);
  const id = pages.find((page) => page.attributes.urlSlug === slug)?.id;

  if (id == null) notFound();

  const data = await getLocationPageData(id);

  return <HomeLanding data={data} headerData={headerData} />;
}
