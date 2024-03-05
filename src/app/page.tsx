'use client';

import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import { Lora } from 'next/font/google';
const lora = Lora({ subsets: ['latin'] });

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
        'Pinterest has some great ideas if you are needing inspiration + you are more than welcome to send me a pic of your ideas for me to help. I always recommend airing on the side of neautrals though! Neautral outfits photograph your skin tones better and stand the test of time better. You can always use little pops of color to bring in some fun!',
    },
    {
      question: 'How many pictures will I receive?',
      answer:
        "I will take lots of photos while we are together, then I'll sort through them all to pick out the best of the best! The amount various on the type of session booked (mini session, standard family session, extended family session, etc.). I'll edit those + upload them to be delivered to you via online gallery.",
    },
    {
      question: 'Do you only photograph in Tampa?',
      answer:
        'As a Tampa photographer, my sessions are typically within 1 hour of downtown Tampa. If you are interested in a family photo session that involves further travel, we can discuss what that would look like!',
    },
    {
      question: 'How do I schedule a photo session?',
      answer:
        "Since you are already here I'd recommend contacting me via my Contact page. My phone number and email are also listed at the bottom of this page!",
    },
  ];

  return (
    <>
      <main>
        <Share />
        <Header />

        {/* Hero Section */}
        <section
          id="home"
          className=" flex flex-col items-center justify-center sm:mt-[18dvh] mt-[12dvh] overflow-hidden"
        >
          <div className="sm:h-[500px] w-[140dvw] xl:w-full overflow-hidden flex justify-center items-start">
            <Image
              src="/images/Home Updated/familyofthree.webp"
              priority
              alt="Family of three hugging"
              className="object-cover sm:mt-[-65px] lg:mt-[-200px] mt-0"
              height={1149}
              width={1724}
            />
          </div>
          <div className="px-[30px]">
            <h1 className="text-nowrap text-center text-[12px] font-thin mt-[50px] mb-[20px] tracking-wide z-10 mt-30px] ">
              {`TAMPA FAMILY PHOTOGRAPHER`}
            </h1>
            <p
              className={`${lora.className} text-center text-[35px] xl:text-[55px] flex flex-col mb-[20px] z-10 tracking-wide `}
            >
              <span>{`Natural photography for authentic families`}</span> <span>{``}</span>
            </p>
            <p className="text-center text-[20px] my-[20px] font-thin tracking-wide z-10 mt-[30px] ">{`FOR FAMILIES SEEKING THE PERFECT BLEND OF CANDID + PORTRAIT`}</p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="px-[30px] sm:px-[75px] xl:flex xl:pt-[50px]">
          <div className="flex justify-center xl:items-center 2xl:items-end mb-[60px] xl:flex-1">
            <div className="flex">
              <p className="vertical-rl  xl:pr-[100px] w-0 h-0 xl:w-auto xl:h-auto mt-[120px] xl:mt-0 self-end text-[12px] font-thin invisible xl:visible">
                {`Family Photographer in Tampa, Florida`}
              </p>
            </div>
            <div className="mt-[40px] xl:mt-0 h-[90dvw] w-[90dvw] max-w-[560px] max-h-[840px] xl:h-auto xl:w-auto overflow-hidden xl:pl-[5px] pr-[5px]">
              <Image
                priority
                src="/images/Home Updated/TampaPhotographerPortrait.webp"
                alt="Tampa Family Photography | Self Portrait of Photographer in downtown Tampa taken by Family Photographer Calli Wickes."
                height={5808}
                width={3873}
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
            <h2 className="text-[15px] mt-[20px]">{`FAMILY PHOTOGRAPHY IN TAMPA, FL`}</h2>
            <h3 className={`${lora.className} text-[35px] mt-[40px] mb-[20px]`}>{`Christina beamed with love and joy...`}</h3>
            <p className="font-thin leading-8 mb-[30px]">
              {`As she sat next to her husband, Todd - her very best friend - playing with their little girls. This family photography session felt like spending quality time with her family. As I witnessed this family stepping away from day-to-day life to enjoy this time together, I couldn't help but feel the joy eminating from their family. In that moment I realized how much I love what I do: getting to capture these beautiful moments for families.`}
            </p>
            <p className="font-thin leading-8 mb-[80px]">
              {`With over a decade of experience as a photographer, I’ve created a family photography experience that will leave you at ease and having a blast with your crew. You will leave your family photo session having spent quality time with your favorite people and gain timeless family photos that you will cherish for years to come.`}
            </p>
            <div className="pb-[80px] xl:pb-[0px]">
              <Link href="/family-experience" legacyBehavior passHref>
                <a className="mb-[100px] border border-black py-[15px] text-[13px] tracking-[.35em] px-[30px] flex sm:inline justify-center text-center">
                  {`FAMILY PHOTOGRAPHY EXPERIENCE`}
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="xl:px-[100px]  mt-[25px] bg-[#faf9f7]">
          <Reviews />
        </section>

        {/* Experience Section */}
        <section
          id="home-experience"
          className="xl:pl-[100px] px-[30px] pr-[30px] xl:flex xl:flex-row-reverse xl:pt-[100px] max-w-[100dw]"
        >
          <div className="flex mb-[60px] xl:flex-1 flex-col items-center">
            <div className="mt-[120px] xl:mt-0 h-[90dvw] w-[90dvw] max-w-[560px] max-h-[840px] xl:h-auto xl:w-auto overflow-hidden xl:pl-[5px] pr-[5px]">
              <Image
                src="/images/Home Updated/MommyandmePhoto.webp"
                alt="Tampa Family Photography | Photo of a mom holding her little boy taken by Tampa Photographer Calli Wickes."
                height={6000}
                width={4000}
                className="object-cover  mt-[-30dvw] sm:mt-0"
              />
            </div>
            <p className="w-0 h-0 xl:w-auto xl:h-auto xl:mb-[50px] mt-[10px] text-[12px] font-thin invisible xl:visible">
              {`Photos to remember these beautiful family moments - Tampa Family Photographers`}
            </p>
          </div>
          <div className="xl:flex-1 xl:flex xl:flex-col xl:justify-center xl:pr-[100px] xl:mb-[100px] md:px-[75px]">
            <h2
              className={`${lora.className} text-[35px] text-right mb-[60px]`}
            >{`What will your family look like 15 years from now?`}</h2>
            <p className="font-thin leading-8 text-right mb-[30px]">
              {`If you are anything like me you can envision your kiddos all grown up and taking the world by storm. You beam with pride. You raised some awesome humans.`}
            </p>
            <p className="font-thin leading-8 text-right mb-[30px]">
              {`Now imagine if 15 years from now, when you are missing your babies being babies, that you have family photos that you took the time + investment in capturing. Because I promise you - you will never regret getting those family photos with your crew.`}
            </p>
            <p className="font-thin leading-8 text-right mb-[30px]">
              {`As your Tampa photographer, I'll take care of all the logistics so you just get to enjoy your time with your family as I capture those sweet moments. If you're in search of playful + authentic photography for families in Tampa, you have found your forever photographer!`}{' '}
              <Link href="/contact" passHref legacyBehavior>
                <a className="font-normal">{`Contact me`}</a>
              </Link>{' '}
              {`to schedule your family photos and let's start capturing your family's story!`}
            </p>
          </div>
        </section>

        {/* Experience Process Section */}
        <section className="xl:pt-[10px]">
          <div className="pl-[30px] xl:pl-[50px] flex items-center justify-center mb-[40px]">
            <h2
              className={`${lora.className} text-[35px] pr-[30px] text-center xl:text-nowrap text-wrap flex items-center justify-center`}
            >{`The CWP Experience`}</h2>
            <hr className="w-full border-[#333333]" />
          </div>
          <div
            id="experience-process"
            className="px-[30px] xl:px-[50px] xl:pr-[30px] flex flex-col xl:items-start items-center justify-center xl:flex-row  max-w-[100dw] xl:justify-evenly"
          >
            <div className="flex flex-col justify-start sm:items-start flex-1 max-w-[456px] mb-[60px] xl:mb-0">
              <Image
                src="/images/Home Updated/youngdadandhisbabyboyinflorida.webp"
                height={5887}
                width={3925}
                alt="Young dad holding his three month old baby boy in rural setting near Tampa - Photo taken by Tampa Photographer Calli Wickes"
                className="object-cover"
              />
              <h3 className={`${lora.className} text-[35px] my-[40px]`}>{`1. Getting Started`}</h3>
              <p className="font-thin">{`Booking your session is as easy as paying a session fee to reserve a space on my calendar. We will work out the date & time info and I take care of finding the perfect Tampa Bay location! All you will need to do is find the right outfit for you + your crew. If you need any styling help, just let me know!`}</p>
            </div>
            <div className="flex flex-col justify-start items-start flex-1 xl:mx-[30px] max-w-[456px] mb-[60px] xl:mb-0">
              <Image
                src="/images/Home Updated/tampafamilyofthree.webp"
                height={6000}
                width={4000}
                alt="Tampa Family Photographers | Family of three portrait with beautiful Florida greenery in the background taken by Tampa Photographer Calli Wickes."
                className="object-cover"
              />
              <h3 className={`${lora.className} text-[35px] my-[40px]`}>{`2. Today's the day!`}</h3>
              <p className="font-thin">{`Time to meet, talk, connect, and get to know each other. I will take care of all the logistics, posing + helping you feel like a natural during your family session! My goal is to keep everyone feeling relaxed and having fun, allowing your kids to be kids, so I can capture genuine interactions of your family during your Tampa Family Photography session.`}</p>
            </div>
            <div className="flex flex-col justify-start items-start flex-1 max-w-[456px] mb-[60px] xl:mb-0">
              <Image
                src="/images/Home Updated/newlyengagedcouple.webp"
                height={3456}
                width={2304}
                alt="Tampa Family Photographers | Young, newly engaged couple."
                className="object-cover"
              />
              <h3 className={`${lora.className} text-[35px] my-[40px]`}>{`3. What's Next?`}</h3>
              <p className="font-thin">{`Within two weeks of your photo session, you will be able to view your edited images from the comfort of home in a beautiful online gallery - ready for you to download, print, + proudly display!`}</p>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section
          id="newsletter"
          className="xl:px-[50px] px-[30px] sm:flex sm:flex-col md:flex-row xl:justify-center sm:items-center mt-[100px] bg-[#faf9f7] pt-[100px] lg:px-[75px]"
        >
          <div className="flex flex-col w-full flex-1 xl:pl-[100px] 2xl:items-end 2xl:justify-start md:pr-[100px]">
            <h2 className="text-[15px]">{`JOIN MY NEWSLETTER`}</h2>
            <h3 className={`${lora.className} text-[35px] mb-[20px]`}>{`BECOME A VIP`}</h3>
            <p className="font-thin leading-8 mb-[60px] text-wrap text-left 2xl:text-right">{`
Join our email list and be the first to know about our special Tampa family photography offers, receive early access to family mini sessions + more. Get in the know so you don't miss a thing!`}</p>
          </div>
          <div className="flex-1 flex justify-end 2xl:justify-center items-start w-full">
            <NewsletterForm />
          </div>
        </section>

        {/* Carousel Section */}
        <section id="carousel" className="mt-[50px]">
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
                  src="/images/Home Updated/YoungCoupleHugging.webp"
                  height={6000}
                  width={4000}
                  className="object-cover "
                  alt="Tampa Family Photographers | Young couple sharing an embrace while surrounded by the rustic charm of Tampa's countryside taken by Tampa Photographer Calli Wickes."
                />
              </div>
              <p className="vertical-rl xl:pl-[100px] xl:mb-[2px] xl:mt-0 justify-self-end text-[12px] font-thin">
                {`Tampa Family Photography by Tampa Family Photographers`}
              </p>
            </div>
          </div>
          <div className="xl:flex xl:flex-col xl:flex-1 xl:align-center xl:pl-[100px] xl:justify-center xl:align-center">
            <h2
              className={`${lora.className} text-[35px] mb-[30px]`}
            >{`Family photography for you to treasure forever`}</h2>
            <p className="font-thin leading-8 mb-[60px]">
              {`Whether you want those dreamy beach photos or the cool city vibes of Tampa - I’m here for it! I would love to help you save those beautiful moments with your family + create cherished family photos that are destined for your walls!`}
            </p>
            <div>
              <Link href="/contact" legacyBehavior passHref>
                <a className="mb-[20px] border border-black py-[15px] text-[13px] tracking-[.35em] px-[30px]">
                  {`LET'S CONNECT`}
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
