import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer/Footer'));
import Header from '@/components/Header/Header';
import FAQs from '@/components/FAQs/FAQs';
import Share from '@/components/Share/Share';

export const metadata: Metadata = {
  title: 'Experience Calli Wickes Photography',
  description:
    'Discover the seamless and personalized experience at Calli Wickes Photography. From initial consultation to the final delivery, the process is designed to capture your moments with creativity and precision. Explore the steps involved in creating stunning visual stories, including personalized planning, expert photo sessions, and meticulous post-production. Trust Calli Wickes to turn your vision into timeless memories.',
};

const ExperiencePage = () => {
  const steps = [
    {
      title: `Fill out the form`,
      description: `Once you’ve made up your mind, complete the form, and I will be getting back to you as soon as possible. We'll communicate in picking a date, time + location.`,
    },
    {
      title: `Picture time`,
      description: `Picture day is finally here! Time to meet, talk, connect, and get to know each other. I will take care of all the logistics, posing + helping you feel like a natural!`,
    },
    {
      title: `Delivering photos`,
      description: `One or two weeks after your session, you will receive your edited pictures, ready to be printed and proudly displayed.`,
    },
  ];

  return (
    <>
      <Share />
      <Header />
      <section className="mt-[20dvh] px-[30px] md:flex">
        <div className="md:flex md:flex-col md:items-start md:justify-center md:flex-1 md:px-[100px]">
          <h2 className="text-center text-[25px] md:text-[35px]">{`Just relax + let's take some pictures`}</h2>
          <p className="mt-[30px] font-thin md:w-[75%] ">{`This isn't about making sure you pick out the perfect outfit + stand just the right way. This is about capturing you - the real you. Yes, take the time to pick out an outfit you love. Then just show up. I'll take care of all the logistics so you just get to enjoy yourself as I capture all your best moments. `}</p>
        </div>
        <div className="md:flex md:flex-col md:items-center md:flex-1 md:pr-[100px]">
          <Image
            src="/images/Experience/happyfloridafamily.webp"
            height={989}
            width={659}
            alt="Tampa Bay Family Photography"
            className="mt-[30px] mb-[20px]"
          />
          <p className="font-thin text-[12px] text-center">{`Family photos for you to always remember`}</p>
        </div>
      </section>

      <section className="px-[30px] mt-[60px]">
        <h1 className="text-[40px] leading-1 flex flex-col mb-[50px] md:text-[70px] md:ml-[100px]">{`The CWP Experience`}</h1>
        <ol className="md:flex">
          {steps.map((step, index) => {
            return (
              <li key={index} className="md:px-[50px]">
                <p className="mb-[30px] font-thin">{`${
                  (index + 1).toString().length ? `0${index + 1}` : index + 1
                }.`}</p>
                <h2 className="mb-[30px] text-[30px]">{step.title}</h2>
                <p className="font-thin leading-8 mb-[60px] w-full">{step.description}</p>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="flex flex-col justify-center items-center" id="portfoliocouple">
        <div className="py-[300px] md:pt-[550px] md:pb-[150px]">
          <p className="text-[13px] font-thin text-white text-center mb-[15px]">See more of my work</p>
          <Link href="/portfolio" legacyBehavior passHref>
            <a className="border border-white py-[15px] text-white text-[13px] tracking-[.35em] px-[30px]">
              {`VIEW MY PORTFOLIO`}
            </a>
          </Link>
        </div>
      </section>

      <section
        id="documentstorysenior"
        className="px-[30px] flex flex-col justify-center pb-[60px] md:flex-row md:justify-between md:px-[100px] md:py-[200px]"
      >
        <h2 className="text-[35px] leading-1 flex flex-col mb-[20px] font-thin text-white pt-[60px] md:text-[70px] md:pt-0">
          <span>{`Start Documenting`}</span> <span>{`Your Story`}</span>
        </h2>
        <div className="md:flex md:flex-col md:justify-center">
          <p className="text-white font-thin px-[35px] pt-[100px] md:mt-[50px] md:pl-0">{`I can’t wait for us to meet and capture your story together.`}</p>
          <div className="flex justify-center mt-[125px] md:justify-start md:mt-[50px]">
            <Link href="/contact" legacyBehavior passHref>
              <a className="border border-white py-[15px] text-white text-[13px] tracking-[.35em] px-[30px]">
                {`LET'S CONNECT`}
              </a>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ExperiencePage;
