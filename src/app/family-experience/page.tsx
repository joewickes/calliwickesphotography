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
import ExperienceTimeline from '@/components/ExperienceTimeline/ExperienceTimeline';

import { getHeaderData } from '@/lib/queries/header';
import { getFamilyExperienceData } from '@/lib/queries/family-experience';

export const metadata: Metadata = {
  title: 'Family Experience',
  description: 'For families that want that perfect blend of candid and portrait.',
};

const FamilyGalleryPage = async () => {
  const [headerData, data] = await Promise.all([getHeaderData(), getFamilyExperienceData()]);

  const timelineItems = data.fe_timeline_items.data.map((item) => ({
    imageUrl: item.attributes.image.data!.attributes.url,
    imageAlt: item.attributes.image.data!.attributes.alternativeText,
    imageWidth: item.attributes.image.data!.attributes.width,
    imageHeight: item.attributes.image.data!.attributes.height,
    title: item.attributes.title,
    paragraph: item.attributes.paragraph,
  }));

  return (
    <main className="xl:flex xl:flex-col xl:items-center">
      <Share urlPath="/family-experience" />
      <div className="xl:w-full">
        <Header headerData={headerData} />
      </div>

      <section
        className="px-[30px] pb-[100px] mb-[50px] h-[30dvh] lg:h-[50dvh] top-0 xl:w-full"
        id="familygallerytop"
      ></section>
      <section className="px-[30px] mb-[60px] flex flex-col items-center justify-center xl:px-[100px] xl:mb-[100px] ">
        <h1 className="text-[40px] leading-1 mb-[25px] xl:flex-1 xl:text-[50px]">{`The Family Experience`}</h1>
        <p className="font-thin xl:flex-1 md:w-[60%]">{`My clients love my relaxed posing and the bright warmth of my images. My sessions are laid-back, meant to capture your natural smiles + laughter with your crew. My families want a beautiful family portrait and also all the silly moments it took to capture that one. Because it’s about the journey. And as your forever photographer, I’d love to help you along your way.`}</p>
      </section>

      {/* Experience Process Section */}
      <section className="xl:pt-[10px]">
        <ExperienceTimeline items={timelineItems} />
      </section>

      <section className="mt-[50px] px-[30px] xl:mt-[100px] w-full">
        <h1 className="text-[40px] leading-1 flex flex-col mb-[50px] text-center xl:text-[70px]">
          {data.sessionInfoTitle}
        </h1>

        <ul>
          {data.session_infos.data.map((session_info, idx) => {
            return (
              <li
                key={idx}
                className={`xl:py-[50px] ${
                  idx === 1 ? 'xl:border xl:border-x-0 xl:border-b-0 xl:border-t-1 xl:border-[#f2f2f2]' : ''
                } xl:flex ${idx % 2 === 0 ? '' : ' xl:flex-row-reverse'}`}
              >
                <div className="xl:flex-1 flex items-center justify-center">
                  <Image
                    src={session_info.attributes.image.data!.attributes.url}
                    height={session_info.attributes.image.data!.attributes.height}
                    width={session_info.attributes.image.data!.attributes.width}
                    alt={session_info.attributes.image.data!.attributes.alternativeText}
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
          })}
        </ul>
      </section>

      <section className="px-[30px]  mt-[100px] mb-[0px] xl:w-full xl:px-[100px] xl:flex xl:flex-row bg-[#faf9f7] xl:mt-[0px]">
        <div className="flex justify-center xl:justify-end xl:pr-[100px] items-center xl:flex-1 pt-[50px] lg:pt-0">
          <div className="md:w-[60%] pt-[50px] xl:py-[50px]">
            <Image
              src={data.aboutImage.data!.attributes.url}
              height={data.aboutImage.data!.attributes.height}
              width={data.aboutImage.data!.attributes.width}
              className="object-cover"
              alt={data.aboutImage.data!.attributes.alternativeText}
            />
          </div>
        </div>
        <div className="flex justify-center xl:justify-normal mb-[15px] xl:flex-1 flex-col xl:items-left items-center">
          <div className="">
            <h2 className="text-[20px] leading-1 my-[30px] pt-[20px] xl:text-[30px]">{data.aboutTitle}</h2>
            <p className="font-thin mb-[15px]">{data.aboutSubtitle}</p>

            <div className="xl:mt-[100px] mt-[60px] mb-[150px]">
              <Link href={data.aboutButtonLink} legacyBehavior passHref>
                <a className="border border-black py-[15px] text-[16px] tracking-[.35em] px-[30px]">
                  {data.aboutButtonText}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-[30px] xl:px-[100px] mt-[100px] xl:w-full xl:flex xl:flex-row-reverse xl:mt-[200px]">
        <div className="flex justify-center pb-[50px] xl:w-[50%]">
          <Image
            src={data.contactImage.data!.attributes.url}
            height={data.contactImage.data!.attributes.height}
            width={data.contactImage.data!.attributes.width}
            className="object-cover xl:w-[50%]"
            alt={data.contactImage.data!.attributes.alternativeText}
          />
        </div>
        <div className="flex justify-center xl:justify-normal mb-[15px] xl:flex-1 flex-col xl:items-left xl:pl-[100px] items-start">
          <h2 className="text-[35px] leading-1 my-[30px] ">{data.contactTitle}</h2>
          <p className="font-thin mb-[15px]">{data.contactSubtitle}</p>

          <div className="xl:mt-[150px] mt-[60px] mb-[100px]">
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

export default FamilyGalleryPage;
