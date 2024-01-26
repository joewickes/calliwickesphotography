import Link from 'next/link';
import type { Metadata } from 'next';

import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer/Footer'));
import Header from '@/components/Header/Header';

export const metadata: Metadata = {
  title: 'Your Privacy Matters | Calli Wickes Photography Privacy Policy',
  description:
    'Explore the commitment to privacy at Calli Wickes Photography through our comprehensive Privacy Policy. Learn how we handle and protect your personal information, ensuring a secure and transparent experience. Our policy covers data collection, usage, and the measures taken to safeguard your privacy. Trust Calli Wickes Photography to prioritize the confidentiality and security of your information while providing exceptional photography services.',
};

const TermsAndConditions = () => {
  return (
    <main>
      <Header />
      <h1>Terms and Conditions</h1>
      <Footer />
    </main>
  );
};

export default TermsAndConditions;
