"use client";

import { useState } from "react";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Image from "next/image";
import Link from "next/link";

import { Plus, Minus } from "@phosphor-icons/react";

const ExperiencePage = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const steps = [
    {
      title: `Fill out the form`,
      description: `Once you’ve made up your mind, complete the form, and I will be getting back to you as soon as possible. We'll communicate in picking a date, time + location.`,
    },
    {
      title: `Picture time`,
      description: `Picture day is finally here! Time to meet, talk, connect, and get to know each other. I will take care of all the logistics, posing + helping you feel like a natural!`,
    },
    {
      title: `Delivering photos`,
      description: `One or two weeks after your session, you will receive your edited pictures, ready to be printed and proudly displayed.`,
    },
  ];

  const faqs = [
    {
      question: "This is my first photoshoot, what should I expect?",
      answer:
        "We'll meet up and get to know each other a bit as I capture some photos of you + your family. I'll direct you when you aren't sure what to do, where to put your hands, or where to look! It's a casual process where I want you to feel as comfortable as possible!",
    },
    {
      question: "What should I wear?",
      answer:
        "Pinterest has some great ideas if you are needing inspiration + you are more than welcome to send me a pic of your ideas for me to help. The general rule is to have all of your outfits have a little variety: one wearing a solid shirt, one wearing a pattern, a dress, one with a jacket. A little variety goes a long way!",
    },
    {
      question: "How many pictures will I receive?",
      answer:
        "I will take lots of photos while we are together. Then I'll sort through them all to pick out the best of the best! The amount various on the type of session booked (mini, standard, extended). I'll edit those + upload them to be delivered to you via online gallery.",
    },
    {
      question: "Are you available outside of Tampa?",
      answer:
        "I am located just north of Tampa. Typically my sessions are within 1 hour of downtown Tampa. If you are interesting in a session that involves further travel, we can discuss what that would look like!",
    },
    {
      question: "How do I schedule a session?",
      answer:
        "You can contact me via phone, email or my contact page on my website. You can also find me on Facebook and Instagram! But it's hard to keep up with all those different sources so I highly recommend using my number or email for a quicker response!",
    },
  ];

  return (
    <>
      <Header />
      <section className="mt-[20dvh] px-[30px] md:flex">
        <div className="md:flex md:flex-col md:items-start md:justify-center md:flex-1 md:px-[100px]">
          <h2 className="text-center text-[25px] md:text-[35px]">{`Just relax + let's take some pictures`}</h2>
          <p className="mt-[30px] font-thin md:w-[75%] ">{`This isn't about making sure you pick out the perfect outfit + stand just the right way. This is about capturing you - the real you. Yes, take the time to pick out an outfit you love. Then just show up. I'll take care of all the logistics so you just get to enjoy yourself as I capture all your best moments. `}</p>
        </div>
        <div className="md:flex md:flex-col md:items-center md:flex-1 md:pr-[100px]">
          <Image
            src="/images/Experience/happyfloridafamily.webp"
            height={989}
            width={659}
            alt="Tampa Bay Family Photography"
            className="mt-[30px] mb-[20px]"
          />
          <p className="font-thin text-[12px] text-center">{`Family photos for you to always remember`}</p>
        </div>
      </section>

      <section className="px-[30px] mt-[60px]">
        <h1 className="text-[40px] leading-1 flex flex-col mb-[50px] md:text-[70px] md:ml-[100px]">{`The CWP Experience`}</h1>
        <ol className="md:flex">
          {steps.map((step, index) => {
            return (
              <li key={index} className="md:px-[50px]">
                <p className="mb-[30px] font-thin">{`${
                  (index + 1).toString().length ? `0${index + 1}` : index + 1
                }.`}</p>
                <h2 className="mb-[30px] text-[30px]">{step.title}</h2>
                <p className="font-thin leading-8 mb-[60px] w-full">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </section>

      <section
        className="flex flex-col justify-center items-center"
        id="portfoliocouple"
      >
        <div className="py-[300px] md:pt-[550px] md:pb-[150px]">
          <p className="text-[13px] font-thin text-white text-center mb-[15px]">
            See more of my work
          </p>
          <Link href="/portfolio" legacyBehavior passHref>
            <button className="border border-white py-[15px] text-white text-[13px] tracking-[.35em] px-[30px]">
              {`VIEW MY PORTFOLIO`}
            </button>
          </Link>
        </div>
      </section>

      <section className="px-[30px] md:px-[100px]">
        <h2 className="text-[13px] font-bold tracking-wider my-[50px]">{`FAQ`}</h2>
        <ul className=" md:grid md:grid-rows-2 md:grid-flow-col">
          {faqs.map((faq, index) => {
            return (
              <li
                key={index}
                className="flex flex-col pb-[30px] md:m-[25px] cursor-pointer md:h-[200px]"
              >
                <div
                  className="flex items-center justify-between md:items-start"
                  onClick={() => {
                    if (openId === null) {
                      setOpenId(index);
                    } else {
                      setOpenId(null);
                    }
                  }}
                >
                  <p className="text-[18px] pr-[30px] flex-4 md:text-[25px]">
                    {faq.question}
                  </p>
                  <div className=" flex justify-end">
                    {openId === index ? (
                      <div className="w-30px">
                        <Minus size={30} />
                      </div>
                    ) : (
                      <div className="w-30px">
                        <Plus size={30} />
                      </div>
                    )}
                  </div>
                </div>

                <p
                  className={`h-[200px] w-full text-[15px] pt-[20px] font-thin md:w-full ${
                    openId === index ? "visible" : "hidden"
                  }`}
                >
                  {faq.answer}
                </p>
              </li>
            );
          })}
        </ul>
      </section>

      <section
        id="documentstorysenior"
        className="px-[30px] flex flex-col justify-center pb-[60px] md:flex-row md:justify-between md:px-[100px] md:py-[200px]"
      >
        <h2 className="text-[35px] leading-1 flex flex-col mb-[20px] font-thin text-white pt-[60px] md:text-[70px] md:pt-0">
          <span>{`Start Documenting`}</span> <span>{`Your Story`}</span>
        </h2>
        <div className="md:flex md:flex-col md:justify-center">
          <p className="text-white font-thin px-[35px] pt-[100px] md:mt-[50px] md:pl-0">{`I can’t wait for us to meet and capture your story together.`}</p>
          <div className="flex justify-center mt-[125px] md:justify-start md:mt-[50px]">
            <Link href="/contact" legacyBehavior passHref>
              <button className="border border-white py-[15px] text-white text-[13px] tracking-[.35em] px-[30px]">
                {`LET'S CONNECT`}
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ExperiencePage;
