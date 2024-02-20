'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Lora } from 'next/font/google';
const lora = Lora({ subsets: ['latin'] });

import { ArrowUp, FacebookLogo, InstagramLogo, PinterestLogo, Phone, EnvelopeSimple } from '@phosphor-icons/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYelp } from '@fortawesome/free-brands-svg-icons';

import NewsletterForm from '@/components/Forms/NewsletterForm';

const Footer = () => {
  const [path, setPath] = useState('#');

  useEffect(() => {
    if (window) {
      setPath(window.location.pathname);
    }
  }, []);

  return (
    <footer className="flex flex-col justify-center items-center mt-[60px] w-full ">
      <div className="my-[30px] px-[30px]">
        <Link href={path} legacyBehavior passHref>
          <ArrowUp size={30} className="cursor-pointer" />
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row w-full">
        <section className="border-[#faf9f7] border border-x-0 xl:border-r-1 py-[20px] px-[30px] lg:flex-1 lg:pl-[100px] flex flex-col justify-normal lg:justify-center">
          <div>
            <p className="text-[25px] mb-[25px]">{`CALLI WICKES PHOTOGRAPHY`}</p>
          </div>
          <p className="font-thin">{`Calli Wickes Photography is a photographer in Tampa, FL specializing in family and senior portraits.`}</p>
          <div className="flex flex-col mt-[20px] lg:pl-[50px]">
            <div className="flex items-center">
              <EnvelopeSimple size={18} className="mr-[10px]" />

              <a href="mailto:CalliWickesPhotography@gmail.com">{`CalliWickesPhotography@gmail.com`}</a>
            </div>
            <div className="flex items-center mt-[5px]">
              <Phone size={18} className="mr-[10px]" />
              <a href="tel:+18134060558">{`(813) 406-0558`}</a>
            </div>
          </div>
        </section>

        <section className="border-[#faf9f7] border border-x-0 border-t-0 py-[20px] bg-[#faf9f7] px-[30px] lg:flex-1">
          <div>
            <div>
              <h3 className={`${lora.className} text-[35px] mb-[5px]`}>{`BECOME A VIP`}</h3>
              <p className="mb-[20px] font-thin">{`Sign up for our email newsletter`}</p>
            </div>
            <NewsletterForm />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-start">
              <a target="_blank" aria-label="Facebook" href="https://www.facebook.com/CalliWickesPhotography/">
                <FacebookLogo size={23} className="mr-[35px] cursor-pointer" />
              </a>
              <a target="_blank" aria-label="Instagram" href="https://www.instagram.com/calliwickesphotography/">
                <InstagramLogo size={23} className="mr-[35px] cursor-pointer" />
              </a>
              <a target="_blank" aria-label="Pinterest" href="https://www.pinterest.com/calliwickes/">
                <PinterestLogo size={23} className="mr-[35px] cursor-pointer" />
              </a>
              <a
                target="_blank"
                aria-label="Yelp"
                href="https://www.yelp.com/biz/calli-wickes-photography-wesley-chapel"
              >
                <FontAwesomeIcon icon={faYelp} className="cursor-pointer" />
              </a>
            </div>
            <div className="xl:flex-1 w-full flex-wrap font-thin flex mt-[20px] xl:mt-[50px] items-start text-center justify-start">
              <p className="text-left pr-[5px]">{`Our website is listed in photographerlistings.org -`}</p>
              <a
                className="underline"
                href="https://www.photographerlistings.org/United-States/Florida/C5-84-1-0.htm"
              >{`Florida Photographer Listings`}</a>
            </div>
          </div>
        </section>
      </div>

      <section className="xl:py-[20px] w-full ">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full">
            <div className="xl:ml-[100px] xl:flex-1 w-full flex flex-col xl:flex-row xl:justify-start border-[#faf9f7] items-start text-center justify-center border border-x-0 border-t-0 xl:border-none py-[20px] px-[30px]">
              <Link passHref legacyBehavior href="/privacypolicy">
                <a className="underline font-thin mr-[35px]">{`Privacy Policy`}</a>
              </Link>
              <Link passHref legacyBehavior href="/termsandconditions">
                <a className="underline font-thin ">{`Terms and Conditions`}</a>
              </Link>
            </div>
            <div className="xl:flex-1 xl:justify-end py-[20px] w-full xl:mr-[100px] px-[30px]">
              <p className=" w-full font-thin text-left xl:text-right">{`© 2024 Calli Wickes Photography`}</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
