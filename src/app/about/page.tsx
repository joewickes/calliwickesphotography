import type { Metadata } from 'next';

import Image from 'next/image';
import Link from 'next/link';

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
      <section className="mt-[20dvh] px-[30px] mb-[60px]">
        <h1 className="text-[40px] leading-1 font-thin flex flex-col mb-[80px] xl:text-[75px] xl:ml-[100px] xl:pt-[100px]">
          <span>
            <span>{`Hi! I'm Calli + I`}</span> <span>{`love capturing`}</span> <span>{`moments`}</span>
          </span>{' '}
          <span>{`through a lens.`}</span>
        </h1>
      </section>

      <section className="px-[30px] pt-[60px] flex flex-col items-center bg-[#f2f2f2] mb-[60px]">
        <div className="min-h-[225px] w-full overflow-hidden flex justify-center">
          <Image
            src="/images/About/familyoffoursmiling.webp"
            height={867}
            width={1664}
            className="object-cover h-full"
            alt="Photographer in Tampa"
          />
        </div>
        <p className="font-thin leading-8 mb-[60px] mt-[50px] xl:mt-[100px] text-[25px] w-[60dvw] text-center xl:leading-[3rem]">
          {`I love capturing moments through a lens. Let's document some of your
          family's best moments for you to cherish forever.`}
        </p>
        <Link href="/contact" legacyBehavior passHref>
          <a className="mb-[60px] border border-black py-[15px] text-[13px] tracking-[.35em] px-[30px]">
            {`LET'S CONNECT`}
          </a>
        </Link>
      </section>

      <section id="about" className="px-[30px] xl:flex xl:py-[100px]">
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
          <h2 className="text-[35px] mb-[60px]">{`I’m Calli, a Florida family photographer!`}</h2>
          <h3 className="text-[15px] mb-[60px]">
            {`I CURRENTLY SERVE TAMPA, WESLEY CHAPEL AND THE SURROUNDING AREAS`}
          </h3>
          <p className="font-thin leading-8 mb-[60px]">
            {`I am a family portrait photographer specializing in natural + candid photos. In the past decade plus, I have loved getting to capture more and more family's special moments. I started primarily in senior photos and now focus on family + senior photos in Florida. I would love to capture the joyful moments for you and your family! Check out some of the fun facts below to get to know me more!`}
          </p>
          <div>
            <Link href="/portfolio" legacyBehavior passHref>
              <a className="mb-[60px] border border-black py-[15px] text-[13px] tracking-[.35em] px-[30px]">
                {`VIEW PORTFOLIO`}
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
                <h2 className="mb-[30px] text-[30px]">Fact {index + 1}</h2>
                <p className="font-thin leading-8 mb-[60px]">{fact}</p>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="px-[30px] pb-[60px] bg-[#f2f2f2] pt-[30px] xl:my-[100px] xl:flex xl:justify-center">
        <div
          id="seniorphotomoment"
          className="bg-white flex flex-col items-center justify-center px-[30px] py-[30px] xl:w-[60dvh] xl:h-[60dvh] xl:my-[100px]"
        >
          <h2 className="mb-[40px] text-[25px] xl:self-start xl:text-[35px] xl:pl-[50px]">{`The moment is now`}</h2>
          <p className="font-thin leading-8 mb-[50px] text-center xl:text-left xl:pl-[50px] xl:mt-[10dvh]">
            {`Don't let another day pass you by without scheduling your family's
            photo session!`}
          </p>
          <div className="xl:self-end xl:pr-[50px]">
            <Link href="/contact" legacyBehavior passHref>
              <a className="mb-[60px] border border-black py-[15px] text-[13px] tracking-[.35em] px-[30px]">
                {`LET'S CONNECT`}
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
