import Image from 'next/image';
import type { Metadata } from 'next';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

import { Lora } from 'next/font/google';
const lora = Lora({ subsets: ['latin'] });

import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer/Footer'));
import Header from '@/components/Header/Header';

import ContactForm from '@/components/Forms/ContactForm';

import Share from '@/components/Share/Share';

import { getHeaderData } from '@/lib/queries/header';
import { getContactData } from '@/lib/queries/contact';

export const metadata: Metadata = {
  alternates: { canonical: '/contact' },
  title: 'Contact Calli Wickes Photography',
  description: 'Connect with Calli · 813-406-0558 · calliwickesphotography@gmail.com',
};

const ContactPage = async () => {
  const [headerData, data] = await Promise.all([getHeaderData(), getContactData()]);

  return (
    <main>
      <Share />
      <Header headerData={headerData} />

      <section className="flex flex-col items-center justify-center overflow-hidden">
        <div className="sm:h-[500px] w-[140dvw] xl:w-full overflow-hidden flex justify-center items-start">
          <Image
            src="/images/Contact/Familyoffivephotosittingonrocks.webp"
            priority
            alt="Family of five sitting on rocks"
            className="object-cover sm:mt-[-80px] md:mt-[-180px] lg:mt-[-280px] xl:mt-[-250px] mt-0"
            height={1152}
            width={1728}
          />
        </div>
        <div className="px-[30px] mb-[60px] xl:pl-[100px] xl:pt-[100px] mt-[50px] xl:mt-0">
          <h1 className={`${lora.className} text-[45px] leading-1 mb-[30px]`}>{data.formTitle}</h1>
          <span className="font-thin whitespace-pre-line a-bold">
            <BlocksRenderer content={data.formParagraph} />
          </span>
        </div>
      </section>

      <section className="px-[30px] text-black xl:pl-[100px] xl:flex">
        <div className="flex justify-center mb-[60px] xl:flex-1 xl:justify-start md:pr-[50px]">
          <div className="mt-[30px] h-[90dvw] w-[90dvw] sm:h-[50dvw] sm:w-[50dvw] sm: xl:h-auto xl:w-auto overflow-hidden">
            <Image
              src={data.formImage.data!.attributes.url}
              alt={data.formImage.data!.attributes.alternativeText}
              height={data.formImage.data!.attributes.height}
              width={data.formImage.data!.attributes.width}
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
