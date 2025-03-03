import Link from 'next/link';

import { Lora } from 'next/font/google';
const lora = Lora({ subsets: ['latin'] });

import NewsletterForm from '@/components/Forms/NewsletterForm';
import TopArrow from '../TopArrow/TopArrow';
import FooterSocials from './FooterSocials';
import FooterContact from './FooterContact';
import FooterDirectory from './FooterDirectory';

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
                newsletterLinkedInLink
                newsletterYouTubeLink
                newsletterSpotifyLink
                newsletterApplePodcastsLink
                directoryListingsPreamble
                directory_listings {
                  data {
                    attributes {
                      directoryListingTitle
                      directoryListingLink
                    }
                  }
                }
                location_home_pages (pagination: {limit:50}) {
                  data {
                    attributes {
                      location
                      urlSlug
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

const Footer = async ({ showServices = true }: { showServices?: boolean }) => {
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

          {/* Locations served section */}
          {showServices ? (
            <div className="mt-[50px]">
              <p className="text-left pr-[5px] min-w-[75px] sm:min-w-auto font-thin">{`Services + Locations`}</p>
              <ul className="w-full flex flex-wrap mt-[10px]">
                {data.location_home_pages.data.map((location: any, idx: number) => {
                  return (
                    <li key={idx} className="flex flex-row font-thin text-[14px] ">
                      <Link
                        href={`/${location.attributes.urlSlug}`}
                        className="underline text-nowrap min-h-[24px] min-w-[24px]"
                      >{`${location.attributes.location}`}</Link>
                      {idx === data.location_home_pages.data.length - 1 ? '' : <p className="px-[10px]">{`|`}</p>}
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}
        </section>

        <section className="border-[#faf9f7] border border-x-0 border-t-0 py-[20px] bg-[#faf9f7] px-[30px] lg:flex-1">
          <div>
            <div>
              <p className={`${lora.className} text-[35px] mb-[5px]`}>{data.newsletterTitle}</p>
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
              linkedInLink={data.newsletterLinkedInLink}
              youtubeLink={data.newsletterYouTubeLink}
              spotifyLink={data.newsletterSpotifyLink}
              applePodcastsLink={data.newsletterApplePodcastsLink}
            />
            <FooterDirectory
              directoryListingsPreamble={data.directoryListingsPreamble}
              directoryItems={data.directory_listings.data}
            />
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
