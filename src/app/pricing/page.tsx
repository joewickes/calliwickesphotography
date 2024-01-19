"use client";

import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

import { CaretRight } from "@phosphor-icons/react";

const PricingPage = () => {
  const packages = [
    {
      name: "Standard Photo Session",
      price: 350,
      target: "*For families, Couples, Engagement Photots",
      description:
        "45-60 minute session;final gallery of high resulition digital downloads (30+) delivered via online gallery;On location, within 1 hour of Tampa",
    },
    {
      name: "Extended Family Session",
      price: 550,
      description:
        "60-90 minute session;Up to 12 people - $10/person after;Final gallery of high resolution digital downloads (50+) delivered via online gallery;Separate family groupings;On location, within 1 hour of Tampa",
    },
    {
      name: "Senior Session",
      price: 450,
      description:
        "up to 2 hours session;Final gallery of high resolution digital downloads (40+) delivered via online gallery;Up to 3 outfit changes;2 locations within 10 mi on the same day (location ranges within 1 hour of Tampa);*please contact for additional options",
    },
  ];

  return (
    <main>
      <Header />

      <section className="mt-[20dvh] px-[30px]">
        {/* <Image /> */}
        <p className="text-[30px] leading-1 font-thin flex flex-col mb-[60px] text-center">
          {`Beautiful moments. Perfectly captured.`}
        </p>
      </section>

      <section className="mt-[60px] px-[30px]">
        <h1 className="text-[40px] leading-1 flex flex-col mb-[20px] text-center">
          {`Pricing Packages`}
        </h1>
        <ul>
          {packages.map((pkg, idx) => {
            return (
              <li key={idx}>
                {/* <Image /> */}
                <h2 className="text-[40px] leading-1 flex flex-col mb-[20px] text-center">
                  {pkg.name}
                </h2>
                <p className="font-bold text-center mb-[30px]">{`$${pkg.price}`}</p>
                {pkg.target ? (
                  <p className="text-center mb-[30px] font-thin">
                    {pkg.target}
                  </p>
                ) : null}
                <ul className="mb-[60px]">
                  {pkg.description.split(";").map((desc, idx) => (
                    <li key={idx} className="font-thin text-center">
                      {desc}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="px-[30px] bg-black mb-[60px]">
        <h2 className="text-[40px] leading-1 flex flex-col mb-[20px] font-thin text-white pt-[60px]">
          {`Let's Document Your Story`}
        </h2>
        <div className="flex justify-center mt-[300px]">
          <Link href="/contact" legacyBehavior passHref>
            <button className="text-[16px] text-white mb-[60px] tracking-widest border border-white py-[20px] px-[30px]">
              {`GET IN TOUCH`}
            </button>
          </Link>
        </div>
      </section>

      <section className="px-[30px]">
        <p className="text-center mb-[60px] font-thin">
          {`Family portraits framed in time`}
        </p>
        <h2 className="text-center text-[30px] leading-1 flex flex-col mb-[60px]">
          {`Get in touch and let's doument life`}
        </h2>
        <div className="flex justify-center">
          <CaretRight size={30} className="mb-[30px]" />
        </div>

        {/* <Image /> */}
      </section>
      <Footer />
    </main>
  );
};

export default PricingPage;
