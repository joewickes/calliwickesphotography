"use client";

import Link from "next/link";

import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/Footer/Footer"));
import Header from "@/components/Header/Header";

const PortfolioPage = () => {
  const galleryInfo = [
    { name: "FAMILY GALLERY", link: "familygallery", id: "familygallerylink" },
    { name: "SENIOR GALLERY", link: "seniorgallery", id: "seniorgallerylink" },
  ];

  return (
    <>
      <Header isHome />
      <section
        className="pt-[20dvh] px-[30px] bg-black text-white md:h-[100dvh] flex flex-col"
        id="portfoliomainsenior"
      >
        <p className="text-[14px] text-center font-thin mb-[40px] md:self-end md:mr-[100px] md:w-[200px] md:text-left">
          {`CAPTURING THE MOMENTS YOU DON'T WANT TO FORGET - WITH THE PEOPLE YOU
          LOVE.`}
        </p>
        <h1 className="text-[45px] leading-1 flex font-thin flex-col mb-[20px] text-center md:self-start md:ml-[100px] md:mt-[150px] md:text-[70px] md:text-left md:w-[70%]">
          {`Your favorite moments. Captured for you to cherish.`}
        </h1>
        <div className="flex justify-center mt-[50px] md:self-start md:ml-[100px]">
          <div>
            <Link href="/contact" legacyBehavior passHref>
              <a className="z-10  mb-[60px] border border-white py-[15px] text-[13px] tracking-[.35em] mt-[30px] px-[30px] text-white">
                {`LET'S CONNECT`}
              </a>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-[30px] mt-[60px] flex flex-col items-center">
        <h2 className="text-[15px] font-bold leading-1 flex flex-col text-center mb-[30px] md:mt-[100px]">
          {`YOUR TAMPA PHOTOGRAPHER`}
        </h2>
        <p className="text-center mb-[60px] font-thin md:w-[45%]">
          {`Welcome to my Tampa Photography Portfolio! I'm all about capturing
          real moments that tell your story. Take a stroll through the Family
          Gallery for a dose of heartwarming memories – it's like flipping
          through a family album, but better. And if you're into seeing the
          unique personalities of Tampa's awesome seniors, check out the Senior
          Gallery. As your go-to Tampa photographer, I'm here to freeze those
          moments you'll want to remember forever. So, let's embark on this
          visual journey together, capturing the good stuff that makes your
          story uniquely yours!`}
        </p>
      </section>

      <section className="px-[30px] my-[60px]">
        <ul className="md:flex md:mx-[100px] md:justify-evenly">
          {galleryInfo.map((gallery, index) => {
            return (
              <Link
                key={index}
                href={`/${gallery.link}`}
                legacyBehavior
                passHref
              >
                <li
                  key={index}
                  className="mb-[60px] flex justify-center items-center md:min-w-[385px]"
                  id={gallery.id}
                >
                  {/* Image */}

                  <a className="z-10 border border-white py-[15px] text-[13px] tracking-[.35em] my-[240px] px-[30px] text-white md:mx-[40px]">
                    {gallery.name}
                  </a>
                </li>
              </Link>
            );
          })}
        </ul>
      </section>

      <Footer />
    </>
  );
};

export default PortfolioPage;
