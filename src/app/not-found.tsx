import dynamic from 'next/dynamic';
import Link from 'next/link';
const Footer = dynamic(() => import('@/components/Footer/Footer'));
import Header from '@/components/Header/Header';

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

const NotFound = async () => {
  const headerData = await getHeaderData();

  return (
    <main>
      <Header headerData={headerData} />
      <section className="mt-[20dvh] px-[30px] xl:px-[100px] h-[100dvh] flex flex-col items-center justify-start">
        <h1 className="mt-[50px] xl:mt-[100px] text-[40px] leading-1 mb-[30px]">{`Uh-oh! This page doesn't exist.`}</h1>
        <Link href="/" passHref legacyBehavior>
          <a
            aria-label="HomePage"
            className="mt-[50px] z-10  mb-[60px] border border-black py-[15px] text-[13px] tracking-[.35em] px-[30px] text-black"
          >
            {`Return to Site`}
          </a>
        </Link>
      </section>
      <Footer />
    </main>
  );
};

export default NotFound;
