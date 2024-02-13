import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';

import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer/Footer'));
import Header from '@/components/Header/Header';

import ContactForm from '@/components/Forms/ContactForm';

import 'react-toastify/dist/ReactToastify.css';
import Share from '@/components/Share/Share';

export const metadata: Metadata = {
  title: 'Contact Calli Wickes Photography | Get in Touch for Professional Photography Services',
  description:
    'Contact Calli Wickes Photography to inquire about our professional photography services. Reach out for booking information, collaboration opportunities, or any inquiries you may have. We are here to capture your special moments with expertise and creativity. Use the provided contact form, email, or phone to connect with Calli Wickes, your dedicated photographer for memorable visual experiences.',
};

const ContactPage = () => {
  return (
    <main>
      <Share />
      <Header isHome />
      <section
        id="kideatingfruit"
        className="pt-[15dvh] px-[30px] h-[100dvh] text-white mb-[30px] xl:flex xl:items-center"
      >
        <h2 className="text-[40px] leading-1 flex flex-col text-white pt-[60px] xl:text-[70px] xl:font-thin xl:pl-[100px] xl:flex-1 xl:pt-0 xl:pb-[60px]">
          {`Start saving these moments`}
        </h2>
        <p className="font-thin text-right pt-[200px] pb-[250px] xl:pr-[100px] xl:flex-1 xl:pt-[250px] xl:pb-[10px]">
          {`Tampa | family + senior photography`}
        </p>
      </section>

      <section className="px-[30px] mb-[60px] xl:pl-[100px] xl:pt-[100px]">
        <h1 className="text-[45px] leading-1 mb-[30px]">{`Let's get in touch!`}</h1>
        <p className="font-thin whitespace-pre-line">
          {`I can't wait to connect with you!\n\n
  Thanks for exploring my site. I’m excited to get to know you and possibly capture some incredible images you'll treasure forever! Reach out using the form below or shoot me an email at calliwickesphotography@gmail.com for any questions or to schedule a session! While I respond to your inquiry, feel free to browse my latest work on`}{' '}
          <Link passHref legacyBehavior href="https://www.facebook.com/CalliWickesPhotography/">
            <a aria-label="Facebook" className="font-semibold">
              Facebook
            </a>
          </Link>{' '}
          {`and`}{' '}
          <Link passHref legacyBehavior href="https://www.instagram.com/calliwickesphotography/">
            <a aria-label="Instagram" className="font-semibold">
              Instagram
            </a>
          </Link>
          {`!`}
          {`\n\nI am based in Tampa, FL, and I proudly serve the Tampa Bay Area, including Clearwater and St Petersburg.`}
        </p>
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
        <ContactForm />
      </section>
      <Footer />
    </main>
  );
};

export default ContactPage;
