'use client';

import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer/Footer'));
import Header from '@/components/Header/Header';
import Image from 'next/image';
import Link from 'next/link';

const FamilyGalleryPage = () => {
  return (
    <main className="md:flex md:flex-col md:items-center">
      <div className="md:w-full">
        <Header />
      </div>

      <section
        className="mt-[10dvh] md:mt-[20dvh] px-[30px] pb-[100px] mb-[50px] md:h-[80dvh] top-0 md:w-full"
        id="familygallerytop"
      >
        <h2 className="text-white text-[38px] font-thin leading-1 flex flex-col pt-[60px] md:text-[70px] md:pt-[20%]">{`Families + Couples`}</h2>
        <p className="text-white text-[15px] font-thin px-[40px] py-[150px]">{`Family photos made into timeless memories.`}</p>
      </section>
      <section className="px-[30px] mb-[60px] md:flex md:items-center md:px-[100px] md:mb-[150px] md:mt-[100px]">
        <h1 className="text-[40px] leading-1 mb-[30px] md:flex-1 md:text-[50px]">{`Family Photography`}</h1>
        <p className="font-thin md:flex-1">{`Every Tampa family is uniquely beautiful. I specialize in capturing the relaxed and joyful interactions that make your family extraordinary. Whether it's the warmth of big family gatherings or the intimacy of shoots with you and your fur baby, each family photography session in Tampa is tailored to create an experience you'll truly adore. Let's capture portraits that authentically reflect your family's story, offering you cherished memories that reflect your family. Images that you’ll want to print, frame, and hold close forever.`}</p>
      </section>

      <section className="px-[30px] md:columns-3 md:w-[80%] md:px-[100px]">
        <div className="w-full mb-[15px]">
          <Image
            placeholder="blur"
            src="/images/Family Gallery/veryelderlycoupleinloveintampafl.webp"
            height={684}
            width={456}
            className="object-cover"
            alt="Elderly couple shares a tender moment in Tampa's rural setting."
          />
        </div>
        <div className="w-full mb-[15px]">
          <Image
            placeholder="blur"
            src="/images/Family Gallery/happycoupletampa.webp"
            height={304}
            width={456}
            className="object-cover"
            alt="Couple embraces in Tampa's rustic charm."
          />
        </div>
        <div className="w-full mb-[15px]">
          <Image
            placeholder="blur"
            src="/images/Family Gallery/youngdadandhisbabyboyinflorida.webp"
            height={684}
            width={456}
            className="object-cover"
            alt="Elderly couple shares a tender moment in Tampa's rural setting."
          />
        </div>
        <div className="w-full mb-[15px]">
          <Image
            placeholder="blur"
            src="/images/Family Gallery/twolittlecousinstampa.webp"
            height={684}
            width={456}
            className="object-cover"
            alt="Cousins in Tampa - older girl with her newborn rainbow baby cousin, a heartwarming bond"
          />
        </div>
        <div className="w-full mb-[15px]">
          <Image
            placeholder="blur"
            src="/images/Family Gallery/newlyengagedcouple.webp"
            height={684}
            width={456}
            className="object-cover"
            alt="Rural love: Couple shares a sweet moment in Florida."
          />
        </div>
        <div className="w-full mb-[15px]">
          <Image
            placeholder="blur"
            src="/images/Family Gallery/businesscoupledowntowntampa.webp"
            height={684}
            width={456}
            className="object-cover"
            alt="Urban wall moment - Young couple, Tampa style"
          />
        </div>
        <div className="w-full mb-[15px]">
          <Image
            placeholder="blur"
            src="/images/Family Gallery/youngfamilyinlovetampa.webp"
            height={684}
            width={456}
            className="object-cover"
            alt="Tampa Family Photography"
          />
        </div>
        <div className="w-full mb-[15px]">
          <Image
            placeholder="blur"
            src="/images/Family Gallery/largefamilyportraitinflorida.webp"
            height={304}
            width={456}
            className="object-cover"
            alt="Generations unite in a Tampa family portrait amidst the beauty of rural surroundings."
          />
        </div>
        <div className="w-full mb-[15px]">
          <Image
            placeholder="blur"
            src="/images/Family Gallery/dadwithbabygirl.webp"
            height={304}
            width={456}
            className="object-cover"
            alt="New dad cradling his baby girl in a sweet nursery moment filled with love and tenderness."
          />
        </div>
        <div className="w-full mb-[15px]">
          <Image
            placeholder="blur"
            src="/images/Family Gallery/sisterlylovetampafl.webp"
            height={684}
            width={456}
            className="object-cover"
            alt="Teen sisters hug - Sisterly love in Tampa."
          />
        </div>
        <div className="w-full mb-[15px]">
          <Image
            placeholder="blur"
            src="/images/Family Gallery/parentswiththeirnewbornintampa.webp"
            height={304}
            width={456}
            className="object-cover"
            alt="Joyful new parents cradle their precious rainbow baby boy in a heartwarming Tampa moment."
          />
        </div>
        <div className="w-full mb-[15px]">
          <Image
            placeholder="blur"
            src="/images/Family Gallery/newfamilyofthreeintampanursery.webp"
            height={684}
            width={456}
            className="object-cover"
            alt="New mom and dad holding their baby girl in a tender nursery moment filled with love and joy."
          />
        </div>
        <div className="w-full mb-[15px]">
          <Image
            placeholder="blur"
            src="/images/Family Gallery/husbandkissingwifeoncheek.webp"
            height={684}
            width={456}
            className="object-cover"
            alt="Couple kiss, rural Tampa backdrop."
          />
        </div>
        <div className="w-full mb-[15px]">
          <Image
            placeholder="blur"
            src="/images/Family Gallery/littlegirlcountrysidetampa.webp"
            height={684}
            width={456}
            className="object-cover"
            alt="Sweet little girl in Tampa's countryside, hands on hips, exuding charm and playfulness."
          />
        </div>
        <div className="w-full mb-[15px]">
          <Image
            placeholder="blur"
            src="/images/Family Gallery/multigenerationfamilytampa.webp"
            height={684}
            width={456}
            className="object-cover"
            alt="Three generations of love at Tampa sunset - Grandma, daughters-in-law, and granddaughter share a special moment."
          />
        </div>
        <div className="w-full mb-[15px]">
          <Image
            placeholder="blur"
            src="/images/Family Gallery/familyofthreeinthefall.webp"
            height={304}
            width={456}
            className="object-cover"
            alt="Family of three poses against a rustic fence during the fall in Tampa, Fl."
          />
        </div>
      </section>

      <section className="px-[30px] mt-[100px] mb-[60px] md:w-full md:px-[100px] md:flex md:flex-row-reverse md:mt-[200px]">
        <div className="md:flex md:justify-center md:flex-1">
          <Image
            placeholder="blur"
            src="/images/Family Gallery/happylittlefamilyinflorida.webp"
            height={684}
            width={456}
            className="object-cover"
            alt="Family bliss captured in the serene setting of Florida's nature with green grass and Spanish moss."
          />
        </div>
        <div className="w-full mb-[15px] md:flex-1">
          <h2 className="text-[40px] leading-1 my-[30px] md:text-[60px]">{`Time to capture your family's happiest moments`}</h2>
          <p className="font-thin mb-[15px]">{`Your Tampa + Wesley Chapel Family Photographer`}</p>

          <Link href="/contact" legacyBehavior passHref>
            <a className="mb-[60px] mt-[30px] border border-black py-[15px] text-[13px] tracking-[.35em] px-[30px]">
              {`GET IN TOUCH`}
            </a>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default FamilyGalleryPage;
