'use client';

import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import Share from '@/components/Share/Share';
import Header from '@/components/Header/Header';
import Carousel from '@/components/Carousels/ImageCarousel';
import FAQs from '@/components/FAQs/FAQs';
import NewsletterForm from '@/components/Forms/NewsletterForm';
import Reviews from '@/components/Reviews/Reviews';

const Footer = dynamic(() => import('@/components/Footer/Footer'));

export default function Home() {
  const faqs = [
    {
      question: 'This is my first photoshoot, what should I expect?',
      answer:
        "We'll meet up and get to know each other a bit as I capture some photos of you + your family. I'll direct you when you aren't sure what to do, where to put your hands, or where to look! It's a casual process where I want you to feel as comfortable as possible!",
    },
    {
      question: 'What should I wear?',
      answer:
        'Pinterest has some great ideas if you are needing inspiration + you are more than welcome to send me a pic of your ideas for me to help. The general rule is to have all of your outfits have a little variety: one wearing a solid shirt, one wearing a pattern, a dress, one with a jacket. A little variety goes a long way!',
    },
    {
      question: 'How many pictures will I receive?',
      answer:
        "I will take lots of photos while we are together. Then I'll sort through them all to pick out the best of the best! The amount various on the type of session booked (mini, standard, extended). I'll edit those + upload them to be delivered to you via online gallery.",
    },
    {
      question: 'Are you available outside of Tampa?',
      answer:
        'I am located just north of Tampa. Typically my sessions are within 1 hour of downtown Tampa. If you are interesting in a session that involves further travel, we can discuss what that would look like!',
    },
    {
      question: 'How do I schedule a session?',
      answer:
        "You can contact me via phone, email or my contact page on my website. You can also find me on Facebook and Instagram! But it's hard to keep up with all those different sources so I highly recommend using my number or email for a quicker response!",
    },
  ];

  return (
    <main>
      <Share />
      <div id="familyofthree">
        <Header isHome />

        {/* Hero Section */}
        <section id="home" className="h-dvh w-dvw flex flex-col items-center justify-center pt-[100px]">
          <h1 className="text-nowrap text-center xl:text-left text-[12px] mb-[20px] tracking-wide text-white z-10 xl:w-[150px] xl:self-start xl:ml-[125px] mt-30px] xl:mt-[150px]">
            {`TAMPA FAMILY PHOTOGRAPHER`}
          </h1>
          <p className="text-center text-[45px] xl:text-[84px] leading-[3.5rem] xl:leading-[5.5rem] flex flex-col mb-[80px] xl:mt-[0px] text-white z-10 tracking-wide xl:self-start xl:ml-[100px] xl:flex xl:flex-row xl:flex-wrap xl:text-left">
            <span>{`Capture those beautiful moments`}</span> <span className="xl:pl-[20px]">{`with your`}</span>
            <span className="xl:pl-[20px]">{`favorite people`}</span>
          </p>
          <Link href="/contact" legacyBehavior passHref>
            <a className="z-10  mb-[60px] border border-white py-[15px] text-[13px] tracking-[.35em] mt-[30px] px-[30px] text-white xl:self-start xl:ml-[100px]">
              {`LET'S CHAT`}
            </a>
          </Link>
        </section>
      </div>

      {/* About Section */}
      <section id="about" className="px-[30px] sm:px-[75px] xl:flex xl:py-[100px]">
        <div className="flex justify-center xl:items-center 2xl:items-end mb-[60px] xl:flex-1">
          <div className="flex">
            <p className="vertical-rl  xl:pr-[100px] w-0 h-0 xl:w-auto xl:h-auto mt-[120px] xl:mt-0 self-end text-[12px] font-thin invisible xl:visible">
              {`Family Photographer in Tampa, Florida`}
            </p>
          </div>
          <div className="mt-[120px] xl:mt-0 h-[90dvw] w-[90dvw] max-w-[560px] max-h-[840px] xl:h-auto xl:w-auto overflow-hidden xl:pl-[5px] pr-[5px]">
            <Image
              src="/images/Home Updated/tampaphotographerportrait.webp"
              alt="Tampa Family Photography | Self Portrait of Photographer in downtown Tampa taken by Family Photographer Calli Wickes."
              height={840}
              width={560}
              className="object-cover"
            />
          </div>
          <div>
            <p className="vertical-rl xl:pr-[100px] mt-[120px] xl:mt-0 text-[12px] font-thin xl:hidden visible">
              {`Family Photographer in Tampa, Florida`}
            </p>
          </div>
        </div>
        <div className="xl:flex-1 xl:flex xl:flex-col xl:justify-center xl:pl-[30px] xl:pr-[70px] xl:mb-[100px]">
          <h2 className="text-[15px] mt-[60px]">{`FAMILY PHOTOGRAPHY IN TAMPA, FL`}</h2>
          <h3 className="text-[35px] mb-[40px]">{`What Makes Calli So Different?`}</h3>
          <p className="font-thin leading-8 mb-[30px]">
            {`I’m Calli - your local Tampa family photographer! I love capturing photos that showcase you with your absolute favorite people. Take a moment with me to take a brief pause on the busyness of life so that you can have photographs that you will forever cherish. With two little girls of my own, I understand how hard it is to take a moment aside from all the chaos that life brings. But I promise - you will never regret getting those family photos with your crew.

              `}
          </p>
          <p className="font-thin leading-8 mb-[30px]">
            {`I specialize in stress-free sessions, capturing your natural smiles and laughter. When you book with me you will receive images that you love and can’t wait to print, frame, and proudly display throughout your home. I tailor each session to your unique family and love finding a balance between posed and playful pictures for a casual, comfortable vibe. Giving you photographs that you will have such joy seeing every time you walk past them in your home.`}
          </p>
          <p className="font-thin leading-8 mb-[60px]">
            {`I can’t wait to capture some of your best moments together in Tampa, FL. You can explore the photo gallery below and let's get ready to capture your family's story. If you’re searching for a Tampa Family Photographer -`}{' '}
            <Link href="/contact" passHref legacyBehavior>
              <a className="font-normal">{`Contact me`}</a>
            </Link>{' '}
            {`to book your family photo session today!`}
          </p>
          <div className="pb-[80px] xl:pb-[0px]">
            <Link href="/about" legacyBehavior passHref>
              <a className="mb-[100px] border border-black py-[15px] text-[13px] tracking-[.35em] px-[30px]">
                {`MORE ABOUT ME`}
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="xl:px-[100px] xl:py-[100px] mt-[100px] bg-[#faf9f7]">
        <Reviews />
      </section>

      {/* Experience Section */}
      <section
        id="home-experience"
        className="xl:pl-[100px] px-[30px] pr-[30px] xl:flex xl:flex-row-reverse xl:pt-[100px] max-w-[100dw]"
      >
        <div className="flex mb-[60px] xl:flex-1 flex-col items-center">
          <div className="mt-[120px] xl:mt-0 h-[90dvw] w-[90dvw] sm:h-auto sm:w-auto overflow-hidden xl:pl-[5px] pr-[5px]">
            <Image
              src="/images/Home Updated/MommyandmePhoto.webp"
              priority
              alt=""
              height={684}
              width={456}
              className="object-cover  mt-[-30dvw] sm:mt-0"
            />
          </div>
          <p className="w-0 h-0 xl:w-auto xl:h-auto xl:mb-[50px] mt-[10px] text-[12px] font-thin invisible xl:visible">
            {`Family photos for you to always remember`}
          </p>
        </div>
        <div className="xl:flex-1 xl:flex xl:flex-col xl:justify-center xl:pr-[100px] xl:mb-[100px] md:px-[75px]">
          <h2 className="text-[35px] text-right mb-[40px]">{`Just relax + let’s take some pictures`}</h2>
          <p className="font-thin leading-8 text-right mb-[60px]">
            {`This isn't about making sure you pick out the perfect outfit + stand just the right way. This is about capturing you - the real you. Yes, take the time to pick out an outfit you love. Then just show up. I'll take care of all the logistics so you just get to enjoy yourself as I capture all your best moments. `}
          </p>
        </div>
      </section>

      {/* Experience Process Section */}
      <section
        id="experience-process"
        className="px-[30px] xl:px-[50px] xl:pr-[30px] sm:flex sm:flex-col sm:items-center xl:flex-row xl:pt-[100px] max-w-[100dw] xl:justify-evenly"
      >
        <div className="flex flex-col justify-start sm:items-start flex-1 max-w-[456px] mb-[60px] xl:mb-0">
          <Image
            src="/images/Home Updated/youngdadandhisbabyboyinflorida.webp"
            height={684}
            width={456}
            alt=""
            className="object-cover"
          />
          <h2 className="text-[35px] my-[40px]">{`Getting Started`}</h2>
          <p className="font-thin">{`Booking your session is as easy as paying a session fee to reserve a space on my calendar. We will work out the date/time info and I take care of finding the perfect location! All you will need to do is find the right outfit for you + your crew. If you need any styling help, just let me know!`}</p>
        </div>
        <div className="flex flex-col justify-start items-start flex-1 xl:mx-[30px] max-w-[456px] mb-[60px] xl:mb-0">
          <Image
            src="/images/Home Updated/tampafamilyofthree.webp"
            height={684}
            width={456}
            alt=""
            className="object-cover"
          />
          <h2 className="text-[35px] my-[40px]">{`Today's the day!`}</h2>
          <p className="font-thin">{`Time to meet, talk, connect, and get to know each other. I will take care of all the logistics, posing + helping you feel like a natural! My goal is to keep everyone feeling relaxed and having fun, allowing your kids to be kids, so I can capture genuine interactions of your special family.`}</p>
        </div>
        <div className="flex flex-col justify-start items-start flex-1 max-w-[456px] mb-[60px] xl:mb-0">
          <Image
            src="/images/Home Updated/newlyengagedcouple.webp"
            height={684}
            width={456}
            alt=""
            className="object-cover"
          />
          <h2 className="text-[35px] my-[40px]">{`What's Next?`}</h2>
          <p className="font-thin">{`Within two weeks of your session, you will be able to view your edited images from the comfort of home in a beautiful online gallery - ready for you to download, print, + proudly display in your home!`}</p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section
        id="newsletter"
        className="xl:px-[50px] px-[30px] sm:flex sm:flex-col md:flex-row xl:justify-center sm:items-center mt-[100px] bg-[#faf9f7] pt-[100px] lg:px-[75px]"
      >
        <div className="flex flex-col w-full flex-1 xl:pl-[100px] 2xl:items-end 2xl:justify-start md:pr-[100px]">
          <h2 className="text-[15px]">{`JOIN MY NEWSLETTER`}</h2>
          <h3 className="text-[35px] mb-[40px]">{`BECOME A VIP`}</h3>
          <p className="font-thin leading-8 mb-[60px] text-wrap">{`
Join our email list and be the first to know about our special offers, receive early access to mini sessions + more. Get in the know so you don't miss a thing!`}</p>
        </div>
        <div className="flex-1 flex justify-end 2xl:justify-center items-start w-full">
          <NewsletterForm />
        </div>
      </section>

      {/* Carousel Section */}
      <section id="carousel" className="">
        <Carousel />
      </section>

      {/* FAQ Section */}
      <section id="home-faq" className="px-[30px] xl:px-[100px] mt-[100px]">
        <h2 className="text-[13px] font-bold tracking-wider my-[50px]">{`FAQ`}</h2>
        <ul className=" xl:grid xl:grid-rows-2 xl:grid-flow-col pb-[60px] xl:pb-0">
          {faqs.map((faq, index) => {
            return <FAQs key={index} index={index} faq={faq} />;
          })}
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-[30px] xl:flex xl:flex-row-reverse xl:py-[100px]">
        <div className="w-full mb-[50px] xl:flex-1">
          <div className="w-full flex justify-center items-end xl:pr-[100px] ">
            <div className="max-w-[323px] max-h-[484px] w-full xl:max-h-[484px] xl:max-w-[323px] pr-[5px]">
              <Image
                src="/images/Home Updated/youngcouplehugging.webp"
                height={484}
                width={323}
                className="object-cover "
                alt="Tampa Family Photography | Young couple sharing an embrace while surrounded by the rustic charm of Tampa's countryside taken by Tampa Photographer Calli Wickes."
              />
            </div>
            <p className="vertical-rl xl:pl-[100px] xl:mb-[2px] xl:mt-0 justify-self-end text-[12px] font-thin">
              {`Tampa, FL Family Photography`}
            </p>
          </div>
        </div>
        <div className="xl:flex xl:flex-col xl:flex-1 xl:align-center xl:pl-[100px] xl:justify-center xl:align-center">
          <h2 className="text-[35px] mb-[50px]">{`Family photography for you to treasure forever`}</h2>
          <p className="font-thin leading-8 mb-[60px]">
            {`Whether you seek stunning beach snapshots, enchanting Florida nature
          images, or a lively urban atmosphere with your loved ones, I would
          love to capture your family portrait, creating cherished family photos
          destined for your walls!`}
          </p>
          <div>
            <Link href="/contact" legacyBehavior passHref>
              <a className="mb-[60px] border border-black py-[15px] text-[13px] tracking-[.35em] px-[30px]">
                {`LET'S CONNECT`}
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
