'use client';

import { useState } from 'react';
import Link from 'next/link';

import { List, X } from '@phosphor-icons/react';

type HeaderProps = {
  isHome?: boolean;
  headerData: any;
};

const Header = ({ isHome = false, headerData }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className={`${isMenuOpen ? 'fixed top-0' : ''} z-30 `}>
        <div className="w-dvw flex px-[20px] absolute top-0 left-0">
          <div className={`flex-1 py-[10px] z-30 xl:mx-[100px] xl:mt-[50px] flex justify-between`}>
            <Link href="/" legacyBehavior passHref>
              <a
                aria-label="Calli Wickes Photography Home Page"
                className={`tracking-[.35em] text-[20px] flex flex-col xl:text-[25px] cursor-pointer md:w-[300px] w-full ${
                  isMenuOpen || !isHome ? 'text-black' : 'text-white'
                }`}
              >
                {headerData.logoText}
              </a>
            </Link>
            <nav className="flex invisible xl:visible">
              <ul className="flex items-center justify-center">
                {headerData.menu_items.data.map((item: any, idx: number) => {
                  return (
                    <li key={idx} className="cursor-pointer">
                      <Link href={item.attributes.link} legacyBehavior passHref>
                        <a
                          className={`${idx !== headerData.menu_items.data.length - 1 ? 'mr-[40px]' : ''} hover:underline font-thin`}
                        >
                          {item.attributes.itemName}
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className="flex flex-1 justify-end items-center xl:mr-[100px] xl:mt-[50px] xl:hidden">
            <div className={`z-30 cursor-pointer`}>
              {!isMenuOpen ? (
                <div className="flex items-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {!isMenuOpen ? (
                    <span className={`text-[16px] text-${isHome ? 'white' : 'black'} invisible xl:visible pr-[20px]`}>
                      {headerData.menuTitle}
                    </span>
                  ) : null}
                  <List size={40} color={isHome ? 'white' : 'black'} />
                </div>
              ) : (
                <X onClick={() => setIsMenuOpen(!isMenuOpen)} size={40} color={'black'} />
              )}
            </div>
          </div>
        </div>

        <nav
          className={`xl:hidden fixed h-full w-dvw bg-white z-20 flex justify-center pt-[15dvh] xl:pt-[35dvh] xl:text-[20px] ${
            !isMenuOpen ? 'invisible overflow-y-auto' : 'visible overflow-y-hidden'
          }`}
        >
          <ul className="flex flex-col items-center">
            {headerData.menu_items.data.map((item: any, idx: number) => {
              return (
                <li key={idx} className="mb-[40px] cursor-pointer">
                  <Link href={item.attributes.link} legacyBehavior passHref>
                    <a>{item.attributes.itemName}</a>
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
