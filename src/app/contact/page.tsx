import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';

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

const ContactPage = () => {
  return (
    <main>
      <Share />
      <Header isHome />
      <section
        id="kideatingfruit"
        className="pt-[15dvh] px-[30px] h-[100dvh] text-white mb-[30px] xl:flex xl:items-center"
      >
        <h2
          className={`${lora.className} text-[40px] leading-1 flex flex-col text-white pt-[60px] xl:text-[70px] xl:font-thin xl:pl-[100px] xl:flex-1 xl:pt-0 xl:pb-[60px]`}
        >
          {`Connect with Calli`}
        </h2>
        <p className="font-thin text-right pt-[200px] pb-[250px] xl:pr-[100px] xl:flex-1 xl:pt-[250px] xl:pb-[10px]">
          {`family + senior photographer`}
        </p>
      </section>

      <section className="px-[30px] mb-[60px] xl:pl-[100px] xl:pt-[100px]">
        <h1 className={`${lora.className} text-[45px] leading-1 mb-[30px]`}>{`Let's chat!`}</h1>
        <p className="font-thin whitespace-pre-line">
          {`I can’t wait to hear from you + help capture your story.\n\n
  I am so excited to get to know you + your family! Fill out the contact form and I will reach out withing 24-48 hours. If you prefer to reach out directly, you can email me at calliwickesphotography@gmail.com. While I respond to your inquiry, feel free to check out my socials:`}{' '}
          <Link passHref legacyBehavior href="https://www.facebook.com/CalliWickesPhotography/">
            <a aria-label="Facebook" className="font-semibold">
              {`Facebook`}
            </a>
          </Link>{' '}
          {`+`}{' '}
          <Link passHref legacyBehavior href="https://www.instagram.com/calliwickesphotography/">
            <a aria-label="Instagram" className="font-semibold">
              {`Instagram`}
            </a>
          </Link>
          {``}
          {`\n\nI am based in Tampa, FL, and I proudly serve the Tampa Bay Area, including Clearwater + Wesley Chapel.`}
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
