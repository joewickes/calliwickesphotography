import type { Metadata } from 'next';

import Image from 'next/image';
import Link from 'next/link';

import { Lora } from 'next/font/google';
const lora = Lora({ subsets: ['latin'] });

import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer/Footer'));
import Header from '@/components/Header/Header';
import Share from '@/components/Share/Share';

export const metadata: Metadata = {
  title: 'Meet Calli | About Calli Wickes Photography',
  description:
    'Learn the story behind Calli Wickes Photography and the passionate photographer behind the lens. The About page delves into the journey, inspiration, and commitment of Calli Wickes in capturing timeless moments. Discover the unique approach to photography, the personal connection with clients, and the dedication to transforming ordinary moments into extraordinary memories. Learn about the experience that sets Calli Wickes Photography apart in the world of visual storytelling.',
};

const AboutPage = () => {
  const facts = [
    'My husband (Joe) and I were married in 2016. He is my best friend + biggest supporter. When I first started out in photography, he would often tag along for photo sessions to help bring out those smiles!',
    'I have two beautiful + hilarious little girls, Mia (3) + Harper (1.5). They are obsessed with all things Bluey + Pokemon, and love seeing what trouble they can get into together.',
    "I keep a calendar updated like it's an obsessive hobby - which it probably is! It's something my friends like to (and I can admit - justly) mock me about!",
    "We moved to Tampa in 2020 and it is one of the best decisions we've ever made. We love all things Tampa. Our absolute favorite restaurant is a wing place downtown called Hattrick's.",
  ];

  return (
    <main>
      <Share />
      <Header />

      <section className="px-[30px] pt-[40px] flex flex-col items-center bg-[#f2f2f2] pb-[50px] mt-[20dvh] xl:mt-[20dvh]">
        <div className="min-h-[225px] w-full overflow-hidden flex justify-center">
          <Image
            src="/images/About/familyoffoursmiling.webp"
            height={867}
            width={1664}
            className="object-cover h-full"
            alt="Family photo of four for a photographer in Tampa"
          />
        </div>
        <p className="font-thin leading-8 mb-[60px] mt-[50px] xl:mt-[50px] text-[25px] w-[60dvw] text-center xl:leading-[3rem]">
          {`Catch those sweet moments with your favorite people -  
          because this time with our little ones goes so fast.`}
        </p>
        <Link href="/contact" legacyBehavior passHref>
          <a className=" border border-black py-[15px] text-[13px] tracking-[.35em] px-[30px]">{`BOOK YOUR SESSION`}</a>
        </Link>
      </section>

      <section id="about" className="px-[30px] xl:flex ">
        <div className="flex justify-center mb-[60px] xl:flex-1">
          <div className="xl:mt-[120px] h-[90dvw] w-[90dvw] md:h-auto xl:w-auto overflow-hidden xl:pl-[100px]">
            <Image
              src="/images/Home Updated/TampaPhotographerPortrait.webp"
              alt="Tampa photographer in downtown portrait."
              height={840}
              width={560}
              className="object-cover mt-[-10dvw] xl:mt-[-100px]"
            />
          </div>
        </div>
        <div className="xl:flex-1 xl:flex xl:flex-col xl:justify-center xl:pr-[100px] xl:pl-[50px]">
          <h2 className={`${lora.className} text-[35px] mb-[0px]`}>{`Hi, I'm Calli!`}</h2>
          <h3 className="text-[15px] mb-[30px]">
            {`SERVING FAMILIES IN TAMPA, WESLEY CHAPEL AND THE SURROUNDING AREAS`}
          </h3>
          <p className="font-thin leading-8 mb-[60px]">
            {`I met my husband in high school and he is literally my best friend. I'm a mom of two little girls that really are my favorite people. And I am a family + senior portrait photographer specializing in natural + candid photos. For the past decade plus, I have loved getting to capture more and more family's special moments. I started primarily in senior photos and now focus on family + senior photos in Florida. Check out some of the fun facts below to get to know me more!`}
          </p>
          <div>
            <Link href="/contact" legacyBehavior passHref>
              <a className="mb-[60px] border border-black py-[15px] text-[13px] tracking-[.35em] px-[30px]">
                {`LET'S CHAT!`}
              </a>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-[30px] mt-[60px] xl:mt-0">
        <ol className="xl:flex">
          {facts.map((fact, index) => {
            return (
              <li key={index} className="xl:px-[50px]">
                <p className="mb-[30px] font-thin">{`${
                  (index + 1).toString().length ? `0${index + 1}` : index + 1
                }.`}</p>
                <h2 className={`mb-[30px] text-[30px] ${lora.className}`}>{`Fact ${index + 1}`}</h2>
                <p className="font-thin leading-8 mb-[60px]">{fact}</p>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="px-[30px] mt-[100px] mb-[60px] xl:w-full xl:px-[100px] xl:flex xl:flex-row-reverse xl:mt-[200px]">
        <div className="flex justify-center xl:flex-1">
          <Image
            src="/images/Family Gallery/happylittlefamilyinflorida.webp"
            height={684}
            width={456}
            className="object-cover"
            alt="Family bliss captured in the serene setting of Florida's nature with green grass and Spanish moss."
          />
        </div>
        <div className="flex justify-center xl:justify-normal mb-[15px] xl:flex-1 flex-col xl:items-left items-center xl:items-start">
          <h2 className="text-[40px] leading-1 my-[30px] xl:text-[60px]">{`They are only little for a short while`}</h2>
          <p className="font-thin mb-[15px]">{`Don't let another day pass you by without scheduling your family's photo session!`}</p>

          <div className="xl:mt-[100px] mt-[60px] mb-[150px]">
            <Link href="/contact" legacyBehavior passHref>
              <a className="border border-black py-[15px] text-[13px] tracking-[.35em] px-[30px]">{`CONNECT WITH ME`}</a>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default AboutPage;
