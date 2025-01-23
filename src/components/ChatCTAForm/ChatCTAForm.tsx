import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import ContactForm from '@/components/Forms/ContactForm';

import { Lora } from 'next/font/google';
const lora = Lora({ subsets: ['latin'] });

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
          contactPage {
            data {
              attributes {
                formTitle
                formParagraph
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

export default async function ChatCTAForm() {
  const data = await getData();

  return (
    <section className="px-[30px] xl:px-[100px] text-black xl:pl-[100px] xl:flex">
      <div className="mb-[60px] xl:px-[100px] xl:pt-[100px] mt-[50px] xl:mt-0 w-full">
        <p className={`${lora.className} text-[45px] leading-1 mb-[30px]`}>{data.formTitle}</p>
        <span className="font-thin whitespace-pre-line a-bold ">
          <BlocksRenderer content={data.formParagraph} />
        </span>
      </div>
      <div className="w-full">
        <ContactForm
          formButtonText={data.formButtonText}
          responseTitle={data.responseTitle}
          responseParagraph={data.responseParagraph}
        />
      </div>
    </section>
  );
}
