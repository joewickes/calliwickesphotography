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
          className="h-dvh w-dvw flex flex-col items-center justify-center"
        >
          <p className="text-center text-[12px] mb-[20px] tracking-wide text-white z-10">
            PHOTOS THAT CAPTURE YOUR BEST MOMENTS
          </p>
          <h1 className="text-center text-[40px] leading-10 flex flex-col mb-[80px] text-white z-10 tracking-wide">
            <span>I'm Calli! Your</span> <span>Tampa family</span>{" "}
            <span>photographer!</span>
          </h1>
          <Link href="/portfolio" legacyBehavior passHref>
            <button className="z-10 text-[16px] mb-[60px] tracking-widest border border-white py-[20px] px-[30px] text-white">
              VIEW PORTFOLIO
            </button>
          </Link>
        </section>
      </div>

      {/* About Section */}
      <section id="about" className="px-[30px]">
        {/* <Image /> */}
        <h2 className="text-[30px] mb-[60px]">
          Hi! I'm Calli, a family photographer.
        </h2>
        <h3 className="text-[15px] mb-[60px]">
          SPECIALIZING IN FAMILY PHOTOGRAPHY IN TAMPA, FL
        </h3>
        <p className="font-thin leading-8 mb-[60px]">
          Capturing cherished family moments through upbeat and fun photography
          is my passion. With two little girls of my own, I specialize in
          stress-free sessions, capturing natural smiles and unique stories.
          Tailoring each session to your family, I strike a balance between
          posed and playful pictures for a casual, comfortable vibe. Explore the
          gallery below and get ready to capture your family's story. Let's
          create timeless memories together!
        </p>
        <Link href="/about" legacyBehavior passHref>
          <button className="text-[16px] mb-[60px] tracking-widest border border-white py-[20px] px-[30px]">
            MORE ABOUT ME
          </button>
        </Link>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="px-[30px]"></section>

      {/* Contact Section */}
      <section id="contact" className="px-[30px]">
        {/* <Image /> */}
        <h2 className="text-[30px] mb-[60px]">
          Family photography for you to treasure forever
        </h2>
        <p className="font-thin leading-8 mb-[60px]">
          Whether you seek stunning beach snapshots, enchanting Florida nature
          images, or a lively urban atmosphere with your loved ones, I would
          love to capture your family portrait, creating cherished family photos
          destined for your walls!
        </p>
        <Link href="/contact" legacyBehavior passHref>
          <button className="text-[16px] mb-[60px] tracking-widest border border-white py-[20px] px-[30px]">
            LET'S CONNECT
          </button>
        </Link>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
