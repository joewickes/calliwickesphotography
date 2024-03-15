import Link from 'next/link';
import type { Metadata } from 'next';

import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer/Footer'));
import Header from '@/components/Header/Header';
import Share from '@/components/Share/Share';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description:
    'Review the terms and conditions that govern your engagement with Calli Wickes Photography. Our comprehensive Terms and Conditions outline the agreements and expectations for using our photography services. From usage rights to payment policies, understand the terms that ensure a clear and fair collaboration. By choosing Calli Wickes Photography, you are entering into a partnership committed to professionalism, creativity, and mutual respect.',
};

async function getHeaderData() {
  try {
    const res = await fetch(`${process.env.URL}/api/header`, { method: 'POST' });
    return res.json().then((data) => data.data);
  } catch (error) {
    console.log('error', error);
  }
}

const TermsAndConditions = async () => {
  const headerData = await getHeaderData();

  return (
    <main>
      <Share />
      <Header headerData={headerData} />
      <section className="mt-[20dvh] px-[30px] xl:px-[100px] pb-[25px]">
        <div className="mb-[50px]">
          <h1 className="font-bold mb-[10px]">{`Terms & Conditions`}</h1>
          <p className="font-normal mt-[10px]">{`Last Updated: 1/25/2024`}</p>
        </div>
        <ol className="list-inside">
          <li className="font-semibold mb-[30px]">
            {`Acceptance of Terms`}
            <p className="font-normal mt-[10px]">
              {`Welcome to Calli Wickes Photography ("we," "our," or "us"). By accessing or using our website
              http://calliwickesphotography.com (the "Site"), you agree to comply with and be bound by the following
              terms and conditions (the "Terms"). If you do not agree to these Terms, please do not use our Site.`}
            </p>
          </li>
          <li className="font-semibold mb-[30px]">
            {`Use of the Site`}
            <p className="font-normal mt-[10px]">
              {`You agree to use the Site for lawful purposes only and in a manner consistent with all applicable laws and
              regulations.`}
            </p>
          </li>
          <li className="font-semibold mb-[30px]">
            {`Intellectual Property`}
            <p className="font-normal mt-[10px]">
              {`All content on this Site, including but not limited to text, images, graphics, logos, and software, is the
              property of Calli Wickes Photography and is protected by copyright and other intellectual property laws.`}
            </p>
          </li>
          <li className="font-semibold mb-[30px]">
            {`User Submissions`}
            <p className="font-normal mt-[10px]">
              {`By submitting content to our Site, you grant us a non-exclusive, royalty-free, perpetual, irrevocable, and
              fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works
              from, distribute, and display such content throughout the world in any media.`}
            </p>
          </li>
          <li className="font-semibold mb-[30px]">
            {`Limitation of Liability`}
            <p className="font-normal mt-[10px]">
              {`We shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising
              out of your access to or use of the Site.`}
            </p>
          </li>
          <li className="font-semibold mb-[30px]">
            {`Privacy`}
            <p className="font-normal mt-[10px]">
              {`Your use of the Site is also governed by our Privacy Policy, which can be found here.`}
            </p>
          </li>
          <li className="font-semibold mb-[30px]">
            {`Third-Party Links`}
            <p className="font-normal mt-[10px]">
              {`The Site may contain links to third-party websites that are not owned or controlled by Calli Wickes
              Photography. We have no control over, and assume no responsibility for, the content, privacy policies, or
              practices of any third-party websites.`}
            </p>
          </li>
          <li className="font-semibold mb-[30px]">
            {`Changes to Terms & Conditions`}
            <p className="font-normal mt-[10px]">
              {`We reserve the right to modify or replace these Terms at any time. Changes will be effective immediately
              upon posting. It is your responsibility to review these Terms periodically for changes.`}
            </p>
          </li>
          <li className="font-semibold mb-[30px]">
            {`Governing Law`}
            <p className="font-normal mt-[10px]">
              {`These Terms are governed by and construed in accordance with the laws of the state of Florida.`}
            </p>
          </li>
          <li className="font-semibold mb-[30px]">
            {`Contact Us`}
            <p className="font-normal mt-[10px]">
              {`If you have any questions regarding these Terms & Conditions, you may contact us at
              calliwickesphotography@gmail.com.`}
            </p>
          </li>
        </ol>
      </section>
      <Footer />
    </main>
  );
};

export default TermsAndConditions;
