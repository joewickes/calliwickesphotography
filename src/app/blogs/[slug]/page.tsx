import Share from '@/components/Share/Share';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';
import Link from 'next/link';

import { Lora } from 'next/font/google';
const lora = Lora({ subsets: ['latin'] });

export async function generateStaticParams() {
  // GET BLOGS
  // const blogs = await fetch(`${process.env.URL}/blogs`).then((res) => res.json());
  return [{ slug: '1' }].map((blog: any) => ({
    slug: blog.slug,
  }));
}

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
                social_networks {
                  data {
                    attributes {
                      socialLink
                    }
                  }
                }
                menu_items {
                  data {
                    attributes {
                      itemName
                      link
                    }
                  }
                }
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
        query: `
        {
              homePage {
                data {
                  attributes {
                    heroSubtitle
                    heroTitle
                    heroSubHeading
                    aboutMePhotoSidebar
                    aboutMeSubtitle
                    aboutMeTitle
                    aboutMeParagraph
                    aboutMeButtonText
                    aboutMeButtonLink
                    aboutMeImage {
                      data {
                        attributes {
                          url
                          alternativeText
                          width
                          height
                        }
                      }
                    }
                    preExperienceTitle
                    preExperienceParagraph
                    preExperienceImage {
                      data {
                        attributes {
                          url
                          alternativeText
                          width
                          height
                        }
                      }
                    }
                    preExperiencePhotoSidebar
                    experienceTitle
                    home_experience_timeline_items {
                      data {
                        attributes {
                          homeExperienceTimelineImage {
                            data {
                              attributes {
                                url
                                alternativeText
                                width
                                height
                              }
                            }
                          }
                          homeExperienceTimelineTitle
                          homeExperienceTimelineParagraph
                        }
                      }
                    }
                    newsletterSubtitle
                    newsletterTitle
                    newsletterParagraph
                    newletterFormName
                    newsletterFormEmail
                    home_carousel_items {
                      data {
                        attributes {
                          homeCarouselImage {
                            data {
                              attributes {
                                url
                                alternativeText
                                width
                                height
                              }
                            }
                          }
                        }
                      }
                    }
                    homeFaqTitle
                    home_faqs {
                      data {
                        attributes {
                          homeFaqQuestion
                          homeFaqAnswer
                        }
                      }
                    }
                    homeContactTitle
                    homeContactParagraph
                    homeContactButtonText
                    homeContactButtonLink
                    homeContactPhoto {
                      data {
                        attributes {
                          url
                          alternativeText
                          width
                          height
                        }
                      }
                    }
                    homeContactPhotoSidebar
                  }
                }
              }
            
      }
        `,
      }),
    });
    return res.json().then((data) => data.data.homePage.data.attributes);
  } catch (error) {
    console.log('error', error);
  }
}

const BlogPage = async ({ params }: any) => {
  const { slug } = params;
  const headerData = await getHeaderData();
  // const data = await getData();

  return (
    <>
      <main>
        <Share />
        <Header headerData={headerData} />
        <div className="flex flex-col xl:flex-row lg:mt-[18dvh] mt-[12dvh] px-[30px] sm:px-[75px] min-h-[90dvh]">
          {/* Left/top with blog content */}
          <section
            id="blog-content"
            className="flex xl:w-[66.6dvw] flex-col pr-0 xl:pr-[25px] xl:border-r-[1px] xl:border-[#333333]"
          >
            <h1 className="text-nowrap text-left text-[12px] font-thin mt-[50px] mb-[20px] tracking-wide z-10 mt-30px] ">
              {`text goes here`}
            </h1>
            <h1
              className={`${lora.className} text-left text-[35px] xl:text-[55px] flex flex-col mb-[20px] z-10 tracking-wide `}
            >
              {`Text goes here`}
            </h1>
            <div className="font-thin leading-8 mb-[50px]">
              <p>{`Single-origin coffee 3 wolf moon offal deep v cillum biodiesel cornhole dolore pariatur blackbird spyplane chicharrones eu. Paleo hammock banjo ugh dolor williamsburg prism same green juice letterpress do affogato twee. Franzen af in est. Minim tousled cold-pressed velit marxism proident.`}</p>
              <p>{`Occupy bicycle rights bushwick pok pok duis yr swag magna cronut squid ut ramps fit vape put a bird on it. Banjo ut commodo gorpcore yuccie officia deep v. Esse artisan craft beer, JOMO typewriter la croix ugh umami ex in wolf yr helvetica snackwave readymade. Squid do offal mollit. Put a bird on it humblebrag neutral milk hotel cardigan excepteur nostrud. Af activated charcoal laborum deserunt unicorn.`}</p>
            </div>
          </section>

          {/* Right/bottom meta section */}
          <section id="blog-meta" className="xl:w-[33.3dvw] pl-0 xl:pl-[25px] flex flex-col">
            <div>
              {/* <Image src="#" alt="Placeholder" width={100} height={100} /> */}
              <h2 className="text-[25px] mb-[25px] font-semibold">{`Hi! I'm Calli Wickes!`}</h2>
              <h3 className="mb-[25px]">{`I'm a family + ...`}</h3>
              <p className="font-thin leading-8">{`I'm baby street art taiyaki vexillologist, big mood edison bulb polaroid jean shorts kombucha direct trade 8-bit banjo kitsch whatever semiotics schlitz. +1 literally pork belly, yr deep v unicorn offal commodo duis deserunt. Proident ullamco roof party raw denim. Asymmetrical try-hard drinking vinegar etsy hoodie vexillologist. Vexillologist sus food truck church-key cray labore cupping hammock chambray seitan messenger bag thundercats beard.`}</p>
            </div>
            <div className="pb-[0px] pt-[50px]">
              <Link href={'#'} legacyBehavior passHref>
                <a className="mb-[100px] border border-black py-[15px] text-[13px] tracking-[.35em] px-[30px] flex sm:inline justify-center text-center">
                  {`Let's Connect!`}
                </a>
              </Link>
            </div>
            <div className="sm:mt-[50px] sm:pt-[25px] xl:border-t-[1px] xl:border-[#333333]">
              <h2 className="text-[25px] mb-[25px] font-semibold">{`Popular Posts`}</h2>
              <div className="flex flex-col">
                {/* Filter by most recent 2 that are not current (ref slug id) */}
                {[
                  { text: 'text1', link: '#' },
                  { text: 'text2', link: '#' },
                ].map((item: any, idx: number) => {
                  return (
                    <Link key={idx} href={item.link} legacyBehavior passHref>
                      <a className="mb-[10px] underline">{item.text}</a>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default BlogPage;
