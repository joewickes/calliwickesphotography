import Link from 'next/link';
import type { Metadata } from 'next';

import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer/Footer'));
import Header from '@/components/Header/Header';

export const metadata: Metadata = {
  title: 'Form Submitted Successfully | Calli Wickes Photography',
  description:
    'Thank you for reaching out to Calli Wickes Photography! Your form has been successfully submitted. Our team will review your information and get back to you shortly. In the meantime, explore our portfolio and experience the artistry of Calli Wickes in capturing timeless moments. We look forward to the opportunity of working with you to create stunning visual stories.',
};

const Submitted = () => {
  return (
    <main>
      <Header />
      <h1>Submitted</h1>
      <Footer />
    </main>
  );
};

export default Submitted;
