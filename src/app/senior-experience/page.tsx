import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer/Footer'));
import Header from '@/components/Header/Header';
import Share from '@/components/Share/Share';

export const metadata: Metadata = {
  title: 'Senior Experience',
  description: 'For adventurous seniors who want that perfect mix of candid and portrait.',
};

const SeniorGalleryPage = () => {
  const packages = [
    {
      name: 'Senior Session',
      price: 'STARTING AT $225',
      description:
        '$100 non refundable deposit to book (goes towards your session fee); currently offering three different senior photography packages; please contact for detailed pricing information',
      image: {
        src: '/images/Pricing/seniorportraittampa.webp',
        height: 1029,
        width: 686,
        alt: 'Senior Photos in Tampa, FL',
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
        className="mt-[10dvh] xl:mt-[20dvh] px-[30px] pb-[100px] mb-[50px] xl:h-[80dvh] top-0 xl:w-full xl:px-[100px]"
        id="seniorgallerytop"
      >
        <h2 className="text-white text-[38px] font-thin leading-1 flex flex-col pt-[60px] xl:text-[70px] xl:pt-[20%]">{`Seniors`}</h2>
        <p className="xl:pl-0 text-white text-[15px] font-thin px-[40px] py-[150px]">{`Senior photos to capture this short season of life`}</p>
      </section>
      <section className="xl:mt-[100px] px-[30px] mb-[60px] xl:flex xl:items-center xl:px-[100px] xl:mb-[150px]">
        <h1 className="text-[40px] leading-1 mb-[30px] xl:flex-1 xl:text-[50px] xl:pr-[75px]">{`The Senior Experience`}</h1>
        <p className="font-thin xl:flex-1">{`My seniors love my playful and adventurous sessions, my relaxed posing, and the bright warmth of my images. Senior sessions are meant to capture your unique personality - capturing you as you are today! They are a time capsule of laughter, friendships, and the spirit of your school experience.`}</p>
      </section>

      <section className="px-[30px] xl:columns-3 xl:w-[80%] xl:px-[100px]">
        <div className="flex justify-center xl:justify-normal mb-[15px]">
          <Image
            src="/images/Senior Gallery/soccerseniorphoto.webp"
            height={575}
            width={383}
            className="object-cover"
            alt="Soccer enthusiast senior guy in Tampa, soccer ball at his side."
          />
        </div>
        <div className="flex justify-center xl:justify-normal mb-[15px]">
          <Image
            src="/images/Senior Gallery/seniorladytampa.webp"
            height={574}
            width={383}
            className="object-cover"
            alt="Captivating high school senior amidst Tampa's picturesque backdrop."
          />
        </div>
        <div className="flex justify-center xl:justify-normal mb-[15px]">
          <Image
            src="/images/Senior Gallery/seniorguyagainstwhitebrickwall.webp"
            height={95}
            width={383}
            className="object-cover"
            alt="Urban charm: Senior male against white brick wall in Tampa."
          />
        </div>
        <div className="flex justify-center xl:justify-normal mb-[15px]">
          <Image
            src="/images/Senior Gallery/seniorgirlinthecountryside.webp"
            height={95}
            width={383}
            className="object-cover"
            alt="Rural love: Couple shares a sweet moment in Florida."
          />
        </div>
        <div className="flex justify-center xl:justify-normal mb-[15px]">
          <Image
            src="/images/Senior Gallery/seniorgirlinstairwell.webp"
            height={575}
            width={383}
            className="object-cover"
            alt="Graceful senior girl in a pretty Tampa location, creating beautiful memories."
          />
        </div>
        <div className="flex justify-center xl:justify-normal mb-[15px]">
          <Image
            src="/images/Senior Gallery/seniorguybaseballphoto.webp"
            height={575}
            width={383}
            className="object-cover"
            alt="Senior guy in a baseball uniform, posing with his baseball glove in Tampa."
          />
        </div>
        <div className="flex justify-center xl:justify-normal mb-[15px]">
          <Image
            src="/images/Senior Gallery/seniorgirlwithwaterbackground.webp"
            height={95}
            width={383}
            className="object-cover"
            alt="Feminine charm in a Tampa outdoor setting, perfect for senior photos."
          />
        </div>
        <div className="flex justify-center xl:justify-normal mb-[15px]">
          <Image
            src="/images/Senior Gallery/seniorphotoinlettermanjacket.webp"
            height={575}
            width={383}
            className="object-cover"
            alt="Dapper male in Tampa, showcasing senior style in a letterman jacket"
          />
        </div>
        <div className="flex justify-center xl:justify-normal mb-[15px]">
          <Image
            src="/images/Senior Gallery/seniormaleinflannel.webp"
            height={95}
            width={383}
            className="object-cover"
            alt="Stylish high school senior guy outside a barn with Tampa's rural charm."
          />
        </div>
        <div className="flex justify-center xl:justify-normal mb-[15px]">
          <Image
            src="/images/Senior Gallery/seniorportrait.webp"
            height={95}
            width={383}
            className="object-cover"
            alt="Beautiful high school senior girl"
          />
        </div>
        <div className="flex justify-center xl:justify-normal mb-[15px] xl:hidden">
          <Image
            src="/images/Senior Gallery/softballseniorphoto.webp"
            height={95}
            width={383}
            className="object-cover"
            alt="High school senior softball star in Tampa, donning red school colors."
          />
        </div>
      </section>

      <section className="mt-[60px] px-[30px] xl:mt-[100px] w-full">
        <h1 className="text-[40px] leading-1 flex flex-col mb-[50px] text-center xl:text-[70px]">
          {`Session Info`}
        </h1>

        <ul>
          {packages.map((pkg, idx) => {
            return (
              <li key={idx} className={`xl:py-[50px]  xl:flex ${idx % 2 === 0 ? '' : ' xl:flex-row-reverse'}`}>
                <div className="xl:flex-1 flex flex-col xl:flex-row lg:items-center lg:justify-center mb-[50px]">
                  <Image
                    src={pkg?.image?.src || ''}
                    height={pkg?.image?.height}
                    width={pkg?.image?.width}
                    alt={pkg?.image?.alt || ''}
                    className="mb-[30px] xl:max-w-[457px]"
                  />
                </div>
                <div className="xl:flex-1 xl:flex xl:flex-col xl:items-center xl:justify-center pb-[50px]">
                  <h2 className={`text-[40px] leading-1 flex flex-col mb-[20px] text-center xl:self-start`}>
                    {pkg.name}
                  </h2>
                  <p className={`font-bold text-center mb-[30px] xl:self-start`}>{`${pkg.price}`}</p>

                  <ul className={`mb-[60px] xl:self-start xl:flex xl:flex-col`}>
                    {pkg.description.split(';').map((desc, idx2) => (
                      <li key={idx2} className={`font-thin text-center xl:self-start`}>
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

      <section className="px-[30px] sm:px-[50px] mt-[100px] mb-[60px] xl:w-full xl:px-[100px] flex flex-col xl:flex-row-reverse xl:mt-[200px] justify-center items-start">
        <div className="xl:flex xl:justify-center xl:flex-1">
          <Image
            src="/images/Senior Gallery/seniorphotostampa.webp"
            height={574}
            width={383}
            className="object-cover"
            alt="Elegant senior girl in Tampa's scenic beauty, capturing timeless moments."
          />
        </div>
          <div className="flex justify-center xl:justify-normal mb-[15px] xl:flex-1 flex-col xl:items-left items-start">
          <h2 className="text-[40px] leading-1 my-[30px] xl:text-[60px]">{`Senior Photography`}</h2>
          <p className="font-thin mb-[15px]">{`Natural photography for adventurous seniors who want that perfect mix of candid and portrait`}</p>

          <div className="xl:mt-[150px] mt-[60px] mb-[150px]">
            <Link href="/contact" legacyBehavior passHref>
              <a className="border border-black py-[15px] text-[13px] tracking-[.35em] px-[30px]">{`LET'S CHAT!`}</a>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default SeniorGalleryPage;
