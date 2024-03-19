import Link from 'next/link';

import { Lora } from 'next/font/google';
const lora = Lora({ subsets: ['latin'] });

import NewsletterForm from '@/components/Forms/NewsletterForm';
import TopArrow from '../TopArrow/TopArrow';
import FooterSocials from './FooterSocials';
import FooterContact from './FooterContact';

async function getData() {
  try {
    const res = await fetch(`${process.env.STRAPI_URL}`, {
      method: 'POST',
      next: { revalidate: 60 },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      body: JSON.stringify({
        query: `{
          footer {
            data {
              attributes {
                cwpTitle
                cwpParagraph
                cwpEmail
                cwpPhoneNumber
                newsletterTitle
                newsletterParagraph
                newsletterFormName
                newsletterFormEmail
                newsletterFacebookLink
                newsletterInstagramLink
                newsletterPinterestLink
                newsletterYelpLink
                directoryListingsPreamble
                directory_listings {
                  data {
                    attributes {
                      directoryListingTitle
                      directoryListingLink
                    }
                  }
                }
              }
            }
          }
        }`,
      }),
    });
    return res.json().then((data) => data.data.footer.data.attributes);
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
              <h3 className={`${lora.className} text-[35px] mb-[5px]`}>{data.newsletterTitle}</h3>
              <p className="mb-[20px] font-thin">{data.newsletterParagraph}</p>
            </div>
            <NewsletterForm />
          </div>
          <div className="flex flex-col">
            <FooterSocials
              facebookLink={data.newsletterFacebookLink}
              instagramLink={data.newsletterInstagramLink}
              pinterestLink={data.newsletterPinterestLink}
              yelpLink={data.newsletterYelpLink}
            />
            <div className="xl:flex-1 w-full flex-wrap font-thin flex mt-[20px] xl:mt-[50px] items-start text-center justify-start">
              <div className="flex flex-col">
                <p className="text-left pr-[5px] min-w-[75px] sm:min-w-auto">{data.directoryListingsPreamble}</p>
                <ul className="flex flex-wrap">
                  {data.directory_listings.data.map((listing: any, idx: number) => {
                    return (
                      <li className="flex flex-nowrap" key={idx}>
                        <a className="underline text-nowrap" href={listing.attributes.directoryListingLink}>
                          {listing.attributes.directoryListingTitle}
                        </a>
                        {idx === data.directory_listings.data.length - 1 ? '' : <p className="px-[10px]">{`|`}</p>}
                      </li>
                    );
                  })}
                </ul>
              </div>
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
