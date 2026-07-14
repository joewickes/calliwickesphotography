import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Lora } from 'next/font/google';
const lora = Lora({ subsets: ['latin'] });

import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer/Footer'));
import Header from '@/components/Header/Header';
import Share from '@/components/Share/Share';

import { getHeaderData } from '@/lib/queries/header';
import { getBlogIds } from '@/lib/queries/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Family photography tips, session guides, and what-to-wear advice from Calli Wickes, a Tampa, FL family photographer.',
  alternates: { canonical: '/blogs' },
  openGraph: {
    title: 'Blog',
    description:
      'Family photography tips, session guides, and what-to-wear advice from Calli Wickes, a Tampa, FL family photographer.',
    url: '/blogs',
    type: 'website',
  },
};

const BlogIndexPage = async () => {
  const [headerData, blogs] = await Promise.all([getHeaderData(), getBlogIds()]);

  const posts = [...blogs].sort(
    (a, b) => new Date(b.attributes.publishedAt).getTime() - new Date(a.attributes.publishedAt).getTime(),
  );

  return (
    <main>
      <Share urlPath="/blogs" />
      <Header headerData={headerData} />

      <section className="px-[30px] sm:px-[75px] pt-[50px] pb-[100px] min-h-[80dvh]">
        <h1 className={`${lora.className} text-[40px] xl:text-[55px] mb-[50px] tracking-wide`}>The Blog</h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[40px]">
          {posts.map((post) => {
            const image = post.attributes.metaImage.data?.attributes;
            return (
              <li key={post.id}>
                <Link href={`/blogs/${post.attributes.slug}`} className="flex flex-col group">
                  {image && (
                    <div className="overflow-hidden mb-[20px]">
                      <Image
                        src={image.url}
                        alt={image.alternativeText || post.attributes.title}
                        width={image.width}
                        height={image.height}
                        className="object-cover w-full transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </div>
                  )}
                  <h2 className={`${lora.className} text-[24px] mb-[10px] tracking-wide`}>{post.attributes.title}</h2>
                  <p className="font-thin leading-7 text-[15px]">{post.attributes.description}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <Footer />
    </main>
  );
};

export default BlogIndexPage;
