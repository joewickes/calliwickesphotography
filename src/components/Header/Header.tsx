"use client";

import { useState } from "react";
import Link from "next/link";

import { List, X, Dot } from "@phosphor-icons/react";

type HeaderProps = {
  isHome?: boolean;
};

const Header = ({ isHome = false }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <header>
      <div className={`${isMenuOpen ? "fixed top-0" : ""} z-30`}>
        <div className="w-dvw flex px-[20px] absolute top-0 left-0">
          <div className={`flex-1 py-[10px] z-30`}>
            <Link href="/" legacyBehavior passHref>
              <p
                className={`tracking-[.35em] text-[20px] w-full ${
                  isMenuOpen || !isHome ? "text-black" : "text-white"
                }`}
              >
                {`CALLI WICKES PHOTOGRAPHY`}
              </p>
            </Link>
          </div>

          <div className="flex flex-1 justify-end items-center">
            <div className={`z-30`}>
              {!isMenuOpen ? (
                <List
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  size={40}
                  color={isHome ? "white" : "black"}
                />
              ) : (
                <X
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  size={40}
                  color={"black"}
                />
              )}
            </div>
          </div>
        </div>
        <nav
          className={`fixed h-full w-dvw bg-white z-20 flex justify-center pt-[15dvh] ${
            !isMenuOpen
              ? "invisible overflow-y-auto"
              : "visible overflow-y-hidden"
          }`}
        >
          <ul className="flex flex-col items-center">
            {[
              { name: "Home", link: "" },
              { name: "About", link: "about" },
              {
                name: "Info",
                subMenu: [
                  { name: "Testimonials", link: "testimonials" },
                  { name: "Pricing", link: "pricing" },
                  { name: "FAQ", link: "faq" },
                ],
              },
              { name: "Portfolio", link: "portfolio" },
              { name: "Contact", link: "contact" },
            ].map((item, idx) => {
              return idx !== 2 ? (
                <Link href={`/${item.link}`} key={idx} legacyBehavior passHref>
                  <li className="mb-[40px]">{item.name}</li>
                </Link>
              ) : (
                <li
                  key={idx}
                  className="mb-[40px] flex flex-col justify-center items-center"
                >
                  <div key={idx} onClick={() => setIsInfoOpen(!isInfoOpen)}>
                    <div className="flex items-center justify-center">
                      {item.name} <Dot size={20} />
                    </div>
                    <ul className="font-thin flex flex-col justify-center items-center">
                      {isInfoOpen
                        ? item?.subMenu?.map((subItem, idx) => {
                            return (
                              <Link
                                href={`/${subItem.link}`}
                                key={idx}
                                legacyBehavior
                                passHref
                              >
                                <li
                                  className={` ${
                                    idx === 0
                                      ? "mt-[20px] mb-[40px]"
                                      : idx === item?.subMenu?.length - 1
                                      ? "mb-[0px]"
                                      : "mb-[40px]"
                                  }`}
                                >
                                  {subItem.name}
                                </li>
                              </Link>
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
