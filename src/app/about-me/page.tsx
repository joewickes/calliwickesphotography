import type { Metadata } from 'next';

import Image from 'next/image';
import Link from 'next/link';

import { Lora } from 'next/font/google';
const lora = Lora({ subsets: ['latin'] });

import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer/Footer'));
import Header from '@/components/Header/Header';
import Share from '@/components/Share/Share';

export const metadata: Metadata = {
  title: 'Meet Calli',

  description:
    'Hey there, meet Calli! A photographer who loves catching those sweet moments with you + your favorite people!',
};

async function getHeaderData() {
  try {
    const res = await fetch(`${process.env.STRAPI_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      body: JSON.stringify({
        query: `{
          header {
            data {
              attributes {
                logoText
                logoImage {
                  data {
                    attributes {
                      url
                      alternativeText
                      width
                      height
                    }
                  }
                }
                menuTitle
              }
            }
          }
        }`,
      }),
    });
    return res.json().then((data) => data.data.header.data.attributes);
  } catch (error) {
    console.log('error', error);
  }
}

// async function getData() {
//   try {
//     const res = await fetch(`${process.env.STRAPI_URL}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `bearer ${process.env.STRAPI_API_TOKEN}`,
//       },
//       body: JSON.stringify({
//         query: `{
//             aboutMePage {
//               data {
//                 attributes {
//                   heroPhoto {
//                     data {
//                       attributes {
//                         url
//                         alternativeText
//                         width
//                         height
//                       }
//                     }
//                   }
//                   heroParagraph
//                   heroButtonText
//                   heroButtonLink
//                   aboutMePhoto {
//                     data {
//                       attributes {
//                         url
//                         alternativeText
//                         width
//                         height
//                       }
//                     }
//                   }
//                   aboutMeTitle
//                   aboutMeSubtitle
//                   aboutMeParagraph
//                   aboutMeButtonText
//                   aboutMeButtonLink
//                   contactTitle
//                   contactButtonLink
//                   contactImage
//                 }
//               }
//             }
//           }
//         `,
//       }),
//     });
//     return res.json().then((data) => data.data.aboutMePage.data.attributes);
//   } catch (error) {
//     console.log('error', error);
//   }
// }

const AboutPage = async () => {
  const headerData = await getHeaderData();
  // const data = await getData();

  return (
    <main>
      <Share />
      <Header headerData={headerData} />

      <section className="px-[30px] pt-[40px] flex flex-col items-center bg-[#f2f2f2] pb-[50px] mt-[20dvh] xl:mt-[20dvh]">
        <div className="min-h-[225px] w-full overflow-hidden flex justify-center">
          <Image
            src="/images/About/familyoffoursmiling.webp"
            height={867}
            width={1664}
            className="object-cover h-full"
            alt="Family photo of four for a photographer in Tampa"
          />
        </div>
        <p className="font-thin leading-8 mb-[30px] mt-[50px] xl:mt-[50px] text-[25px] w-[60dvw] text-center xl:leading-[3rem]">
          {`Giving family's photographs that they will cherish forever - makes every moment worth it`}
        </p>
        <Link href="/family-experience" legacyBehavior passHref>
          <a className=" border border-black py-[15px] text-[13px] tracking-[.35em] px-[30px]">{`FAMILY EXPERIENCE`}</a>
        </Link>
      </section>

      <section id="about" className="px-[30px] xl:flex ">
        <div className="flex justify-center mb-[60px] xl:flex-1">
          <div className="xl:mt-[120px] h-[90dvw] w-[90dvw] md:h-auto xl:w-auto overflow-hidden xl:pl-[100px]">
            <Image
              src="/images/Home Updated/TampaPhotographerPortrait.webp"
              alt="Tampa photographer in downtown portrait."
              height={840}
              width={560}
              className="object-cover mt-[-10dvw] xl:mt-[-100px]"
            />
          </div>
        </div>
        <div className="xl:flex-1 xl:flex xl:flex-col xl:justify-center xl:pr-[100px] xl:pl-[50px]">
          <h2 className="text-[35px] mb-[20px]">{`I’m Calli - wife, mom to two little girls + one little pup.`}</h2>
          <h3 className="text-[15px] mb-[60px]">
            {`I love capturing photos of families because as a mom - I get that we aren’t in the photos enough.`}
          </h3>
          <p className="font-thin leading-8 mb-[60px]">
            {`My life currently revolves around my hilarious + beautiful little girls. My oldest daughter Mia, just turned 3 and my youngest, Harper is going on 2 this summer. In 2023, my husband + I decided it was time to take the leap and I quit my full-time tech support job in order to have more time with our girls and for growing my photography business in a new area. It has been a big adjustment but I am so glad we made this leap! Check out some of the other fun facts below to learn a little bit more about me!`}
          </p>
          <div>
            <Link href="/contact" legacyBehavior passHref>
              <a className="mb-[60px] border border-black py-[15px] text-[13px] tracking-[.35em] px-[30px]">
                {`LET'S CHAT!`}
              </a>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-[30px] mt-[60px] xl:mt-0">
        {/* <ol className="xl:flex">
          {facts?.map((fact, index) => {
            return (
              <li key={index} className="xl:px-[50px]">
                <p className="mb-[30px] font-thin">{`${
                  (index + 1).toString().length ? `0${index + 1}` : index + 1
                }.`}</p>
                <h2 className={`mb-[30px] text-[30px] ${lora.className}`}>{`Fact ${index + 1}`}</h2>
                <p className="font-thin leading-8 mb-[60px]">{fact}</p>
              </li>
            );
          })}
        </ol> */}
      </section>

      <section className="px-[30px] mt-[100px] mb-[60px] xl:w-full xl:px-[100px] xl:flex xl:flex-row-reverse xl:mt-[200px]">
        <div className="flex justify-center xl:flex-1">
          <Image
            src="/images/Family Gallery/happylittlefamilyinflorida.webp"
            height={684}
            width={456}
            className="object-cover"
            alt="Family of three bliss captured in the serene setting of Florida's nature with green grass and Spanish moss."
          />
        </div>
        <div className="flex justify-center xl:justify-normal mb-[15px] xl:flex-1 flex-col xl:items-left items-center xl:items-start">
          <h2 className="text-[40px] leading-1 my-[50px] xl:text-[60px]">{`While they are still little...`}</h2>
          <p className="font-thin mb-[15px]">{`Get ready to schedule your family's photo session + let's make some memories together!`}</p>

          <div className="xl:mt-[100px] mt-[60px] mb-[60px]">
            <Link href="/contact" legacyBehavior passHref>
              <a className="border border-black py-[15px] text-[13px] tracking-[.35em] px-[30px]">{`CONNECT WITH ME`}</a>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default AboutPage;
