import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import { Lora } from 'next/font/google';
const lora = Lora({ subsets: ['latin'] });

import Share from '@/components/Share/Share';
import Header from '@/components/Header/Header';
import Carousel from '@/components/Carousels/ImageCarousel';
import FAQs from '@/components/FAQs/FAQs';
import NewsletterForm from '@/components/Forms/NewsletterForm';
import Reviews from '@/components/Reviews/Reviews';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

const Footer = dynamic(() => import('@/components/Footer/Footer'));

type dataStructure = {
  heroSubtitle: string;
  heroTitle: string;
  heroSubHeading: string;
  aboutMePhotoSidebar: string;
  aboutMeSubtitle: string;
  aboutMeTitle: string;
  aboutMeParagraph: any;
  aboutMeButtonText: string;
  aboutMeButtonLink: string;
  aboutMeImage: {
    data: {
      attributes: {
        url: string;
        alternativeText: string;
        width: number;
        height: number;
      };
    };
  };
  preExperienceTitle: string;
  preExperienceParagraph: any;
  preExperienceImage: {
    data: {
      attributes: {
        url: string;
        alternativeText: string;
        width: number;
        height: number;
      };
    };
  };
  preExperiencePhotoSidebar: string;
  experienceTitle: string;
  home_experience_timeline_items: {
    data: {
      attributes: {
        homeExperienceTimelineImage: {
          data: {
            attributes: {
              url: string;
              alternativeText: string;
              width: number;
              height: number;
            };
          };
        };
        homeExperienceTimelineTitle: string;
        homeExperienceTimelineParagraph: any;
      };
    };
  };
  newsletterSubtitle: string;
  newsletterTitle: string;
  newsletterParagraph: any;
  newletterFormName: string;
  newsletterFormEmail: string;
  home_carousel_items: {
    data: {
      attributes: {
        homeCarouselImage: {
          data: {
            attributes: {
              url: string;
              alternativeText: string;
              width: number;
              height: number;
            };
          };
        };
      };
    };
  };
  homeFaqTitle: string;
  home_faqs: {
    data: {
      attributes: {
        homeFaqQuestion: string;
        homeFaqAnswer: any;
      };
    };
  };
  homeContactTitle: string;
  homeContactParagraph: any;
  homeContactButtonText: string;
  homeContactButtonLink: string;
  homeContactPhoto: {
    data: {
      attributes: {
        url: string;
        alternativeText: string;
        width: number;
        height: number;
      };
    };
  };
  homeContactPhotoSidebar: string;
};

async function getHeaderData() {
  try {
    const res = await fetch(
      `${process?.env?.ENV === 'local' ? 'http://' + process.env.VERCEL_URL : 'https://' + process.env.VERCEL_URL}/api/header`,
      { method: 'POST' },
    );
    return res.json().then((data) => data.data);
  } catch (error) {
    console.log('error', error);
  }
}

async function getData() {
  try {
    const res = await fetch(
      `${process?.env?.ENV === 'local' ? 'http://' + process.env.VERCEL_URL : 'https://' + process.env.VERCEL_URL}/api/home-page`,
      { method: 'POST' },
    );
    return res.json().then((data) => data.data);
  } catch (error) {
    console.log('error', error);
  }
}

