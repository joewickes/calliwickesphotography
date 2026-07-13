import Share from '@/components/Share/Share';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';
import Link from 'next/link';

import { Lora } from 'next/font/google';
const lora = Lora({ subsets: ['latin'] });

import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { notFound, redirect } from 'next/navigation';

import { getHeaderData } from '@/lib/queries/header';
import { getBlogData, getBlogIds } from '@/lib/queries/blog';
import { SITE_URL } from '@/lib/constants';

export async function generateStaticParams() {
  const blogs = await getBlogIds();

  return blogs.map((blog) => ({
    slug: blog.attributes.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (slug === '1') {
    redirect('/blogs/family-photo-investment');
  } else if (slug === '2') {
    redirect('/blogs/what-to-wear');
  } else if (slug === '3') {
    redirect('/blogs/family-session-tips');
  }

  const blogs = await getBlogIds();
  const blog = blogs.find((post) => post.attributes.slug === slug);

  if (!blog?.attributes.title) notFound();

  return {
    title: blog.attributes.title,
    description: blog.attributes.description,
    alternates: { canonical: `/blogs/${slug}` },
    openGraph: {
      title: blog.attributes.title,
      description: blog.attributes.description,
      url: `${SITE_URL}/blogs/${slug}`,
    },
  };
}

const BlogPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const [blogs, headerData] = await Promise.all([getBlogIds(), getHeaderData()]);
  const id = blogs.find((post) => post.attributes.slug === slug)?.id;

  if (id == null) notFound();

  const data = await getBlogData(id);

  const extraPostsOrig = blogs
    .filter((post) => {
      const allOtherSlugsThanThisOne = post.attributes.slug !== slug;
      const notPricingPage = post.attributes.slug !== 'pricing';
      const notProposalPricingPage = post.attributes.slug !== 'proposal-information';
      return allOtherSlugsThanThisOne && notPricingPage && notProposalPricingPage;
    })
    .sort((a, b) => Number(b.id) - Number(a.id));

  const extraPosts = [...extraPostsOrig.reverse().slice(0, 2), ...extraPostsOrig.reverse().slice(0, 4)];

  const baseUrl = process.env.URL || SITE_URL;

  return (
    <main>
      <Share urlPath={`/blogs/${slug}`} />
      <Header headerData={headerData} />
      <div className="flex flex-col xl:flex-row px-[30px] sm:px-[75px] min-h-[90dvh]">
        {/* Left/top with blog content */}
        <section
          id="blog-content"
          className="flex xl:w-[66.6dvw] flex-col pr-0 xl:pr-[25px] xl:border-r-[1px] xl:border-[#333333]"
        >
          <h2 className="text-wrap text-left text-[16px] font-thin mt-[50px] mb-[20px] tracking-wide z-10 mt-30px] ">
            {data.subtitle}
          </h2>
          <h1
            className={`${lora.className} text-left text-[35px] xl:text-[55px] flex flex-col mb-[20px] z-10 tracking-wide `}
          >
            {data.title}
          </h1>
          <div className="font-thin leading-8 mb-[50px] a-bold">
            <BlocksRenderer content={data.contentParagraph} />
          </div>
        </section>

        {/* Right/bottom meta section */}
        <section id="blog-meta" className="xl:w-[33.3dvw] pl-0 xl:pl-[25px] flex flex-col">
          <div>
            <div>
              <Image
                src={data.metaImage.data!.attributes.url}
                alt={data.metaImage.data!.attributes.alternativeText}
                width={data.metaImage.data!.attributes.width}
                height={data.metaImage.data!.attributes.height}
              />
            </div>
            <h2 className="text-[25px] my-[25px] font-semibold">{data.metaTitle}</h2>
            <h3 className="mb-[25px]">{data.metaSubtitle}</h3>
            <div className="font-thin leading-8">
              <BlocksRenderer content={data.metaParagraph} />
            </div>
          </div>
          <div className="pb-[0px] pt-[50px]">
            <Link
              href={data.metaButtonLink}
              className="mb-[100px] border border-black py-[15px] text-[16px] tracking-[.35em] px-[30px] flex sm:inline justify-center text-center"
            >
              {data.metaButtonText}
            </Link>
          </div>
          <div className="sm:mt-[50px] sm:pt-[25px] xl:border-t-[1px] xl:border-[#333333]">
            <h2 className="text-[25px] mb-[25px] font-semibold">{data.popularPostsTitle}</h2>
            <div className="flex flex-col">
              {/* Filter by most recent 2 that are not current (ref slug id) */}
              {extraPosts.map((post, idx) => {
                return (
                  <a
                    key={idx}
                    href={`${baseUrl}/blogs/${post.attributes.slug}`}
                    target="_blank"
                    className="mb-[10px] underline"
                  >
                    {post.attributes.title}
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <Footer showServices={false} />
    </main>
  );
};

export default BlogPage;
