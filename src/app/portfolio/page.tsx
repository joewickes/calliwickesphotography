"use client";

import Link from "next/link";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const PortfolioPage = () => {
  const galleryInfo = [
    { name: "Family Gallery", link: "familygallery", image: "" },
    { name: "Senior Gallery", link: "seniorgallery", image: "" },
  ];

  return (
    <>
      <Header isHome />
      <section className="pt-[20dvh] px-[30px] bg-black text-white">
        <p className="text-[14px] text-center font-thin mb-[40px]">
          {`CAPTURING THE MOMENTS YOU DON'T WANT TO FORGET - WITH THE PEOPLE YOU
          LOVE.`}
        </p>
        <h1 className="text-[44px] leading-1 flex flex-col mb-[20px] text-center">
          {`Your favorite moments. Captured for you to cherish.`}
        </h1>
        <div className="flex justify-center mt-[60px]">
          <Link href="/contact" legacyBehavior passHref>
            <button className="text-[16px] text-white mb-[60px] tracking-widest border border-white py-[20px] px-[30px]">
              {`LET'S CONNECT`}
            </button>
          </Link>
        </div>
      </section>

      <section className="px-[30px] mt-[60px]">
        <h2 className="text-[15px] font-bold leading-1 flex flex-col mb-[20px] text-center mb-[30px]">
          {`YOUR TAMPA PHOTOGRAPHER`}
        </h2>
        <p className="text-center mb-[60px] font-thin">
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
        <ul>
          {galleryInfo.map((gallery, index) => {
            return (
              <li key={index} className="mb-[60px]">
                {/* Image */}
                <h2 className="text-[25px] leading-1 flex flex-col my-[20px] text-center ">
                  {gallery.name}
                </h2>
              </li>
            );
          })}
        </ul>
      </section>

      <Footer />
    </>
  );
};

export default PortfolioPage;
