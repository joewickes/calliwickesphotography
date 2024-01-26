'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { ArrowUp, FacebookLogo, InstagramLogo, PinterestLogo } from '@phosphor-icons/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYelp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [path, setPath] = useState('#');

  useEffect(() => {
    if (window) {
      setPath(window.location.pathname);
    }
  }, []);

  return (
    <footer className="flex flex-col justify-center items-center mt-[60px] w-full">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex mb-[60px]">
          <Link href="https://www.facebook.com/CalliWickesPhotography/" legacyBehavior passHref>
            <a aria-label="Facebook">
              <FacebookLogo size={23} className="mr-[35px] cursor-pointer" />
            </a>
          </Link>
          <Link href="https://www.instagram.com/calliwickesphotography/" legacyBehavior passHref>
            <a aria-label="Instagram">
              <InstagramLogo size={23} className="mr-[35px] cursor-pointer" />
            </a>
          </Link>
          <Link href="https://www.pinterest.com/calliwickes/" legacyBehavior passHref>
            <a aria-label="Pinterest">
              <PinterestLogo size={23} className="mr-[35px] cursor-pointer" />
            </a>
          </Link>
          <Link href="https://www.yelp.com/biz/calli-wickes-photography-wesley-chapel" legacyBehavior passHref>
            <a aria-label="Yelp">
              <FontAwesomeIcon icon={faYelp} className="cursor-pointer" />
            </a>
          </Link>
        </div>
        <div>
          <Link href={path} legacyBehavior passHref>
            <ArrowUp size={30} className="cursor-pointer" />
          </Link>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full">
          <div className="md:flex-1 w-full"></div>
          <p className="md:flex-1 w-full font-thin mt-[25px] mb-[50px] md:my-[50px] text-center">{`© 2024 Calli Wickes Photography`}</p>
          <div className="md:flex-1 w-full flex mt-[25px] md:my-[50px] items-center text-center justify-center">
            <Link passHref legacyBehavior href="/privacypolicy">
              <a className="underline font-thin mr-[35px]">{`Privacy Policy`}</a>
            </Link>
            <Link passHref legacyBehavior href="/termsandconditions">
              <a className="underline font-thin ">{`Terms and Conditions`}</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
