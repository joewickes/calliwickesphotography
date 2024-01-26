import dynamic from 'next/dynamic';
import Link from 'next/link';
const Footer = dynamic(() => import('@/components/Footer/Footer'));
import Header from '@/components/Header/Header';

const NotFound = () => {
  return (
    <main>
      <Header />
      <section className="mt-[20dvh] px-[30px] md:px-[100px] h-[100dvh] flex flex-col items-center justify-start">
        <h1 className="mt-[50px] md:mt-[100px] text-[40px] leading-1 mb-[30px]">{`Uh-oh! This page doesn't exist.`}</h1>
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
