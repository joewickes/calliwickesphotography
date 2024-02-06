'use client';

import { useState } from 'react';
import Link from 'next/link';

import { List, X, Dot } from '@phosphor-icons/react';

type HeaderProps = {
  isHome?: boolean;
};

const Header = ({ isHome = false }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <header>
      <div className={`${isMenuOpen ? 'fixed top-0' : ''} z-30`}>
        <div className="w-dvw flex px-[20px] absolute top-0 left-0">
          <div className={`flex-1 py-[10px] z-30 md:ml-[100px] md:mt-[50px]`}>
            <Link href="/" legacyBehavior passHref>
              <a
                aria-label="Calli Wickes Photography Home Page"
                className={`tracking-[.35em] text-[20px] w-full md:flex md:flex-col md:text-[25px] cursor-pointer ${
                  isMenuOpen || !isHome ? 'text-black' : 'text-white'
                }`}
              >
                <span>{`CALLI WICKES `}</span>
                <span>{`PHOTOGRAPHY`}</span>
              </a>
            </Link>
          </div>

          <div className="flex flex-1 justify-end items-center md:mr-[100px] md:mt-[50px]">
            <div className={`z-30 cursor-pointer`}>
              {!isMenuOpen ? (
                <List onClick={() => setIsMenuOpen(!isMenuOpen)} size={40} color={isHome ? 'white' : 'black'} />
              ) : (
                <X onClick={() => setIsMenuOpen(!isMenuOpen)} size={40} color={'black'} />
              )}
            </div>
          </div>
        </div>
        <nav
          className={`fixed h-full w-dvw bg-white z-20 flex justify-center pt-[15dvh] md:pt-[35dvh] md:text-[20px] ${
            !isMenuOpen ? 'invisible overflow-y-auto' : 'visible overflow-y-hidden'
          }`}
        >
          <ul className="flex flex-col items-center">
            {[
              { name: 'Home', link: '' },
              { name: 'About', link: 'about' },
              { name: 'Family Experience', link: 'family-experience' },
              { name: 'Senior Experience', link: 'senior-experience' },
              { name: 'Contact', link: 'contact' },
            ].map((item, idx) => {
              return (
                <li key={idx} className="mb-[40px] cursor-pointer">
                  <Link href={`/${item.link}`} legacyBehavior passHref>
                    <a>{item.name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
