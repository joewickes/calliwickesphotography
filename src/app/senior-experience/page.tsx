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
  title: 'Senior Experience',
  description: 'For adventurous seniors who want that perfect mix of candid and portrait.',
};

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

async function getData() {
  try {
    const res = await fetch(`${process.env.STRAPI_URL}`, {
      method: 'POST',
      next: { revalidate: 60 },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      body: JSON.stringify({
        query: ` {
          seniorExperiencePage {
            data {
              attributes {
                heroImage {
                  data {
                    attributes {
                      url
                      alternativeText
                      width
                      height
                    }
                  }
                }
                heroTitle
                heroSubtitle
                seniorExperienceTitle
                seniorExperienceParagraph
                se_timeline_items {
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
                se_session_infos {
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
                      subtitle
                      paragraph
                    }
                  }
                }
                contactTitle
                contactParagraph
                contactButtonText
                contactButtonLink
                contactImage {
                  data {
                    attributes {
                      url
                      alternativeText
                      width
                      height
                    }
                  }
                }
                sessionInfoTitle
              }
            }
          }
        }
        
        `,
      }),
    });
    return res.json().then((data) => {
      return data.data.seniorExperiencePage.data.attributes;
    });
  } catch (error) {
    console.log('error', error);
  }
}

const SeniorGalleryPage = async () => {
  const headerData = await getHeaderData();
  const data = await getData();

  return (
    <main className="xl:flex xl:flex-col xl:items-center">
      <Share urlPath="senior-experience" />
      <div className="xl:w-full">
        <Header headerData={headerData} />
      </div>
      <section
        className="mt-[10dvh] xl:mt-[20dvh] px-[30px] pb-[100px] mb-[50px] xl:h-[80dvh] top-0 xl:w-full xl:px-[100px]"
        id="seniorgallerytop"
      >
        <h2 className="text-white text-[38px] font-thin leading-1 flex flex-col pt-[60px] xl:text-[70px] xl:pt-[20%]">
          {data.heroTitle}
        </h2>
        <p className="xl:pl-0 text-white text-[15px] font-thin px-[40px] py-[150px]">{data.heroSubtitle}</p>
      </section>
      <section className="xl:mt-[100px] px-[30px] mb-[60px] xl:flex xl:items-center xl:px-[100px] xl:mb-[150px]">
        <h1 className="text-[40px] leading-1 mb-[30px] xl:flex-1 xl:text-[50px] xl:pr-[75px]">
          {data.seniorExperienceTitle}
        </h1>
        <p className="font-thin xl:flex-1">{data.seniorExperienceParagraph}</p>
      </section>

      {/* Experience Process Section */}
      <section className="xl:pt-[10px]">
        <div
          id="experience-process"
          className="px-[30px] xl:px-[50px] xl:pr-[30px] flex flex-col xl:items-start items-center justify-center xl:flex-row  max-w-[100dw] xl:justify-evenly"
        >
          <div className="flex flex-col justify-start sm:items-start flex-1 max-w-[456px] mb-[60px] xl:mb-0">
            <Image
              src={data.se_timeline_items.data[0].attributes.image.data.attributes.url}
              height={data.se_timeline_items.data[0].attributes.image.data.attributes.height}
              width={data.se_timeline_items.data[0].attributes.image.data.attributes.width}
              alt={data.se_timeline_items.data[0].attributes.image.data.attributes.alternativeText}
              className="object-cover"
            />
            <h3 className={`${lora.className} text-[35px] my-[40px]`}>
              {data.se_timeline_items.data[0].attributes.title}
            </h3>
            <p className="font-thin">{data.se_timeline_items.data[0].attributes.paragraph}</p>
          </div>
          <div className="flex flex-col justify-start items-start flex-1 xl:mx-[30px] max-w-[456px] mb-[60px] xl:mb-0">
            <Image
              src={data.se_timeline_items.data[1].attributes.image.data.attributes.url}
              height={data.se_timeline_items.data[1].attributes.image.data.attributes.height}
              width={data.se_timeline_items.data[1].attributes.image.data.attributes.width}
              alt={data.se_timeline_items.data[1].attributes.image.data.attributes.alternativeText}
              className="object-cover"
            />
            <h3 className={`${lora.className} text-[35px] my-[40px]`}>
              {data.se_timeline_items.data[1].attributes.title}
            </h3>
            <p className="font-thin">{data.se_timeline_items.data[1].attributes.paragraph}</p>
          </div>
          <div className="flex flex-col justify-start items-start flex-1 max-w-[456px] mb-[60px] xl:mb-0">
            <Image
              src={data.se_timeline_items.data[2].attributes.image.data.attributes.url}
              height={data.se_timeline_items.data[2].attributes.image.data.attributes.height}
              width={data.se_timeline_items.data[2].attributes.image.data.attributes.width}
              alt={data.se_timeline_items.data[2].attributes.image.data.attributes.alternativeText}
              className="object-cover"
            />
            <h3 className={`${lora.className} text-[35px] my-[40px]`}>
              {data.se_timeline_items.data[2].attributes.title}
            </h3>
            <p className="font-thin">{data.se_timeline_items.data[2].attributes.paragraph}</p>
          </div>
        </div>
      </section>

      <section className="mt-[60px] px-[30px] xl:mt-[100px] w-full">
        <h1 className="text-[40px] leading-1 flex flex-col mb-[50px] text-center xl:text-[70px]">
          {data.sessionInfoTitle}
        </h1>

        <ul>
          {data.se_session_infos.data.map(
            (
              se_session_info: {
                attributes: {
                  image: {
                    data: { attributes: { url: string; height: number; width: number; alternativeText: string } };
                  };
                  title: string;
                  subtitle: string;
                  paragraph: any;
                };
              },
              idx: number,
            ) => {
              return (
                <li
                  key={idx}
                  className={`xl:py-[50px] ${
                    idx === 1 ? 'xl:border xl:border-x-0 xl:border-b-0 xl:border-t-1 xl:border-[#f2f2f2]' : ''
                  } xl:flex ${idx % 2 === 0 ? '' : ' xl:flex-row-reverse'}`}
                >
                  <div className="xl:flex-1 flex items-center justify-center">
                    <Image
                      src={se_session_info.attributes.image.data.attributes.url}
                      height={se_session_info.attributes.image.data.attributes.height}
                      width={se_session_info.attributes.image.data.attributes.width}
                      alt={se_session_info.attributes.image.data.attributes.alternativeText}
                      className="mb-[30px] xl:max-w-[457px]"
                    />
                  </div>
                  <div className="xl:flex-1 xl:flex xl:flex-col xl:items-center xl:justify-center pt-[25px] pb-[50px]">
                    <h2
                      className={`text-[40px] leading-1 flex flex-col mb-[20px] text-left xl:self-start ${
                        idx % 2 !== 0 ? 'xl:self-end' : ''
                      }`}
                    >
                      {se_session_info.attributes.title}
                    </h2>

                    <p
                      className={`font-bold mb-[30px] xl:self-start ${idx % 2 !== 0 ? 'xl:self-end' : ''} xl:flex xl:flex-col`}
                    >
                      {se_session_info.attributes.subtitle}
                    </p>

                    <span
                      className={`text-left mb-[30px] font-thin xl:self-start ${idx % 2 !== 0 ? 'xl:self-end text-right' : ''}`}
                    >
                      <BlocksRenderer content={se_session_info.attributes.paragraph} />
                    </span>
                  </div>
                </li>
              );
            },
          )}
        </ul>
      </section>

      <section className="px-[30px] sm:px-[50px] mt-[100px] mb-[60px] xl:w-full xl:px-[100px] flex flex-col xl:flex-row-reverse xl:mt-[200px] justify-center items-start">
        <div className="xl:flex xl:justify-center xl:flex-1">
          <Image
            src={data.contactImage.data.attributes.url}
            height={data.contactImage.data.attributes.height}
            width={data.contactImage.data.attributes.width}
            className="object-cover"
            alt={data.contactImage.data.attributes.alternativeText}
          />
        </div>
        <div className="flex justify-center xl:justify-normal mb-[15px] xl:flex-1 flex-col xl:items-left items-start">
          <h2 className="text-[40px] leading-1 my-[30px] xl:text-[60px]">{data.contactTitle}</h2>
          <p className="font-thin mb-[15px]">{data.contactParagraph}</p>

          <div className="xl:mt-[150px] mt-[60px] mb-[150px]">
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

export default SeniorGalleryPage;
