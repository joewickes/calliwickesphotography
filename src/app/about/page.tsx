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
import ChatCTAForm from '@/components/ChatCTAForm/ChatCTAForm';
import ExperienceTimeline from '@/components/ExperienceTimeline/ExperienceTimeline';

import { getHeaderData } from '@/lib/queries/header';
import { getAboutData } from '@/lib/queries/about';

export const metadata: Metadata = {
  title: 'Meet Calli',

  description:
    'Hey there, meet Calli! A photographer who loves catching those sweet moments with you + your favorite people!',
};

const AboutPage = async () => {
  const [headerData, data] = await Promise.all([getHeaderData(), getAboutData()]);

  const timelineItems = data.am_timeline_items.data.map((item) => ({
    imageUrl: item.attributes.image.data!.attributes.url,
    imageAlt: item.attributes.image.data!.attributes.alternativeText,
    imageWidth: item.attributes.image.data!.attributes.width,
    imageHeight: item.attributes.image.data!.attributes.height,
    title: item.attributes.title,
    paragraph: item.attributes.paragraph,
  }));

  return (
    <main>
      <Share />
      <Header headerData={headerData} />

      <section className="px-[30px] pt-[40px] flex flex-col items-center bg-[#f2f2f2] pb-[50px]">
        <div className="min-h-[225px] w-full overflow-hidden flex justify-center">
          <Image
            src={data.heroPhoto.data!.attributes.url}
            height={data.heroPhoto.data!.attributes.height}
            width={data.heroPhoto.data!.attributes.width}
            className="object-cover h-full"
            alt={data.heroPhoto.data!.attributes.alternativeText}
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
              src={data.aboutMePhoto.data?.attributes.url ?? ''}
              alt={data.aboutMePhoto.data?.attributes.alternativeText ?? ''}
              height={data.aboutMePhoto.data?.attributes.height}
              width={data.aboutMePhoto.data?.attributes.width}
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
              <a className="mb-[60px] border border-black py-[15px] text-[16px] tracking-[.35em] px-[30px]">
                {data.aboutMeButtonText}
              </a>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-[30px] mt-[60px] xl:mt-0">
        <ol className="xl:flex">
          {data.facts.data.map((fact, index) => {
            return (
              <li key={index} className="xl:px-[50px]">
                <p className="mb-[30px] font-thin">{String(index + 1).padStart(2, '0')}</p>
                <h2 className={`mb-[30px] text-[30px] ${lora.className}`}>{fact.attributes.factTitle}</h2>
                <p className="font-thin leading-8 mb-[60px]">{fact.attributes.factParagraph}</p>
              </li>
            );
          })}
        </ol>
      </section>

      {/* Experience Process Section */}
      <section className="xl:pt-[10px]">
        <ExperienceTimeline items={timelineItems} />
      </section>

      <section className="px-[30px] mt-[100px] mb-[60px] xl:w-full xl:px-[100px] xl:flex xl:flex-row-reverse xl:mt-[200px]">
        <div className="flex justify-center xl:flex-1">
          <Image
            src={data.contactImage.data!.attributes.url}
            height={data.contactImage.data!.attributes.height}
            width={data.contactImage.data!.attributes.width}
            className="object-cover"
            alt={data.contactImage.data!.attributes.alternativeText}
          />
        </div>
        <div className="flex justify-center xl:justify-normal mb-[15px] xl:flex-1 flex-col xl:items-left items-center xl:items-start">
          <h2 className="text-[40px] leading-1 my-[50px] xl:text-[60px]">{data.contactTitle}</h2>
          <p className="font-thin mb-[15px]">{data.contactParagraph}</p>

          <div className="xl:mt-[100px] mt-[60px] mb-[60px] self-start sm:self-center xl:self-start">
            <Link href={data.contactButtonLink} legacyBehavior passHref>
              <a className="border border-black py-[15px] text-[16px] tracking-[.35em] px-[30px]">
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

export default AboutPage;
