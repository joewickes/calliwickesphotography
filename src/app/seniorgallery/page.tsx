"use client";

import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const SeniorGalleryPage = () => {
  return (
    <main className="md:flex md:flex-col md:items-center">
      <div className="md:w-full">
        <Header />
      </div>
      <section
        className="mt-[10dvh] md:mt-[20dvh] px-[30px] pb-[100px] mb-[50px] md:h-[80dvh] top-0 md:w-full md:px-[100px]"
        id="seniorgallerytop"
      >
        <h2 className="text-white text-[38px] font-thin leading-1 flex flex-col pt-[60px] md:text-[70px] md:pt-[20%]">{`Seniors`}</h2>
        <p className="md:pl-0 text-white text-[15px] font-thin px-[40px] py-[150px]">{`Senior photos to capture this short season of life`}</p>
      </section>
      <section className="md:mt-[100px] px-[30px] mb-[60px] md:flex md:items-center md:px-[100px] md:mb-[150px]">
        <h1 className="text-[40px] leading-1 mb-[30px] md:flex-1 md:text-[50px] md:pr-[75px]">{`High School Senior Photography in Tampa`}</h1>
        <p className="font-thin md:flex-1">{`Get ready to embark on a journey back in time, reliving the best moments of your high school years through our laid-back senior portraits in Tampa. It's not just about preserving memories; it's about capturing the real you, showcasing the essence of your unique personality. These portraits are more than images; they're a time capsule of laughter, friendships, and the spirit of your high school experience. Share the love with your crew and family, creating memories that stand the test of time! Imagine these portraits gracing the walls, telling a story of joy, accomplishment, and the relaxed charm of your Tampa journey. Let's create a truly remarkable chapter, effortlessly captured in every frame, ensuring that each portrait is a vivid celebration of your high school years in Tampa!`}</p>
      </section>

      <section className="px-[30px] md:columns-3 md:w-[80%] md:px-[100px]">
        <div className="w-full mb-[15px]">
          <Image
            src="/images/Senior Gallery/soccerseniorphoto.webp"
            height={575}
            width={383}
            className="object-cover"
            alt="Soccer enthusiast senior guy in Tampa, soccer ball at his side."
          />
        </div>
        <div className="w-full mb-[15px]">
          <Image
            src="/images/Senior Gallery/seniorladytampa.webp"
            height={574}
            width={383}
            className="object-cover"
            alt="Captivating high school senior amidst Tampa's picturesque backdrop."
          />
        </div>
        <div className="w-full mb-[15px]">
          <Image
            src="/images/Senior Gallery/seniorguyagainstwhitebrickwall.webp"
            height={575}
            width={862}
            className="object-cover"
            alt="Urban charm: Senior male against white brick wall in Tampa."
          />
        </div>
        <div className="w-full mb-[15px]">
          <Image
            src="/images/Senior Gallery/seniorgirlinthecountryside.webp"
            height={575}
            width={862}
            className="object-cover"
            alt="Rural love: Couple shares a sweet moment in Florida."
          />
        </div>
        <div className="w-full mb-[15px]">
          <Image
            src="/images/Senior Gallery/seniorgirlinstairwell.webp"
            height={575}
            width={383}
            className="object-cover"
            alt="Graceful senior girl in a pretty Tampa location, creating beautiful memories."
          />
        </div>
        <div className="w-full mb-[15px]">
          <Image
            src="/images/Senior Gallery/seniorguybaseballphoto.webp"
            height={575}
            width={383}
            className="object-cover"
            alt="Senior guy in a baseball uniform, posing with his baseball glove in Tampa."
          />
        </div>
        <div className="w-full mb-[15px]">
          <Image
            src="/images/Senior Gallery/seniorgirlwithwaterbackground.webp"
            height={575}
            width={862}
            className="object-cover"
            alt="Feminine charm in a Tampa outdoor setting, perfect for senior photos."
          />
        </div>
        <div className="w-full mb-[15px]">
          <Image
            src="/images/Senior Gallery/seniorphotoinlettermanjacket.webp"
            height={575}
            width={383}
            className="object-cover"
            alt="Dapper male in Tampa, showcasing senior style in a letterman jacket"
          />
        </div>
        <div className="w-full mb-[15px]">
          <Image
            src="/images/Senior Gallery/seniormaleinflannel.webp"
            height={575}
            width={862}
            className="object-cover"
            alt="Stylish high school senior guy outside a barn with Tampa's rural charm."
          />
        </div>
        <div className="w-full mb-[15px]">
          <Image
            src="/images/Senior Gallery/seniorportrait.webp"
            height={575}
            width={862}
            className="object-cover"
            alt="Beautiful high school senior girl"
          />
        </div>
        <div className="w-full mb-[15px] md:hidden">
          <Image
            src="/images/Senior Gallery/softballseniorphoto.webp"
            height={575}
            width={862}
            className="object-cover"
            alt="High school senior softball star in Tampa, donning red school colors."
          />
        </div>
      </section>

      <section className="px-[30px] mt-[100px] mb-[60px] md:w-full md:px-[100px] md:flex md:flex-row-reverse md:mt-[200px]">
        <div className="md:flex md:justify-center md:flex-1">
          <Image
            src="/images/Senior Gallery/seniorphotostampa.webp"
            height={574}
            width={383}
            className="object-cover"
            alt="Elegant senior girl in Tampa's scenic beauty, capturing timeless moments."
          />
        </div>
        <div className="w-full mb-[15px] md:flex-1">
          <h2 className="text-[40px] leading-1 my-[30px] md:text-[60px]">{`Senior Photography`}</h2>
          <p className="font-thin mb-[15px]">{`Your Tampa + Wesley Chapel Senior Photographer`}</p>

          <div>
            <Link href="/contact" legacyBehavior passHref>
              <a className="mb-[60px] mt-[30px] border border-black py-[15px] text-[13px] tracking-[.35em] px-[30px]">
                {`GET IN TOUCH`}
              </a>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default SeniorGalleryPage;
