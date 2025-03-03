import Share from '@/components/Share/Share';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';
import Link from 'next/link';

import { Lora } from 'next/font/google';
const lora = Lora({ subsets: ['latin'] });

import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { redirect } from 'next/navigation';

async function getBlogIds() {
  try {
    const res = await fetch(`${process.env.STRAPI_URL}`, {
      method: 'POST',
      next: { revalidate: 60 },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      body: JSON.stringify({
        query: `
        {
          blogs (pagination: {limit:50}) {
            data {
              id
              attributes {
                title
                description
                slug
              }
            }
          }
        }
        `,
      }),
    });
    return res.json().then((data) => {
      return { data: data.data.blogs.data };
    });
  } catch (error) {
    console.log('error', error);
  }
}

async function getData(id: number) {
  try {
    const res = await fetch(`${process.env.STRAPI_URL}`, {
      method: 'POST',
      next: { revalidate: 60 },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      body: JSON.stringify({
        query: `
        {
          blog(id: ${id}) {
            data {
              attributes {
                subtitle
                title
                contentParagraph
                metaImage {
                  data {
                    attributes {
                      url
                      alternativeText
                      height
                      width
                    }
                  }
                }
                metaTitle
                metaSubtitle
                metaParagraph
                metaButtonLink
                metaButtonText
                popularPostsTitle
                metaImage {
                  data {
                    attributes {
                      url
                      alternativeText
                      width
                      height
                    }
                  }
                }
              }
            }
          }
        }
        `,
      }),
    });

    return res.json().then((data) => {
      if (data?.data?.blog?.data === null) redirect('/404');

      return data?.data?.blog?.data?.attributes;
    });
  } catch (error) {
    console.log('error', error);
    redirect('/404');
  }
}

async function getHeaderData() {
  try {
    const res = await fetch(`${process.env.STRAPI_URL}`, {
      method: 'POST',
      next: { revalidate: 60 },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      body: JSON.stringify({
        query: `{
          header {
            data {
              attributes {
                logoText
                logoImage {
                  data {
                    attributes {
                      url
                      alternativeText
                      width
                      height
                    }
                  }
                }
                menuTitle
                social_networks {
                  data {
                    attributes {
                      socialLink
                    }
                  }
                }
                menu_items {
                  data {
                    attributes {
                      itemName
                      link
                    }
                  }
                }
              }
            }
          }
        }`,
      }),
    });
    return res.json().then((data) => data.data.header.data.attributes);
  } catch (error) {
    console.log('error', error);
  }
}

export async function generateStaticParams() {
  const data = await getBlogIds();

  return data?.data.map((blog: any) => ({
    slug: blog.attributes.slug,
  }));
}

export async function generateMetadata({ params }: any) {
  let { slug } = params;
  let title: string | null = null;
  let description: string | null = null;

  if (slug === '1') {
    redirect('/blogs/family-photo-investment');
  } else if (slug === '2') {
    redirect('/blogs/what-to-wear');
  } else if (slug === '3') {
    redirect('/blogs/family-session-tips');
  }

  const extraPostsData = await getBlogIds();
  title = extraPostsData?.data?.find((post: any) => post.attributes.slug === slug)?.attributes?.title;
  description = extraPostsData?.data?.find((post: any) => post.attributes.slug === slug)?.attributes?.description;

  if (!title) redirect('/404');

  return {
    title,
    description,
  };
}

const BlogPage = async ({ params }: any) => {
  const { slug } = params;
  const extraPostsData = await getBlogIds();
  const headerData = await getHeaderData();
  const data = await getData(extraPostsData?.data.find((post: any) => post.attributes.slug === slug)?.id);

  const extraPostsOrig = extraPostsData?.data
    .filter((post: any) => {
      const allOtherSlugsThanThisOne = post.attributes.slug !== slug;
      const notPricingPage = post.attributes.slug !== 'pricing';
      const notProposalPricingPage = post.attributes.slug !== 'proposal-information';
      return allOtherSlugsThanThisOne && notPricingPage && notProposalPricingPage;
    })
    .sort((a: any, b: any) => b.id - a.id);

  const extraPosts = [...extraPostsOrig.reverse().slice(0, 2), ...extraPostsOrig.reverse().slice(0, 4)];

  return (
    <>
      {data ? (
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
                    src={data.metaImage.data.attributes.url}
                    alt={data.metaImage.data.attributes.alternativeText}
                    width={data.metaImage.data.attributes.width}
                    height={data.metaImage.data.attributes.height}
                  />
                </div>
                <h2 className="text-[25px] my-[25px] font-semibold">{data.metaTitle}</h2>
                <h3 className="mb-[25px]">{data.metaSubtitle}</h3>
                <div className="font-thin leading-8">
                  <BlocksRenderer content={data.metaParagraph} />
                </div>
              </div>
              <div className="pb-[0px] pt-[50px]">
                <Link href={data.metaButtonLink} legacyBehavior passHref>
                  <a className="mb-[100px] border border-black py-[15px] text-[16px] tracking-[.35em] px-[30px] flex sm:inline justify-center text-center">
                    {data.metaButtonText}
                  </a>
                </Link>
              </div>
              <div className="sm:mt-[50px] sm:pt-[25px] xl:border-t-[1px] xl:border-[#333333]">
                <h2 className="text-[25px] mb-[25px] font-semibold">{data.popularPostsTitle}</h2>
                <div className="flex flex-col">
                  {/* Filter by most recent 2 that are not current (ref slug id) */}
                  {extraPosts?.map((post: any, idx: number) => {
                    return (
                      <a
                        key={idx}
                        href={`${process.env.URL}/blogs/${post.attributes.slug}`}
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
      ) : null}
    </>
  );
};

export default BlogPage;
