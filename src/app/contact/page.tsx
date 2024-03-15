import Image from 'next/image';
import type { Metadata } from 'next';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

import { Lora } from 'next/font/google';
const lora = Lora({ subsets: ['latin'] });

import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer/Footer'));
import Header from '@/components/Header/Header';

import ContactForm from '@/components/Forms/ContactForm';

import 'react-toastify/dist/ReactToastify.css';
import Share from '@/components/Share/Share';

export const metadata: Metadata = {
  title: 'Contact Calli Wickes Photography',
  description:
    'Connect with Calli · calliwickesphotography@gmail.com · Tampa Family Photographer · Tampa Senior Photographer',
};

type dataStructure = {
  heroImage: {
    data: {
      attributes: {
        url: string;
        alternativeText: string;
        width: number;
        height: number;
      };
    };
  };
  heroTitle: string;
  heroSubtitle: string;
  formTitle: string;
  formParagraph: any;
  formImage: {
    data: {
      attributes: {
        url: string;
        alternativeText: string;
        width: number;
        height: number;
      };
    };
  };
  formNamePlaceholder: string;
  formEmailPlaceholder: string;
  formPhoneNumberPlaceholder: string;
  formMessagePlaceholder: string;
  formButtonText: string;
  responseTitle: string;
  responseParagraph: any;
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

async function getData() {
  try {
    const res = await fetch(`${process.env.STRAPI_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      body: JSON.stringify({
        query: `{
          contactPage {
            data {
              attributes {
                heroImage {
                  data {
                    attributes {
                      url
                      alternativeText
                      width
                      height
                    }
                  }
                }
                heroTitle
                heroSubtitle
                formTitle
                formParagraph
                formImage {
                  data {
                    attributes {
                      url
                      alternativeText
                      width
                      height
                    }
                  }
                }
                formNamePlaceholder
                formEmailPlaceholder
                formPhoneNumberPlaceholder
                formMessagePlaceholder
                formButtonText
                responseTitle
                responseParagraph
              }
            }
          }
        }
        `,
      }),
    });
    return res.json().then((data) => data.data.contactPage.data.attributes);
  } catch (error) {
    console.log('error', error);
  }
}

const ContactPage = async () => {
  const headerData = await getHeaderData();
  const data = await getData();

  return (
    <main>
      <Share />
      <Header isHome headerData={headerData} />
      <section
        id="kideatingfruit"
        className="pt-[15dvh] px-[30px] h-[100dvh] text-white mb-[30px] xl:flex xl:items-center"
      >
        <h2
          className={`${lora.className} text-[40px] leading-1 flex flex-col text-white pt-[60px] xl:text-[70px] xl:font-thin xl:pl-[100px] xl:flex-1 xl:pt-0 xl:pb-[60px]`}
        >
          {data.heroTitle}
        </h2>
        <p className="font-thin text-right pt-[200px] pb-[250px] xl:pr-[100px] xl:flex-1 xl:pt-[250px] xl:pb-[10px]">
          {data.heroSubtitle}
        </p>
      </section>

      <section className="px-[30px] mb-[60px] xl:pl-[100px] xl:pt-[100px]">
        <h1 className={`${lora.className} text-[45px] leading-1 mb-[30px]`}>{data.formTitle}</h1>
        <span className="font-thin whitespace-pre-line a-bold">
          <BlocksRenderer content={data.formParagraph} />
        </span>
      </section>

      <section className="px-[30px] text-black xl:pl-[100px] xl:flex">
        <div className="flex justify-center mb-[60px] xl:flex-1 xl:justify-start md:pr-[50px]">
          <div className="mt-[30px] h-[90dvw] w-[90dvw] lg:h-auto lg:w-auto overflow-hidden">
            <Image
              src="/images/Home Updated/TampaPhotographerPortrait.webp"
              alt="Tampa photographer in downtown portrait."
              height={840}
              width={560}
              className="object-cover mt-[-10dvw] xl:mt-[-100px]"
            />
          </div>
        </div>
        <ContactForm
          formButtonText={data.formButtonText}
          responseTitle={data.responseTitle}
          responseParagraph={data.responseParagraph}
        />
      </section>
      <Footer />
    </main>
  );
};

export default ContactPage;
