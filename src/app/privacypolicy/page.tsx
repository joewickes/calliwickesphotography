import Link from 'next/link';
import type { Metadata } from 'next';

import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer/Footer'));
import Header from '@/components/Header/Header';
import Share from '@/components/Share/Share';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Review the Privacy Policy that govern your engagement with Calli Wickes Photography. Our comprehensive Privacy Policy outlines the agreements and expectations for using our photography services. From usage rights to payment policies, understand the terms that ensure a clear and fair collaboration. By choosing Calli Wickes Photography, you are entering into a partnership committed to professionalism, creativity, and mutual respect.',
};

const PrivacyPolicy = () => {
  return (
    <main>
      <Share />
      <Header />
      <section className="mt-[20dvh] px-[30px] xl:px-[100px]">
        <div className="mb-[50px]">
          <h1 className="font-bold mb-[10px]">{`Privacy Policy`}</h1>
          <p>{`Last Updated: 1/25/2024`}</p>
        </div>

        <div className="mb-[50px]">
          <h2 className="font-semibold mb-[10px]">{`Introduction`}</h2>
          <p>
            {`Welcome to Calli Wickes Photography ("we," "our," or "us"). We are committed to protecting your privacy and
            maintaining the security of your personal information. This Privacy Policy explains how we collect, use, and
            disclose the personal information you may provide while using our website http://calliwickesphotography.com
            (the "Site").`}
          </p>
          <p>
            {`By accessing or using our Site, you agree to the terms of this Privacy Policy. If you do not agree to these
            terms, please do not use our Site.`}
          </p>
        </div>
        <div className="mb-[50px]">
          <h2 className="font-semibold mb-[10px]">{`Information We Collect`}</h2>
          <ol className="list-inside list-decimal">
            <li className="mb-[15px]">
              {`Personal Information: We may collect personally identifiable information, such as your name, email
              address, phone number, and postal address when you voluntarily submit it through our contact forms or
              other communication methods.`}
            </li>
            <li className="mb-[15px]">
              {`Non-Personal Information: We may also collect non-personal information, such as browser type, IP address,
              and device information, to enhance your experience on our Site and for analytics purposes.`}
            </li>
          </ol>
        </div>
        <div className="mb-[50px]">
          <h2 className="font-semibold mb-[10px]">{`How We Use Your Information`}</h2>
          <p className="mb-[10px]">{`We may use the information we collect for the following purposes:`}</p>
          <ul className="list-inside list-disc">
            <li className="mb-[15px]">{`To respond to your inquiries and provide the services you request.`}</li>
            <li className="mb-[15px]">
              {`To send periodic emails regarding our services, promotions, or other relevant information.`}
            </li>
            <li className="mb-[15px]">{`To improve our website and services based on your feedback.`}</li>
          </ul>
        </div>
        <div className="mb-[50px]">
          <h2 className="font-semibold mb-[10px]">{`Information Sharing`}</h2>
          <p>
            {`We do not sell, trade, or otherwise transfer your personally identifiable information to third parties
            unless we provide you with advance notice. This does not include trusted third parties who assist us in
            operating our website, conducting our business, or servicing you, as long as those parties agree to keep
            this information confidential.`}
          </p>
        </div>
        <div className="mb-[50px]">
          <h2 className="font-semibold mb-[10px]">{`Data Security`}</h2>
          <p>
            {`We implement a variety of security measures to maintain the safety of your personal information when you
            enter, submit, or access your personal information.`}
          </p>
        </div>
        <div className="mb-[50px]">
          <h2 className="font-semibold mb-[10px]">{`Your Rights`}</h2>
          <p className="mb-[10px]">{`You have the right to:`}</p>
          <ul className="list-inside list-disc">
            <li className="mb-[15px]">{`Access the personal information we hold about you.`}</li>
            <li className="mb-[15px]">{`Correct any inaccuracies in your personal information.`}</li>
            <li className="mb-[15px]">{`Request the deletion of your personal information.`}</li>
          </ul>
        </div>
        <div className="mb-[50px]">
          <h2 className="font-semibold mb-[10px]">{`Changes to This Privacy Policy`}</h2>
          <p>
            {`We reserve the right to modify this Privacy Policy at any time. Please review it frequently. Changes and
            clarifications will take effect immediately upon posting on the website.`}
          </p>
        </div>
        <div className="mb-[50px]">
          <h2 className="font-semibold mb-[10px]">{`Contact Us`}</h2>
          <p>
            {`If you have any questions regarding this Privacy Policy, you may contact us at
            calliwickesphotography@gmail.com.`}
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default PrivacyPolicy;
