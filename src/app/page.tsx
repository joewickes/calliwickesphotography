"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowUp, FacebookLogo, InstagramLogo } from "@phosphor-icons/react";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <div id="familyofthree">
        <Header isHome />

        {/* Hero Section */}
        <section
          id="home"
          className="h-dvh w-dvw flex flex-col items-center justify-center pt-[100px]"
        >
          <p className="text-center md:text-left text-[12px] mb-[20px] tracking-wide text-white z-10 md:w-[150px] md:self-end md:mr-[200px] md:mt-[50px]">
            {`PHOTOS THAT CAPTURE YOUR BEST MOMENTS`}
          </p>
          <h1 className="text-center text-[45px] md:text-[84px] leading-[3.5rem] md:leading-[5.5rem] flex flex-col mb-[80px] md:mt-[100px] text-white z-10 tracking-wide md:self-start md:ml-[100px] md:flex md:flex-row md:flex-wrap md:text-left">
            <span>{`I'm Calli! Your`}</span>{" "}
            <span className="md:pl-[20px]">{`Tampa family`}</span>{" "}
            <span>{`photographer!`}</span>
          </h1>
          <Link href="/portfolio" legacyBehavior passHref>
            <button className="z-10  mb-[60px] border border-white py-[15px] text-[13px] tracking-[.35em] mt-[30px] px-[30px] text-white md:self-start md:ml-[100px]">
              {`VIEW PORTFOLIO`}
            </button>
          </Link>
        </section>
      </div>

      {/* About Section */}
      <section id="about" className="px-[30px] md:flex md:py-[100px]">
        <div className="flex justify-center mb-[60px] md:flex-1">
          <div className="mt-[120px] md:mt-0 h-[90dvw] w-[90dvw] md:h-auto md:w-auto overflow-hidden md:pl-[100px]">
            <Image
              src="/images/Home/tampaphotographerportrait.webp"
              priority
              alt="Tampa photographer in downtown portrait."
              height={840}
              width={560}
              className="object-cover mt-[-10dvw] md:mt-[-100px]"
            />
          </div>
        </div>
        <div className="md:flex-1 md:flex md:flex-col md:justify-center md:pr-[100px]">
          <h2 className="text-[35px] mb-[60px]">
            {`Hi! I'm Calli, a family photographer.`}
          </h2>
          <h3 className="text-[15px] mb-[60px]">
            {`SPECIALIZING IN FAMILY PHOTOGRAPHY IN TAMPA, FL`}
          </h3>
          <p className="font-thin leading-8 mb-[60px]">
            {`Capturing cherished family moments through upbeat and fun photography
          is my passion. With two little girls of my own, I specialize in
          stress-free sessions, capturing natural smiles and unique stories.
          Tailoring each session to your family, I strike a balance between
          posed and playful pictures for a casual, comfortable vibe. Explore the
          gallery below and get ready to capture your family's story. Let's
          create timeless memories together!`}
          </p>
          <div>
            <Link href="/about" legacyBehavior passHref>
              <button className="mb-[60px] border border-black py-[15px] text-[13px] tracking-[.35em] px-[30px]">
                {`MORE ABOUT ME`}
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="px-[30px] md:flex md:justify-center">
        <div className="md:ml-[50px] md:max-w-[456px] md:flex md:flex-col md:justify-start md:items-end md:flex-1 md:mr-[15px]">
          <div className="w-full mb-[15px] ">
            <Image
              src="/images/Home/familyportraittampa.webp"
              height={684}
              width={456}
              alt="Cherished family portrait surrounded by the beauty of Tampa's greenery and Spanish moss."
              className="object-cover"
            />
          </div>
          <div className="w-full mb-[15px]">
            <Image
              src="/images/Home/couplebrickwallbackground.webp"
              height={684}
              width={456}
              className="object-cover"
              alt="A love story unfolds as a couple poses against an urban wall in Tampa"
            />
          </div>
        </div>
        <div className="md:flex md:flex-col md:justify-start md:items-end md:flex-1 md:max-w-[456px]">
          <div className="w-full h-auto mb-[15px]">
            <Image
              src="/images/Home/smilingcoupleoutdoor.webp"
              height={304}
              width={456}
              className="object-cover"
              alt="Smiling couple embraces amidst the vibrant green landscape of Tampa's outdoors."
            />
          </div>
          <div className="w-full mb-[15px]">
            <Image
              src="/images/Home/familyofthreeintampa.webp"
              height={684}
              width={456}
              className="object-cover"
              alt="Joyful family of three amidst lush greenery and Spanish moss in scenic Tampa, Fl."
            />
          </div>
          <div className="w-full mb-[15px]">
            <Image
              src="/images/Home/middleagecoupleintampa.webp"
              height={456}
              width={304}
              className="object-cover w-full"
              alt="Middle-aged couple smiling by a white fence, capturing the essence of family joy in Tampa's picturesque setting"
            />
          </div>
        </div>
        <div className="md:ml-[15px] md:max-w-[456px] md:flex md:flex-col md:justify-start md:items-end md:flex-1 md:mr-[50px] mb-[120px]">
          <div className="w-full mb-[15px]">
            <Image
              src="/images/Home/adorablefamilyofthree.webp"
              height={684}
              width={456}
              className="object-cover"
              alt="Adorable family of three, including a 3-month-old little boy, against the backdrop of a rustic barn in Tampa"
            />
          </div>
          <div className="w-full mb-[15px]">
            <Image
              src="/images/Home/tampafamilyofthree.webp"
              height={684}
              width={456}
              className="object-cover"
              alt="Capturing love in the heart of Tampa's nature with a beautiful family of three"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="px-[30px] md:flex md:flex-row-reverse md:py-[100px]"
      >
        <div className="w-full mb-[50px] md:flex-1 md:flex md:justify-center md:pr-[100px]">
          <Image
            src="/images/Home/youngcouplehugging.webp"
            height={484}
            width={323}
            className="object-cover w-full md:max-h-[484px] md:max-w-[323px]"
            alt="Young couple sharing an embrace while surrounded by the rustic charm of Tampa's countryside."
          />
        </div>
        <div className="md:flex md:flex-col md:flex-1 md:align-center md:pl-[100px] md:justify-center md:align-center">
          <h2 className="text-[35px] mb-[50px]">
            {`Family photography for you to treasure forever`}
          </h2>
          <p className="font-thin leading-8 mb-[60px]">
            {`Whether you seek stunning beach snapshots, enchanting Florida nature
          images, or a lively urban atmosphere with your loved ones, I would
          love to capture your family portrait, creating cherished family photos
          destined for your walls!`}
          </p>
          <div>
            <Link href="/contact" legacyBehavior passHref>
              <button className="mb-[60px] border border-black py-[15px] text-[13px] tracking-[.35em] px-[30px]">
                {`LET'S CONNECT`}
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
