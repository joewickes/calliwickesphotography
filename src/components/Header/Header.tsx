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
              <p
                className={`tracking-[.35em] text-[20px] w-full md:flex md:flex-col md:text-[25px] cursor-pointer ${
                  isMenuOpen || !isHome ? 'text-black' : 'text-white'
                }`}
              >
                <span>{`CALLI WICKES `}</span>
                <span>{`PHOTOGRAPHY`}</span>
              </p>
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
              {
                name: 'Info',
                subMenu: [
                  // { name: "Testimonials", link: "testimonials" },
                  { name: 'Pricing', link: 'pricing' },
                  { name: 'Experience', link: 'experience' },
                ],
              },
              { name: 'Portfolio', link: 'portfolio' },
              { name: 'Contact', link: 'contact' },
            ].map((item, idx) => {
              return idx !== 2 ? (
                <li key={idx} className="mb-[40px] cursor-pointer">
                  <Link href={`/${item.link}`} legacyBehavior passHref>
                    <a>{item.name}</a>
                  </Link>
                </li>
              ) : (
                <li key={idx} className="mb-[40px] flex flex-col justify-center items-center cursor-pointer">
                  <div>
                    <div onClick={() => setIsInfoOpen(!isInfoOpen)} className="flex items-center justify-center">
                      {item.name} <Dot size={20} />
                    </div>
                    <ul className="font-thin flex flex-col justify-center items-center">
                      {isInfoOpen
                        ? item?.subMenu?.map((subItem, idx) => {
                            return (
                              <li
                                key={idx}
                                className={`cursor-pointer ${
                                  idx === 0
                                    ? 'mt-[30px] mb-[40px]'
                                    : idx === item?.subMenu?.length - 1
                                      ? 'mb-[0px]'
                                      : 'mb-[40px]'
                                }`}
                              >
                                <Link href={`/${subItem.link}`} legacyBehavior passHref>
                                  <a>{subItem.name}</a>
                                </Link>
                              </li>
                            );
                          })
                        : null}
                    </ul>
                  </div>
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
