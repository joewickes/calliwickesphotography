import Image from 'next/image';
import type { Metadata } from 'next';

import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer/Footer'));
import Header from '@/components/Header/Header';
import { Slide, ToastContainer, toast } from 'react-toastify';
import ContactForm from '@/app/contact/ContactForm';

import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: 'Contact Calli Wickes Photography | Get in Touch for Professional Photography Services',
  description:
    'Contact Calli Wickes Photography to inquire about my professional photography services. Reach out for booking information, collaboration opportunities, or any inquiries you may have. We are here to capture your special moments with expertise and creativity. Use the provided contact form, email, or phone to connect with Calli Wickes, your dedicated photographer for memorable visual experiences.',
};

const ContactPage = () => {
  const contactBlurb = `I can't wait to connect with you!\n\n
  Thanks for exploring my site. I’m excited to get to know you and possibly capture some incredible images you'll treasure forever! Reach out using the form below or shoot me an email at calliwickesphotography@gmail.com for any questions or to schedule a session! While I respond to your inquiry, feel free to browse my latest work on Facebook and Instagram!\n\n
  I am based in Tampa, FL, and I proudly serve the Tampa Bay Area, including Clearwater and St Petersburg.`;

  const setToast = async (message: string) => {
    'use server';
    toast.info(message);
  };

  return (
    <main>
      <ToastContainer position="top-right" closeOnClick autoClose={5000} pauseOnHover transition={Slide} />
      <Header isHome />
      <section
        id="kideatingfruit"
        className="pt-[15dvh] px-[30px] h-[100dvh] text-white mb-[30px] md:flex md:items-center"
      >
        <h2 className="text-[40px] leading-1 flex flex-col text-white pt-[60px] md:text-[70px] md:font-thin md:pl-[100px] md:flex-1 md:pt-0 md:pb-[60px]">
          {`Start saving these moments`}
        </h2>
        <p className="font-thin text-right pt-[200px] pb-[250px] md:pr-[100px] md:flex-1 md:pt-[250px] md:pb-[10px]">
          {`Tampa | family + senior photography`}
        </p>
      </section>

      <section className="px-[30px] mb-[60px] md:pl-[100px] md:pt-[100px]">
        <h1 className="text-[45px] leading-1 mb-[30px]">{`Let's get in touch!`}</h1>
        <p className="font-thin whitespace-pre-line">{contactBlurb}</p>
      </section>

      <section className="px-[30px] text-black md:pl-[100px] md:flex">
        <div className="flex justify-center mb-[60px] md:flex-1 md:justify-start">
          <div className="mt-[30px] h-[90dvw] w-[90dvw] md:h-auto md:w-auto overflow-hidden">
            <Image
              src="/images/Home/tampaphotographerportrait.webp"
              alt="Tampa photographer in downtown portrait."
              height={840}
              width={560}
              className="object-cover mt-[-10dvw] md:mt-[-100px]"
            />
          </div>
        </div>
        <ContactForm setToast={setToast} />
      </section>
      <Footer />
    </main>
  );
};

export default ContactPage;
