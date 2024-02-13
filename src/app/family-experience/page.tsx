import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer/Footer'));
import Header from '@/components/Header/Header';
import Share from '@/components/Share/Share';

export const metadata: Metadata = {
  title: 'Family Photography | Calli Wickes Photography Family Gallery',
  description: 'A sample of the family photography work of Calli Wickes Photography.',
};

const FamilyGalleryPage = () => {
  const packages = [
    {
      name: 'Standard Session',
      price: 350,
      target: '*For families, Couples, Engagement Photos',
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
  ];

  return (
    <main className="xl:flex xl:flex-col xl:items-center">
      <Share />
      <div className="xl:w-full">
        <Header />
      </div>

      <section
        className="mt-[10dvh] xl:mt-[20dvh] px-[30px] pb-[100px] mb-[50px] xl:h-[80dvh] top-0 xl:w-full"
        id="familygallerytop"
      >
        <h2 className="text-white text-[38px] font-thin leading-1 flex flex-col pt-[60px] xl:text-[70px] xl:pt-[20%]">{`Families + Couples`}</h2>
        <p className="text-white text-[15px] font-thin px-[40px] py-[150px]">{`Family photos made into timeless memories.`}</p>
      </section>
      <section className="px-[30px] mb-[60px] xl:flex xl:items-center xl:px-[100px] xl:mb-[150px] xl:mt-[100px]">
        <h1 className="text-[40px] leading-1 mb-[30px] xl:flex-1 xl:text-[50px]">{`Family Photography`}</h1>
        <p className="font-thin xl:flex-1">{`Every Tampa family is uniquely beautiful. I specialize in capturing the relaxed and joyful interactions that make your family extraordinary. Whether it's the warmth of big family gatherings or the intimacy of shoots with you and your fur baby, each family photography session in Tampa is tailored to create an experience you'll truly adore. Let's capture portraits that authentically reflect your family's story, offering you cherished memories that reflect your family. Images that you’ll want to print, frame, and hold close forever.`}</p>
      </section>

      <section className="px-[30px] xl:columns-3 xl:w-[80%] xl:px-[100px]">
        <div className="flex justify-center xl:justify-normal mb-[15px]">
          <Image
            src="/images/Family Gallery/veryelderlycoupleinloveintampafl.webp"
            height={684}
            width={456}
            className="object-cover"
            alt="Elderly couple shares a tender moment in Tampa's rural setting."
          />
        </div>
        <div className="flex justify-center xl:justify-normal mb-[15px]">
          <Image
            src="/images/Family Gallery/happycoupletampa.webp"
            height={304}
            width={456}
            className="object-cover"
            alt="Couple embraces in Tampa's rustic charm."
          />
        </div>
        <div className="flex justify-center xl:justify-normal mb-[15px]">
          <Image
            src="/images/Family Gallery/youngdadandhisbabyboyinflorida.webp"
            height={684}
            width={456}
            className="object-cover"
            alt="Elderly couple shares a tender moment in Tampa's rural setting."
          />
        </div>
        <div className="flex justify-center xl:justify-normal mb-[15px]">
          <Image
            src="/images/Family Gallery/twolittlecousinstampa.webp"
            height={684}
            width={456}
            className="object-cover"
            alt="Cousins in Tampa - older girl with her newborn rainbow baby cousin, a heartwarming bond"
          />
        </div>
        <div className="flex justify-center xl:justify-normal mb-[15px]">
          <Image
            src="/images/Family Gallery/newlyengagedcouple.webp"
            height={684}
            width={456}
            className="object-cover"
            alt="Rural love: Couple shares a sweet moment in Florida."
          />
        </div>
        <div className="flex justify-center xl:justify-normal mb-[15px]">
          <Image
            src="/images/Family Gallery/businesscoupledowntowntampa.webp"
            height={684}
            width={456}
            className="object-cover"
            alt="Urban wall moment - Young couple, Tampa style"
          />
        </div>
        <div className="flex justify-center xl:justify-normal mb-[15px]">
          <Image
            src="/images/Family Gallery/youngfamilyinlovetampa.webp"
            height={684}
            width={456}
            className="object-cover"
            alt="Tampa Family Photography"
          />
        </div>
        <div className="flex justify-center xl:justify-normal mb-[15px]">
          <Image
            src="/images/Family Gallery/largefamilyportraitinflorida.webp"
            height={304}
            width={456}
            className="object-cover"
            alt="Generations unite in a Tampa family portrait amidst the beauty of rural surroundings."
          />
        </div>
        <div className="flex justify-center xl:justify-normal mb-[15px]">
          <Image
            src="/images/Family Gallery/dadwithbabygirl.webp"
            height={304}
            width={456}
            className="object-cover"
            alt="New dad cradling his baby girl in a sweet nursery moment filled with love and tenderness."
          />
        </div>
        <div className="flex justify-center xl:justify-normal mb-[15px]">
          <Image
            src="/images/Family Gallery/sisterlylovetampafl.webp"
            height={684}
            width={456}
            className="object-cover"
            alt="Teen sisters hug - Sisterly love in Tampa."
          />
        </div>
        <div className="flex justify-center xl:justify-normal mb-[15px]">
          <Image
            src="/images/Family Gallery/parentswiththeirnewbornintampa.webp"
            height={304}
            width={456}
            className="object-cover"
            alt="Joyful new parents cradle their precious rainbow baby boy in a heartwarming Tampa moment."
          />
        </div>
        <div className="flex justify-center xl:justify-normal mb-[15px]">
          <Image
            src="/images/Family Gallery/newfamilyofthreeintampanursery.webp"
            height={684}
            width={456}
            className="object-cover"
            alt="New mom and dad holding their baby girl in a tender nursery moment filled with love and joy."
          />
        </div>
        <div className="flex justify-center xl:justify-normal mb-[15px]">
          <Image
            src="/images/Family Gallery/husbandkissingwifeoncheek.webp"
            height={684}
            width={456}
            className="object-cover"
            alt="Couple kiss, rural Tampa backdrop."
          />
        </div>
        <div className="flex justify-center xl:justify-normal mb-[15px]">
          <Image
            src="/images/Family Gallery/littlegirlcountrysidetampa.webp"
            height={684}
            width={456}
            className="object-cover"
            alt="Sweet little girl in Tampa's countryside, hands on hips, exuding charm and playfulness."
          />
        </div>
        <div className="flex justify-center xl:justify-normal mb-[15px]">
          <Image
            src="/images/Family Gallery/multigenerationfamilytampa.webp"
            height={684}
            width={456}
            className="object-cover"
            alt="Three generations of love at Tampa sunset - Grandma, daughters-in-law, and granddaughter share a special moment."
          />
        </div>
        <div className="flex justify-center xl:justify-normal mb-[15px]">
          <Image
            src="/images/Family Gallery/familyofthreeinthefall.webp"
            height={304}
            width={456}
            className="object-cover"
            alt="Family of three poses against a rustic fence during the fall in Tampa, Fl."
          />
        </div>
      </section>

      <section className="mt-[100px] px-[30px] xl:mt-[100px] w-full">
        <h1 className="text-[40px] leading-1 flex flex-col mb-[50px] text-center xl:text-[70px]">
          {`Pricing Packages`}
        </h1>

        <ul>
          {packages.map((pkg, idx) => {
            return (
              <li
                key={idx}
                className={`xl:py-[50px] ${
                  idx === 1 ? 'xl:border xl:border-x-0 xl:border-b-0 xl:border-t-1 xl:border-[#f2f2f2]' : ''
                } xl:flex ${idx % 2 === 0 ? '' : ' xl:flex-row-reverse'}`}
              >
                <div className="xl:flex-1 flex items-center justify-center">
                  <Image
                    src={pkg?.image?.src || ''}
                    height={pkg?.image?.height}
                    width={pkg?.image?.width}
                    alt={pkg?.image?.alt || ''}
                    className="mb-[30px] xl:max-w-[457px]"
                  />
                </div>
                <div className="xl:flex-1 xl:flex xl:flex-col xl:items-center xl:justify-center pt-[25px] pb-[50px]">
                  <h2
                    className={`text-[40px] leading-1 flex flex-col mb-[20px] text-center xl:self-start ${
                      idx === Math.floor(packages.length / 2) ? 'xl:self-end' : ''
                    }`}
                  >
                    {pkg.name}
                  </h2>
                  <p
                    className={`font-bold text-center mb-[30px] xl:self-start ${
                      idx === Math.floor(packages.length / 2) ? 'xl:self-end' : ''
                    }`}
                  >{`$${pkg.price}`}</p>
                  {pkg.target ? (
                    <p
                      className={`text-center mb-[30px] font-thin xl:self-start ${
                        idx === Math.floor(packages.length / 2) ? 'xl:self-end' : ''
                      }`}
                    >
                      {pkg.target}
                    </p>
                  ) : null}

                  <ul
                    className={`mb-[60px] xl:self-start ${
                      idx === Math.floor(packages.length / 2) ? 'xl:self-end' : ''
                    } xl:flex xl:flex-col`}
                  >
                    {pkg.description.split(';').map((desc, idx2) => (
                      <li
                        key={idx2}
                        className={`font-thin text-center xl:self-start ${
                          idx === Math.floor(packages.length / 2) ? 'xl:self-end xl:text-right' : ''
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

      <section className="px-[30px] mt-[100px] mb-[60px] xl:w-full xl:px-[100px] xl:flex xl:flex-row-reverse xl:mt-[200px]">
        <div className="flex justify-center xl:flex-1">
          <Image
            src="/images/Family Gallery/happylittlefamilyinflorida.webp"
            height={684}
            width={456}
            className="object-cover"
            alt="Family bliss captured in the serene setting of Florida's nature with green grass and Spanish moss."
          />
        </div>
        <div className="flex justify-center xl:justify-normal mb-[15px] xl:flex-1 flex-col xl:items-left items-center">
          <h2 className="text-[40px] leading-1 my-[30px] xl:text-[60px]">{`Time to capture your family's happiest moments`}</h2>
          <p className="font-thin mb-[15px]">{`Your Tampa + Wesley Chapel Family Photographer`}</p>

          <div className="xl:mt-[150px] mt-[60px] mb-[150px]">
            <Link href="/contact" legacyBehavior passHref>
              <a className="border border-black py-[15px] text-[13px] tracking-[.35em] px-[30px]">{`GET IN TOUCH`}</a>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default FamilyGalleryPage;
