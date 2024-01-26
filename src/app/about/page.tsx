"use client";

import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const AboutPage = () => {
  const facts = [
    "My husband (Joe) and I were married in 2016. He is my best friend + biggest supporter. When I first started out in photography, he would often tag along for photo sessions to help bring out those smiles!",
    "I have two beautiful + hilarious little girls, Mia (3) + Harper (1.5). They are obsessed with all things Bluey + Pokemon, and love seeing what trouble they can get into together.",
    "I keep a calendar updated like it's an obsessive hobby - which it probably is! It's something my friends like to (and I can admit - justly) mock me about!",
    "We moved to Tampa in 2020 and it is one of the best decisions we've ever made. We love all things Tampa. Our absolute favorite restaurant is a wing place downtown called Hattrick's.",
  ];

  return (
    <main>
      <Header />
      <section className="md:mt-[20dvh] px-[30px] mb-[60px]">
        <h1 className="text-[40px] leading-1 font-thin flex flex-col mb-[80px] md:text-[75px] md:ml-[100px] md:pt-[100px]">
          <span>
            <span>{`Hi! I'm Calli + I`}</span> <span>{`love capturing`}</span>{" "}
            <span>{`moments`}</span>
          </span>{" "}
          <span>{`through a lens.`}</span>
        </h1>
      </section>

      <section className="px-[30px] pt-[60px] flex flex-col items-center bg-[#f2f2f2] mb-[60px]">
        <div className="min-h-[225px] w-full overflow-hidden">
          <Image
            src="/images/About/familyoffoursmiling.webp"
            height={867}
            width={1664}
            className="object-cover h-full"
            alt="Photographer in Tampa"
          />
        </div>
        <p className="font-thin leading-8 mb-[60px] md:mt-[100px] md:text-[25px] md:w-[60dvw] md:text-center md:md:leading-[3rem]">
          {`I love capturing moments through a lens. Let's document some of your
          family's best moments for you to cherish forever.`}
        </p>
        <Link href="/contact" legacyBehavior passHref>
          <button className="mb-[60px] border border-black py-[15px] text-[13px] tracking-[.35em] px-[30px]">
            {`LET'S CONNECT`}
          </button>
        </Link>
      </section>

      <section id="about" className="px-[30px] md:flex md:py-[100px]">
        <div className="flex justify-center mb-[60px] md:flex-1">
          <div className="md:mt-[120px] h-[90dvw] w-[90dvw] md:h-auto md:w-auto overflow-hidden md:pl-[100px]">
            <Image
              src="/images/Home/tampaphotographerportrait.webp"
              alt="Tampa photographer in downtown portrait."
              height={840}
              width={560}
              className="object-cover mt-[-10dvw] md:mt-[-100px]"
            />
          </div>
        </div>
        <div className="md:flex-1 md:flex md:flex-col md:justify-center md:pr-[100px]">
          <h2 className="text-[35px] mb-[60px]">
            {`I’m Calli, a Florida family photographer!`}
          </h2>
          <h3 className="text-[15px] mb-[60px]">
            {`I CURRENTLY SERVE TAMPA, WESLEY CHAPEL AND THE SURROUNDING AREAS`}
          </h3>
          <p className="font-thin leading-8 mb-[60px]">
            {`I am a family portrait photographer specializing in natural + candid photos. In the past decade plus, I have loved getting to capture more and more family's special moments. I started primarily in senior photos and now focus on family + senior photos in Florida. I would love to capture the joyful moments for you and your family! Check out some of the fun facts below to get to know me more!`}
          </p>
          <div>
            <Link href="/portfolio" legacyBehavior passHref>
              <button className="mb-[60px] border border-black py-[15px] text-[13px] tracking-[.35em] px-[30px]">
                {`VIEW PORTFOLIO`}
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-[30px]">
        <ol className="md:flex">
          {facts.map((fact, index) => {
            return (
              <li key={index} className="md:px-[50px]">
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

      <section className="px-[30px] pb-[60px] bg-[#f2f2f2] pt-[30px] md:my-[100px] md:flex md:justify-center">
        <div
          id="seniorphotomoment"
          className="bg-white flex flex-col items-center justify-center px-[30px] py-[30px] md:w-[60dvh] md:h-[60dvh] md:my-[100px]"
        >
          <h2 className="mb-[40px] text-[25px] md:self-start md:text-[35px] md:pl-[50px]">{`The moment is now`}</h2>
          <p className="font-thin leading-8 mb-[40px] text-center md:text-left md:pl-[50px] md:mt-[20%]">
            {`Don't let another day pass you by without scheduling your family's
            photo session!`}
          </p>
          <div className="md:self-start md:pl-[50px]">
            <Link href="/contact" legacyBehavior passHref>
              <button className="mb-[60px] border border-black py-[15px] text-[13px] tracking-[.35em] px-[30px]">
                {`LET'S CONNECT`}
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;
