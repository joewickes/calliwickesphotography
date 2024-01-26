'use client';

import Image from 'next/image';
import Link from 'next/link';

import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer/Footer'));
import Header from '@/components/Header/Header';

const PricingPage = () => {
  const packages = [
    {
      name: 'Standard Photo Session',
      price: 350,
      target: '*For families, Couples, Engagement Photots',
      description:
        '45-60 minute session;Final gallery of high resulition digital downloads (30+) delivered via online gallery;On location, within 1 hour of Tampa',
      image: {
        src: '/images/Pricing/familyportraittampa.webp',
        height: 1029,
        width: 686,
        alt: 'Photography in Tampa, FL',
      },
    },
    {
      name: 'Extended Family Session',
      price: 550,
      description:
        '60-90 minute session;Up to 12 people - $10/person after;Final gallery of high resolution digital downloads (50+) delivered via online gallery;Separate family groupings;On location, within 1 hour of Tampa',
      image: {
        src: '/images/Pricing/extendedfamilyportraittampa.webp',
        height: 457,
        width: 686,
        alt: 'Photography in Tampa, FL',
      },
    },
    {
      name: 'Senior Session',
      price: 450,
      description:
        'up to 2 hours session;Final gallery of high resolution digital downloads (40+) delivered via online gallery;Up to 3 outfit changes;2 locations within 10 mi on the same day (location ranges within 1 hour of Tampa);*please contact for additional options',
      image: {
        src: '/images/Pricing/seniorportraittampa.webp',
        height: 1029,
        width: 686,
        alt: 'Photography in Tampa, FL',
      },
    },
  ];

  return (
    <main>
      <Header isHome />

      {/* <Image
placeholder="blur"
        className="mt-[10dvh] md:mt-[20dvh]"
        src="/images/Pricing/couplekissingtheirdaughter.webp"
        priority
        height={1149}
        width={1724}
        alt="Dad and mom kiss daughter cheeks, surrounded by beautiful Florida scenery"
      /> */}
      <section className="px-[30px] h-[100dvh] flex items-center" id="couplewithdaughter">
        <p className="text-[30px] leading-1 font-thin flex flex-col mb-[60px] md:mb-0 text-center md:font-normal md:ml-[100px] text-white md:text-[50px]">
          {`Beautiful moments. Perfectly captured.`}
        </p>
      </section>

      <section className="mt-[60px] md:mt-0 px-[30px] md:mt-[100px]">
        <h1 className="text-[40px] leading-1 flex flex-col mb-[50px] text-center md:text-[70px]">
          {`Pricing Packages`}
        </h1>

        <ul>
          {packages.map((pkg, idx) => {
            return (
              <li
                key={idx}
                className={`md:py-[50px] ${
                  idx === Math.floor(packages.length / 2)
                    ? 'md:border md:border-x-0 md:border-y-1 md:border-[#f2f2f2]'
                    : ''
                } md:flex ${idx % 2 === 0 ? '' : ' md:flex-row-reverse'}`}
              >
                <div className="md:flex-1 md:flex md:items-center md:justify-center">
                  <Image
                    placeholder="blur"
                    src={pkg?.image?.src || ''}
                    height={pkg?.image?.height}
                    width={pkg?.image?.width}
                    alt={pkg?.image?.alt || ''}
                    className="mb-[30px] md:max-w-[457px]"
                  />
                </div>
                <div className="md:flex-1 md:flex md:flex-col md:items-center md:justify-center">
                  <h2
                    className={`text-[40px] leading-1 flex flex-col mb-[20px] text-center md:self-start ${
                      idx === Math.floor(packages.length / 2) ? 'md:self-end' : ''
                    }`}
                  >
                    {pkg.name}
                  </h2>
                  <p
                    className={`font-bold text-center mb-[30px] md:self-start ${
                      idx === Math.floor(packages.length / 2) ? 'md:self-end' : ''
                    }`}
                  >{`$${pkg.price}`}</p>
                  {pkg.target ? (
                    <p
                      className={`text-center mb-[30px] font-thin md:self-start ${
                        idx === Math.floor(packages.length / 2) ? 'md:self-end' : ''
                      }`}
                    >
                      {pkg.target}
                    </p>
                  ) : null}

                  <ul
                    className={`mb-[60px] md:self-start ${
                      idx === Math.floor(packages.length / 2) ? 'md:self-end' : ''
                    } md:flex md:flex-col`}
                  >
                    {pkg.description.split(';').map((desc, idx2) => (
                      <li
                        key={idx2}
                        className={`font-thin text-center md:self-start ${
                          idx === Math.floor(packages.length / 2) ? 'md:self-end md:text-right' : ''
                        }`}
                      >
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="px-[30px] bg-black mb-[60px]" id="storyholdinghands">
        <h2 className="text-[40px] leading-1 md:flex md:flex-col mb-[20px] font-thin text-white pt-[60px] md:text-[70px] md:pt-[200px] md:pl-[100px]">
          <span>{`Let's Document`}</span> <span>{`Your Story`}</span>
        </h2>
        <div className="flex justify-center mt-[300px]">
          <Link href="/contact" legacyBehavior passHref>
            <a className="mb-[60px] border border-white text-white py-[15px] text-[13px] tracking-[.35em] px-[30px] md:translate-x-[200px] md:translate-y-[-150px]">
              {`GET IN TOUCH`}
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PricingPage;
