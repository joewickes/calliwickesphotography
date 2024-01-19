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
      <section className="mt-[20dvh] px-[30px] mb-[60px]">
        <h1 className="text-[40px] leading-1 font-thin flex flex-col mb-[80px]">
          <span>{`Hi! I'm Calli + I`}</span> <span>{`love capturing`}</span>{" "}
          <span>{`moments`}</span> <span>{`through a lens.`}</span>
        </h1>
      </section>

      <section className="px-[30px] flex flex-col items-center bg-[#f2f2f2] mb-[60px]">
        {/* <Image /> */}
        <p className="font-thin leading-8 mb-[60px]">
          {`I love capturing moments through a lens. Let's document some of your
          family's best moments for you to cherish forever.`}
        </p>
        <Link href="/contact" legacyBehavior passHref>
          <button className="text-[16px] mb-[60px] tracking-widest border border-black py-[20px] px-[30px] text-black">
            {`LET'S CONNECT`}
          </button>
        </Link>
      </section>

      <section id="about" className="px-[30px] mb-[60px]">
        {/* <Image /> */}
        <h2 className="text-[30px] mb-[60px]">
          {`I'm Calli, a Florida family photographer!`}
        </h2>
        <h3 className="text-[15px] mb-[60px]">
          {`I CURRENTLY SERVE TAMPA, WESLEY CHAPEL, AND THE SURROUNDING AREAS`}
        </h3>
        <p className="font-thin leading-8 mb-[60px]">
          {`I am a family portrait photographer specializing in natural + candid
          photos. In the past decade plus, I have loved getting to capture more
          and more family's special moments. I started primarily in senior
          photos and now focus on family + senior photos in Florida. I would
          love to capture the joyful moments for you and your family! Check out
          some of the fun facts below to get to know me more!`}
        </p>
        <Link href="/portfolio" legacyBehavior passHref>
          <button className="text-[16px] mb-[60px] tracking-widest border border-black py-[20px] px-[30px]">
            {`VIEW PORTFOLIO`}
          </button>
        </Link>
      </section>

      <section className="px-[30px]">
        <ol>
          {facts.map((fact, index) => {
            return (
              <li key={index}>
                <p className="mb-[30px] font-thin">{`${
                  (index + 1).toString().length ? `0${index + 1}` : index + 1
                }.`}</p>
                <h2 className="mb-[30px] text-[45px]">Fact {index + 1}</h2>
                <p className="font-thin leading-8 mb-[60px]">{fact}</p>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="px-[30px]">
        <div className="bg-white flex flex-col items-center justify-center px-[30px] py-[60px]">
          <h2 className="mb-[40px] text-[25px]">{`The moment is now`}</h2>
          <p className="font-thin leading-8 mb-[40px] text-center">
            {`Don't let another day pass you by without scheduling your family's
            photo session!`}
          </p>
          <Link href="/contact" legacyBehavior passHref>
            <button className="text-[16px] mb-[60px] tracking-widest border border-black py-[20px] px-[30px]">
              {`LET'S CONNECT`}
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;
