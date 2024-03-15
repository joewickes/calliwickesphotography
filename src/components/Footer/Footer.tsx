import Link from 'next/link';

import { Lora } from 'next/font/google';
const lora = Lora({ subsets: ['latin'] });

import NewsletterForm from '@/components/Forms/NewsletterForm';
import TopArrow from '../TopArrow/TopArrow';
import FooterSocials from './FooterSocials';
import FooterContact from './FooterContact';

async function getData() {
  try {
    const res = await fetch(`${process.env.URL}/api/footer`, { method: 'POST' });
    return res.json().then((data) => data.data);
  } catch (error) {
    console.log('error', error);
  }
}

const Footer = async () => {
  const data = await getData();

  return (
    <footer className="flex flex-col justify-center items-center mt-[60px] w-full ">
      <div className="my-[30px] px-[30px]">
        <TopArrow />
      </div>
      <div className="flex flex-col lg:flex-row w-full">
        <section className="border-[#faf9f7] border border-x-0 xl:border-r-1 py-[20px] px-[30px] lg:flex-1 lg:pl-[100px] flex flex-col justify-normal lg:justify-center">
          <div>
            <p className="text-[25px] mb-[25px]">{data.cwpTitle}</p>
          </div>
          <p className="font-thin">{data.cwpParagraph}</p>
          <FooterContact cwpEmail={data.cwpEmail} cwpPhoneNumber={data.cwpPhoneNumber} />
        </section>

        <section className="border-[#faf9f7] border border-x-0 border-t-0 py-[20px] bg-[#faf9f7] px-[30px] lg:flex-1">
          <div>
            <div>
              <h3 className={`${lora.className} text-[35px] mb-[5px]`}>{`BECOME A VIP`}</h3>
              <p className="mb-[20px] font-thin">{`Sign up for our email newsletter`}</p>
            </div>
            <NewsletterForm />
          </div>
          <div className="flex flex-col">
            <FooterSocials />
            <div className="xl:flex-1 w-full flex-wrap font-thin flex mt-[20px] xl:mt-[50px] items-start text-center justify-start">
              <p className="text-left pr-[5px]">{`We are listed in -`}</p>
              <a
                className="underline"
                href="https://www.photographerlistings.org/United-States/Florida/C5-84-1-0.htm"
              >{`Florida Photographer Listings`}</a>
              <p className="px-[10px]">{`|`}</p>
              <a
                className="underline"
                href="https://www.listyourservices.com/Design-related/Photography/C3-170-1-0.htm "
              >{`List Your Services`}</a>
              <p className="px-[10px]">{`|`}</p>
              <a
                className="underline"
                href="https://www.b2blistings.org/Design-and-Print/Photography/C4-35-1-0.htm "
              >{`B2B Listings`}</a>
              <p className="px-[10px]">{`|`}</p>
              <a
                className="underline"
                href="https://www.creativelistings.org/Photography/C42-1-0.htm "
              >{`Creative Listings`}</a>
              <p className="px-[10px]">{`|`}</p>
              <a className="underline" href="https://www.uslistings.org/USA/Florida/C1-9-1-0.htm ">{`US Listings`}</a>
            </div>
          </div>
        </section>
      </div>

      <section className="xl:py-[20px] w-full ">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full">
            <div className="xl:ml-[100px] xl:flex-1 w-full flex flex-col xl:flex-row xl:justify-start border-[#faf9f7] items-start text-center justify-center border border-x-0 border-t-0 xl:border-none py-[20px] px-[30px]">
              <Link passHref legacyBehavior href="/privacypolicy">
                <a className="underline font-thin mr-[35px]">{`Privacy Policy`}</a>
              </Link>
              <Link passHref legacyBehavior href="/termsandconditions">
                <a className="underline font-thin ">{`Terms and Conditions`}</a>
              </Link>
            </div>
            <div className="xl:flex-1 xl:justify-end py-[20px] w-full xl:mr-[100px] px-[30px]">
              <p className=" w-full font-thin text-left xl:text-right">{`© 2024 Calli Wickes Photography`}</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
