'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { ArrowUp, FacebookLogo, InstagramLogo } from '@phosphor-icons/react';

const Footer = () => {
  const [path, setPath] = useState('#');

  useEffect(() => {
    if (window) {
      setPath(window.location.pathname);
    }
  }, []);

  return (
    <footer className="flex flex-col justify-center items-center mt-[60px]">
      <div className="flex flex-col justify-center items-center">
        <div className="flex mb-[60px]">
          <Link href="https://www.facebook.com/CalliWickesPhotography/" legacyBehavior passHref>
            <a>
              <FacebookLogo size={23} className="mr-[35px] cursor-pointer" />
            </a>
          </Link>
          <Link href="https://www.instagram.com/calliwickesphotography/" legacyBehavior passHref>
            <a>
              <InstagramLogo size={23} className="cursor-pointer" />
            </a>
          </Link>
        </div>
        <Link href={path} legacyBehavior passHref>
          <ArrowUp size={30} className="cursor-pointer" />
        </Link>
        <p className="font-thin my-[50px]">{`© 2024 Calli Wickes Photography`}</p>
      </div>
    </footer>
  );
};

export default Footer;