export default async function Home() {
  const headerData = await getHeaderData();
  const data = await getData();

  console.log('data', data.aboutMeImage.data.attributes.url);

  return (
    <>
      <main>
        <Share />
        <Header headerData={headerData} />

        {/* Hero Section */}
        <section
          id="home"
          className=" flex flex-col items-center justify-center sm:mt-[18dvh] mt-[12dvh] overflow-hidden"
        >
          <div className="sm:h-[500px] w-[140dvw] xl:w-full overflow-hidden flex justify-center items-start">
            <Image
              src="/images/Home Updated/familyofthree.webp"
              priority
              alt="Family of three hugging"
              className="object-cover sm:mt-[-65px] lg:mt-[-200px] mt-0"
              height={1149}
              width={1724}
            />
          </div>
          <div className="px-[30px]">
            <h1 className="text-nowrap text-center text-[12px] font-thin mt-[50px] mb-[20px] tracking-wide z-10 mt-30px] ">
              {data.heroSubtitle}
            </h1>
            <p
              className={`${lora.className} text-center text-[35px] xl:text-[55px] flex flex-col mb-[20px] z-10 tracking-wide `}
            >
              <span>{data.heroTitle}</span> <span>{``}</span>
            </p>
            <p className="text-center text-[20px] my-[20px] font-thin tracking-wide z-10 mt-[30px] ">
              {data.heroSubHeading}
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="px-[30px] sm:px-[75px] xl:flex xl:pt-[50px]">
          <div className="flex justify-center xl:items-center 2xl:items-end mb-[60px] xl:flex-1">
            <div className="flex">
              <p className="vertical-rl  xl:pr-[100px] w-0 h-0 xl:w-auto xl:h-auto mt-[120px] xl:mt-0 self-end text-[12px] font-thin invisible xl:visible">
                {data.aboutMePhotoSidebar}
              </p>
            </div>

            <div className="mt-[40px] xl:mt-0 h-[90dvw] w-[90dvw] max-w-[560px] max-h-[840px] xl:h-auto xl:w-auto overflow-hidden xl:pl-[5px] pr-[5px]">
              <Image
                priority
                src={data.aboutMeImage.data.attributes.url}
                alt={data.aboutMeImage.data.attributes.alternativeText}
                height={data.aboutMeImage.data.attributes.height}
                width={data.aboutMeImage.data.attributes.width}
                className="object-cover"
              />
            </div>
            <div>
              <p className="vertical-rl xl:pr-[100px] mt-[120px] xl:mt-0 text-[12px] font-thin xl:hidden visible">
                {data.aboutMeSubtitle}
              </p>
            </div>
          </div>
          <div className="xl:flex-1 xl:flex xl:flex-col xl:justify-center xl:pl-[30px] xl:pr-[70px] xl:mb-[100px]">
            <h2 className="text-[15px] mt-[20px]">{`FAMILY PHOTOGRAPHY IN TAMPA, FL`}</h2>
            <h3 className={`${lora.className} text-[35px] mt-[40px] mb-[20px]`}>{data.aboutMeTitle}</h3>
            <span className="font-thin leading-8 mb-[30px]">
              <BlocksRenderer content={data.aboutMeParagraph} />
            </span>

            <div className="pb-[80px] xl:pb-[0px]">
              <Link href={data.aboutMeButtonLink} legacyBehavior passHref>
                <a className="mb-[100px] border border-black py-[15px] text-[13px] tracking-[.35em] px-[30px] flex sm:inline justify-center text-center">
                  {data.aboutMeButtonText}
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="xl:px-[100px]  mt-[25px] bg-[#faf9f7]">
          <Reviews />
        </section>

        {/* Experience Section */}
        <section
          id="home-experience"
          className="xl:pl-[100px] px-[30px] pr-[30px] xl:flex xl:flex-row-reverse xl:pt-[100px] max-w-[100dw]"
        >
          <div className="flex mb-[60px] xl:flex-1 flex-col items-center">
            <div className="mt-[120px] xl:mt-0 h-[90dvw] w-[90dvw] max-w-[560px] max-h-[840px] xl:h-auto xl:w-auto overflow-hidden xl:pl-[5px] pr-[5px]">
              <Image
                src={data.preExperienceImage.data.attributes.url}
                alt={data.preExperienceImage.data.attributes.alternativeText}
                height={data.preExperienceImage.data.attributes.height}
                width={data.preExperienceImage.data.attributes.width}
                className="object-cover  mt-[-30dvw] sm:mt-0"
              />
            </div>
            <p className="w-0 h-0 xl:w-auto xl:h-auto xl:mb-[50px] mt-[10px] text-[12px] font-thin invisible xl:visible">
              {data.preExperiencePhotoSidebar}
            </p>
          </div>
          <div className="xl:flex-1 xl:flex xl:flex-col xl:justify-center xl:pr-[100px] xl:mb-[100px] md:px-[75px]">
            <h2 className={`${lora.className} text-[35px] text-right mb-[60px]`}>{data.preExperienceTitle}</h2>
            <span className="font-thin leading-8 text-right mb-[30px]">
              <BlocksRenderer content={data.preExperienceParagraph} />
            </span>
          </div>
        </section>

        {/* Experience Process Section */}
        <section className="xl:pt-[10px]">
          <div className="pl-[30px] xl:pl-[50px] flex items-center justify-center mb-[40px]">
            <h2
              className={`${lora.className} text-[35px] pr-[30px] text-center xl:text-nowrap text-wrap flex items-center justify-center`}
            >
              {data.experienceTitle}
            </h2>
            <hr className="w-full border-[#333333]" />
          </div>
          <div
            id="experience-process"
            className="px-[30px] xl:px-[50px] xl:pr-[30px] flex flex-col xl:items-start items-center justify-center xl:flex-row  max-w-[100dw] xl:justify-evenly"
          >
            <div className="flex flex-col justify-start sm:items-start flex-1 max-w-[456px] mb-[60px] xl:mb-0">
              <Image
                src={
                  data.home_experience_timeline_items.data[0].attributes.homeExperienceTimelineImage.data.attributes.url
                }
                height={
                  data.home_experience_timeline_items.data[0].attributes.homeExperienceTimelineImage.data.attributes
                    .height
                }
                width={
                  data.home_experience_timeline_items.data[0].attributes.homeExperienceTimelineImage.data.attributes
                    .width
                }
                alt={
                  data.home_experience_timeline_items.data[0].attributes.homeExperienceTimelineImage.data.attributes
                    .alternativeText
                }
                className="object-cover"
              />
              <h3 className={`${lora.className} text-[35px] my-[40px]`}>
                {data.home_experience_timeline_items.data[0].attributes.homeExperienceTimelineTitle}
              </h3>
              <p className="font-thin">
                {data.home_experience_timeline_items.data[0].attributes.homeExperienceTimelineParagraph}
              </p>
            </div>
            <div className="flex flex-col justify-start items-start flex-1 xl:mx-[30px] max-w-[456px] mb-[60px] xl:mb-0">
              <Image
                src={
                  data.home_experience_timeline_items.data[1].attributes.homeExperienceTimelineImage.data.attributes.url
                }
                height={
                  data.home_experience_timeline_items.data[1].attributes.homeExperienceTimelineImage.data.attributes
                    .height
                }
                width={
                  data.home_experience_timeline_items.data[1].attributes.homeExperienceTimelineImage.data.attributes
                    .width
                }
                alt={
                  data.home_experience_timeline_items.data[1].attributes.homeExperienceTimelineImage.data.attributes
                    .alternativeText
                }
                className="object-cover"
              />
              <h3 className={`${lora.className} text-[35px] my-[40px]`}>
                {data.home_experience_timeline_items.data[1].attributes.homeExperienceTimelineTitle}
              </h3>
              <p className="font-thin">
                {data.home_experience_timeline_items.data[1].attributes.homeExperienceTimelineParagraph}
              </p>
            </div>
            <div className="flex flex-col justify-start items-start flex-1 max-w-[456px] mb-[60px] xl:mb-0">
              <Image
                src={
                  data.home_experience_timeline_items.data[2].attributes.homeExperienceTimelineImage.data.attributes.url
                }
                height={
                  data.home_experience_timeline_items.data[2].attributes.homeExperienceTimelineImage.data.attributes
                    .height
                }
                width={
                  data.home_experience_timeline_items.data[2].attributes.homeExperienceTimelineImage.data.attributes
                    .width
                }
                alt={
                  data.home_experience_timeline_items.data[2].attributes.homeExperienceTimelineImage.data.attributes
                    .alternativeText
                }
                className="object-cover"
              />
              <h3 className={`${lora.className} text-[35px] my-[40px]`}>
                {data.home_experience_timeline_items.data[2].attributes.homeExperienceTimelineTitle}
              </h3>
              <p className="font-thin">
                {data.home_experience_timeline_items.data[2].attributes.homeExperienceTimelineParagraph}
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section
          id="newsletter"
          className="xl:px-[50px] px-[30px] sm:flex sm:flex-col md:flex-row xl:justify-center sm:items-center mt-[100px] bg-[#faf9f7] pt-[100px] lg:px-[75px]"
        >
          <div className="flex flex-col w-full flex-1 xl:pl-[100px] 2xl:items-end 2xl:justify-start md:pr-[100px]">
            <h2 className="text-[15px]">{data.newsletterSubtitle}</h2>
            <h3 className={`${lora.className} text-[35px] mb-[20px]`}>{data.newsletterTitle}</h3>
            <p className="font-thin leading-8 mb-[60px] text-wrap text-left 2xl:text-right">
              {data.newsletterParagraph}
            </p>
          </div>
          <div className="flex-1 flex justify-end 2xl:justify-center items-start w-full">
            <NewsletterForm />
          </div>
        </section>

        {/* Carousel Section */}
        <section id="carousel" className="mt-[50px]">
          <Carousel images={data.home_carousel_items.data} />
        </section>

        {/* FAQ Section */}
        <section id="home-faq" className="px-[30px] xl:px-[100px] mt-[100px]">
          <h2 className="text-[13px] font-bold tracking-wider my-[50px]">{data.homeFaqTitle}</h2>
          <ul className=" xl:grid xl:grid-rows-2 xl:grid-flow-col pb-[60px] xl:pb-0">
            {data.home_faqs.data.map((faq: any, index: number) => {
              return <FAQs key={index} index={index} faq={faq.attributes} />;
            })}
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-[30px] xl:flex xl:flex-row-reverse xl:py-[100px]">
          <div className="w-full mb-[50px] xl:flex-1">
            <div className="w-full flex justify-center items-end xl:pr-[100px] ">
              <div className="max-w-[323px] max-h-[484px] w-full xl:max-h-[484px] xl:max-w-[323px] pr-[5px]">
                <Image
                  src={data.homeContactPhoto.data[0].attributes.url}
                  height={data.homeContactPhoto.data[0].attributes.height}
                  width={data.homeContactPhoto.data[0].attributes.width}
                  className="object-cover "
                  alt={data.homeContactPhoto.data[0].attributes.alternativeText}
                />
              </div>
              <p className="vertical-rl xl:pl-[100px] xl:mb-[2px] xl:mt-0 justify-self-end text-[12px] font-thin">
                {data.homeContactPhotoSidebar}
              </p>
            </div>
          </div>
          <div className="xl:flex xl:flex-col xl:flex-1 xl:align-center xl:pl-[100px] xl:justify-center xl:align-center">
            <h2 className={`${lora.className} text-[35px] mb-[30px]`}>{data.homeContactTitle}</h2>
            <p className="font-thin leading-8 mb-[60px]">{data.homeContactParagraph}</p>
            <div>
              <Link href={data.homeContactButtonLink} legacyBehavior passHref>
                <a className="mb-[20px] border border-black py-[15px] text-[13px] tracking-[.35em] px-[30px]">
                  {data.homeContactButtonText}
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
