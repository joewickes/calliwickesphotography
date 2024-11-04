import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

import { Lora } from 'next/font/google';
const lora = Lora({ subsets: ['latin'] });

import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer/Footer'));
import Header from '@/components/Header/Header';
import Share from '@/components/Share/Share';

import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import ChatCTAForm from '@/components/ChatCTAForm/ChatCTAForm';

export const metadata: Metadata = {
  title: 'Family Experience',
  description: 'For families that want that perfect blend of candid and portrait.',
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
          familyExperiencePage {
            data {
              attributes {
                heroPhoto {
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
                familyExperienceTitle
                familyExperienceParagraph
                sessionInfoTitle
                fe_timeline_items {
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
                session_infos {
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
                contactSubtitle
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
                aboutTitle
                aboutSubtitle
                aboutButtonText
                aboutButtonLink
                aboutImage {
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
    return res.json().then((data) => data.data.familyExperiencePage.data.attributes);
  } catch (error) {
    console.log('error', error);
  }
}

const FamilyGalleryPage = async () => {
  const headerData = await getHeaderData();
  const data = await getData();

  return (
    <main className="xl:flex xl:flex-col xl:items-center">
      <Share urlPath="/family-experience" />
      <div className="xl:w-full">
        <Header headerData={headerData} />
      </div>

      <section className="px-[30px] pb-[100px] mb-[50px] xl:h-[80dvh] top-0 xl:w-full" id="familygallerytop">
        <h2 className="text-white text-[38px] font-thin leading-1 flex flex-col pt-[60px] xl:text-[70px] xl:pt-[20%]">{`Families + Couples`}</h2>
        <p className="text-white text-[15px] font-thin px-[40px] py-[150px]">{`Family photos made into timeless memories.`}</p>
      </section>
      <section className="px-[30px] mb-[60px] xl:flex xl:items-center xl:px-[100px] xl:mb-[150px] xl:mt-[100px]">
        <h1 className="text-[40px] leading-1 mb-[30px] xl:flex-1 xl:text-[50px]">{`The Family Experience`}</h1>
        <p className="font-thin xl:flex-1">{`My clients love my relaxed posing and the bright warmth of my images. My sessions are laid-back, meant to capture your natural smiles + laughter with your crew. My families want a beautiful family portrait and also all the silly moments it took to capture that one. Because it’s about the journey. And as your forever photographer, I’d love to help you along your way.`}</p>
      </section>

      {/* Experience Process Section */}
      <section className="xl:pt-[10px]">
        <div
          id="experience-process"
          className="px-[30px] xl:px-[50px] xl:pr-[30px] flex flex-col xl:items-start items-center justify-center xl:flex-row  max-w-[100dw] xl:justify-evenly"
        >
          <div className="flex flex-col justify-start sm:items-start flex-1 max-w-[456px] mb-[60px] xl:mb-0">
            <Image
              src={data.fe_timeline_items.data[0].attributes.image.data.attributes.url}
              height={data.fe_timeline_items.data[0].attributes.image.data.attributes.height}
              width={data.fe_timeline_items.data[0].attributes.image.data.attributes.width}
              alt={data.fe_timeline_items.data[0].attributes.image.data.attributes.alternativeText}
              className="object-cover"
            />
            <h3 className={`${lora.className} text-[35px] my-[40px]`}>
              {data.fe_timeline_items.data[0].attributes.title}
            </h3>
            <p className="font-thin">{data.fe_timeline_items.data[0].attributes.paragraph}</p>
          </div>
          <div className="flex flex-col justify-start items-start flex-1 xl:mx-[30px] max-w-[456px] mb-[60px] xl:mb-0">
            <Image
              src={data.fe_timeline_items.data[1].attributes.image.data.attributes.url}
              height={data.fe_timeline_items.data[1].attributes.image.data.attributes.height}
              width={data.fe_timeline_items.data[1].attributes.image.data.attributes.width}
              alt={data.fe_timeline_items.data[1].attributes.image.data.attributes.alternativeText}
              className="object-cover"
            />
            <h3 className={`${lora.className} text-[35px] my-[40px]`}>
              {data.fe_timeline_items.data[1].attributes.title}
            </h3>
            <p className="font-thin">{data.fe_timeline_items.data[1].attributes.paragraph}</p>
          </div>
          <div className="flex flex-col justify-start items-start flex-1 max-w-[456px] mb-[60px] xl:mb-0">
            <Image
              src={data.fe_timeline_items.data[2].attributes.image.data.attributes.url}
              height={data.fe_timeline_items.data[2].attributes.image.data.attributes.height}
              width={data.fe_timeline_items.data[2].attributes.image.data.attributes.width}
              alt={data.fe_timeline_items.data[2].attributes.image.data.attributes.alternativeText}
              className="object-cover"
            />
            <h3 className={`${lora.className} text-[35px] my-[40px]`}>
              {data.fe_timeline_items.data[2].attributes.title}
            </h3>
            <p className="font-thin">{data.fe_timeline_items.data[2].attributes.paragraph}</p>
          </div>
        </div>
      </section>

      <section className="mt-[50px] px-[30px] xl:mt-[100px] w-full">
        <h1 className="text-[40px] leading-1 flex flex-col mb-[50px] text-center xl:text-[70px]">
          {data.sessionInfoTitle}
        </h1>

        <ul>
          {data.session_infos.data.map(
            (
              session_info: {
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
                      src={session_info.attributes.image.data.attributes.url}
                      height={session_info.attributes.image.data.attributes.height}
                      width={session_info.attributes.image.data.attributes.width}
                      alt={session_info.attributes.image.data.attributes.alternativeText}
                      className="mb-[30px] xl:max-w-[457px]"
                    />
                  </div>
                  <div className="xl:flex-1 xl:flex xl:flex-col xl:items-center xl:justify-center pt-[25px] pb-[50px]">
                    <h2
                      className={`text-[40px] leading-1 flex flex-col mb-[20px] text-left xl:self-start ${
                        idx % 2 !== 0 ? 'xl:self-end' : ''
                      }`}
                    >
                      {session_info.attributes.title}
                    </h2>

                    <p
                      className={`font-bold mb-[30px] xl:self-start ${idx % 2 !== 0 ? 'xl:self-end' : ''} xl:flex xl:flex-col`}
                    >
                      {session_info.attributes.subtitle}
                    </p>

                    <span
                      className={`text-left mb-[30px] font-thin xl:self-start ${idx % 2 !== 0 ? 'xl:self-end xl:text-right' : ''}`}
                    >
                      <BlocksRenderer content={session_info.attributes.paragraph} />
                    </span>
                  </div>
                </li>
              );
            },
          )}
        </ul>
      </section>

      <section className="px-[30px] sm:px-[50px]  mt-[100px] mb-[0px] xl:w-full xl:px-[100px] xl:flex xl:flex-row bg-[#faf9f7] xl:mt-[0px]">
        <div className="flex justify-center lg:justify-end lg:pr-[50px] items-center xl:flex-1 pt-[50px] lg:pt-0">
          <div className="lg:w-[40%]">
            <Image
              src={data.aboutImage.data.attributes.url}
              height={data.aboutImage.data.attributes.height}
              width={data.aboutImage.data.attributes.width}
              className="object-cover"
              alt={data.aboutImage.data.attributes.alternativeText}
            />
          </div>
        </div>
        <div className="flex justify-center xl:justify-normal mb-[15px] xl:flex-1 flex-col xl:items-left items-start">
          <div className="lg:w-[60%] lg:mt-[100px]">
            <h2 className="text-[20px] leading-1 my-[30px] xl:text-[30px]">{data.aboutTitle}</h2>
            <p className="font-thin mb-[15px]">{data.aboutSubtitle}</p>

            <div className="xl:mt-[100px] mt-[60px] mb-[150px]">
              <Link href={data.aboutButtonLink} legacyBehavior passHref>
                <a className="border border-black py-[15px] text-[13px] tracking-[.35em] px-[30px]">
                  {data.aboutButtonText}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-[30px] sm:px-[50px] xl:px-[100px] mt-[100px] xl:w-full  xl:flex xl:flex-row-reverse xl:mt-[200px] ">
        <div className="flex justify-center xl:flex-1">
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
          <p className="font-thin mb-[15px]">{data.contactSubtitle}</p>

          <div className="xl:mt-[150px] mt-[60px] mb-[100px]">
            <Link href={data.contactButtonLink} legacyBehavior passHref>
              <a className="border border-black py-[15px] text-[13px] tracking-[.35em] px-[30px]">
                {data.contactButtonText}
              </a>
            </Link>
          </div>
        </div>
      </section>

      <ChatCTAForm />
      <Footer />
    </main>
  );
};

export default FamilyGalleryPage;
