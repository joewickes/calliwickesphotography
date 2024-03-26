import type { Metadata } from 'next';

import Image from 'next/image';
import Link from 'next/link';

import { Lora } from 'next/font/google';
const lora = Lora({ subsets: ['latin'] });

import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer/Footer'));
import Header from '@/components/Header/Header';
import Share from '@/components/Share/Share';

import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export const metadata: Metadata = {
  title: 'Meet Calli',

  description:
    'Hey there, meet Calli! A photographer who loves catching those sweet moments with you + your favorite people!',
};

async function getHeaderData() {
  try {
    const res = await fetch(`${process.env.STRAPI_URL}`, {
      next: { revalidate: 60 },
      method: 'POST',
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

async function getData() {
  try {
    const res = await fetch(`${process.env.STRAPI_URL}`, {
      next: { revalidate: 60 },
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      body: JSON.stringify({
        query: `{
          aboutMePage {
          data {
            attributes {
              heroPhoto {
                data {
                  attributes {
                    height
                    width
                    url
                    alternativeText
                  }
                }
              }
              heroParagraph
              heroButtonLink
              heroButtonText
              aboutMePhoto {
                data {
                  attributes {
                    height
                    width
                    url
                    alternativeText
                  }
                }
              }
              aboutMeTitle
              aboutMeSubtitle
              aboutMeParagraph
              aboutMeButtonLink
              aboutMeButtonText
              contactTitle
              contactParagraph
              contactButtonLink
              contactButtonText
              contactImage {
                data {
                  attributes {
                    height
                    width
                    url
                    alternativeText
                  }
                }
              }
              facts {
                data {
                  attributes {
                    factParagraph
                  }
                }
              }
              am_timeline_items {
                data {
                  attributes {
                    image {
                      data {
                        attributes {
                          url
                          alternativeText
                          width
                          height
                        }
                      }
                    }
                    title
                    paragraph
                  }
                }
              }
            }
          }
        }
      }`,
      }),
    });
    return res.json().then((data) => {
      //
      return data.data.aboutMePage.data.attributes;
    });
  } catch (error) {
    console.log('error', error);
  }
}

const AboutPage = async () => {
  const headerData = await getHeaderData();
  const data = await getData();

  return (
    <main>
      <Share />
      <Header headerData={headerData} />

      <section className="px-[30px] pt-[40px] flex flex-col items-center bg-[#f2f2f2] pb-[50px] lg:mt-[18dvh] mt-[12dvh]">
        <div className="min-h-[225px] w-full overflow-hidden flex justify-center">
          <Image
            src={data.heroPhoto.data.attributes.url}
            height={data.heroPhoto.data.attributes.height}
            width={data.heroPhoto.data.attributes.width}
            className="object-cover h-full"
            alt={data.heroPhoto.data.attributes.alternativeText}
          />
        </div>
        <p className="font-thin leading-8 mb-[30px] mt-[40px] text-[25px] w-[60dvw] text-center xl:leading-[3rem]">
          {data.heroParagraph}
        </p>
      </section>

      <section id="about" className="px-[30px] xl:flex pt-[25px] s">
        <div className="flex justify-center mb-[60px] xl:flex-1">
          <div className="xl:mt-[120px] h-[90dvw] w-[90dvw] md:h-auto xl:w-auto overflow-hidden xl:pl-[100px]">
            <Image
              src={data.aboutMePhoto.data.attributes.url}
              alt={data.aboutMePhoto.data.attributes.alternativeText}
              height={data.aboutMePhoto.data.attributes.height}
              width={data.aboutMePhoto.data.attributes.width}
              className="object-cover mt-[-10dvw] xl:mt-[-100px]"
            />
          </div>
        </div>
        <div className="xl:flex-1 xl:flex xl:flex-col xl:justify-center xl:pr-[100px] xl:pl-[50px]">
          <h2 className="text-[35px] mb-[20px]">{data.aboutMeTitle}</h2>
          <h3 className="text-[15px] mb-[60px]">{data.aboutMeSubtitle}</h3>
          <div className="font-thin leading-8 mb-[60px]">
            <BlocksRenderer content={data.aboutMeParagraph} />
          </div>
          <div>
            <Link href={data.aboutMeButtonLink} legacyBehavior passHref>
              <a className="mb-[60px] border border-black py-[15px] text-[13px] tracking-[.35em] px-[30px]">
                {data.aboutMeButtonText}
              </a>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-[30px] mt-[60px] xl:mt-0">
        <ol className="xl:flex">
          {data.facts.data.map((fact: any, index: number) => {
            return (
              <li key={index} className="xl:px-[50px]">
                <p className="mb-[30px] font-thin">{`${
                  (index + 1).toString().length ? `0${index + 1}` : index + 1
                }.`}</p>
                <h2 className={`mb-[30px] text-[30px] ${lora.className}`}>{`Fact ${index + 1}`}</h2>
                <p className="font-thin leading-8 mb-[60px]">{fact.attributes.factParagraph}</p>
              </li>
            );
          })}
        </ol>
      </section>

      {/* Experience Process Section */}
      <section className="xl:pt-[10px]">
        <div
          id="experience-process"
          className="px-[30px] xl:px-[50px] xl:pr-[30px] flex flex-col xl:items-start items-center justify-center xl:flex-row  max-w-[100dw] xl:justify-evenly"
        >
          <div className="flex flex-col justify-start sm:items-start flex-1 max-w-[456px] mb-[60px] xl:mb-0">
            <Image
              src={data.am_timeline_items.data[0].attributes.image.data.attributes.url}
              height={data.am_timeline_items.data[0].attributes.image.data.attributes.height}
              width={data.am_timeline_items.data[0].attributes.image.data.attributes.width}
              alt={data.am_timeline_items.data[0].attributes.image.data.attributes.alternativeText}
              className="object-cover"
            />
            <h3 className={`${lora.className} text-[35px] my-[40px]`}>
              {data.am_timeline_items.data[0].attributes.title}
            </h3>
            <p className="font-thin">{data.am_timeline_items.data[0].attributes.paragraph}</p>
          </div>
          <div className="flex flex-col justify-start items-start flex-1 xl:mx-[30px] max-w-[456px] mb-[60px] xl:mb-0">
            <Image
              src={data.am_timeline_items.data[1].attributes.image.data.attributes.url}
              height={data.am_timeline_items.data[1].attributes.image.data.attributes.height}
              width={data.am_timeline_items.data[1].attributes.image.data.attributes.width}
              alt={data.am_timeline_items.data[1].attributes.image.data.attributes.alternativeText}
              className="object-cover"
            />
            <h3 className={`${lora.className} text-[35px] my-[40px]`}>
              {data.am_timeline_items.data[1].attributes.title}
            </h3>
            <p className="font-thin">{data.am_timeline_items.data[1].attributes.paragraph}</p>
          </div>
          <div className="flex flex-col justify-start items-start flex-1 max-w-[456px] mb-[60px] xl:mb-0">
            <Image
              src={data.am_timeline_items.data[2].attributes.image.data.attributes.url}
              height={data.am_timeline_items.data[2].attributes.image.data.attributes.height}
              width={data.am_timeline_items.data[2].attributes.image.data.attributes.width}
              alt={data.am_timeline_items.data[2].attributes.image.data.attributes.alternativeText}
              className="object-cover"
            />
            <h3 className={`${lora.className} text-[35px] my-[40px]`}>
              {data.am_timeline_items.data[2].attributes.title}
            </h3>
            <p className="font-thin">{data.am_timeline_items.data[2].attributes.paragraph}</p>
          </div>
        </div>
      </section>

      <section className="px-[30px] mt-[100px] mb-[60px] xl:w-full xl:px-[100px] xl:flex xl:flex-row-reverse xl:mt-[200px]">
        <div className="flex justify-center xl:flex-1">
          <Image
            src={data.contactImage.data.attributes.url}
            height={data.contactImage.data.attributes.height}
            width={data.contactImage.data.attributes.width}
            className="object-cover"
            alt={data.contactImage.data.attributes.alternativeText}
          />
        </div>
        <div className="flex justify-center xl:justify-normal mb-[15px] xl:flex-1 flex-col xl:items-left items-center xl:items-start">
          <h2 className="text-[40px] leading-1 my-[50px] xl:text-[60px]">{data.contactTitle}</h2>
          <p className="font-thin mb-[15px]">{data.contactParagraph}</p>

          <div className="xl:mt-[100px] mt-[60px] mb-[60px] self-start">
            <Link href={data.contactButtonLink} legacyBehavior passHref>
              <a className="border border-black py-[15px] text-[13px] tracking-[.35em] px-[30px]">
                {data.contactButtonText}
              </a>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default AboutPage;
