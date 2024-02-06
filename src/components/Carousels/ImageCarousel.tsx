'use client';

import Image from 'next/image';

import * as rdd from 'react-device-detect';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

const CarouselComponent = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        slidesToSlide={1}
        centerMode={true}
        // partialVisible={true}
        responsive={responsive}
        // ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        keyBoardControl={true}
        transitionDuration={1000}
        containerClass=""
        // removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
        // deviceType={this.props.deviceType}
        // className="h-[350px]"
        itemClass="flex justify-center px-[10px] w-auto"
      >
        {/* <Image
          src="/images/Home Updated/tampafamilyphoto.webp"
          height={575}
          width={862.31}
          alt=""
          className="object-contain"
        /> */}

        <Image
          src="/images/Home Updated/businesscoupledowntowntampa.webp"
          height={575}
          width={383.33}
          alt=""
          className="object-contain"
        />

        {/* <Image
          src="/images/Home Updated/middleagecoupleintampa.webp"
          height={575}
          width={862.31}
          alt=""
          className="object-contain"
        /> */}

        <Image
          src="/images/Home Updated/tampafamilywalkingphoto.webp"
          height={575}
          width={383.33}
          alt=""
          className="object-contain"
        />

        <Image
          src="/images/Home Updated/veryelderlycoupleinloveintampafl.webp"
          height={575}
          width={383.33}
          alt=""
          className="object-contain"
        />
      </Carousel>
    </div>
  );
};

export default CarouselComponent;

/* Portfolio Section */

{
  /* <section id="portfolio" className="px-[30px] xl:flex xl:justify-center">
        <div className="xl:ml-[50px] xl:max-w-[456px] xl:flex xl:flex-col xl:justify-start xl:items-end xl:flex-1 xl:mr-[15px]">
          <div className="w-full mb-[15px] ">
            <Image
              src="/images/Home/familyportraittampa.webp"
              height={684}
              width={456}
              alt="Tampa Family Photography | Family portrait surrounded by the beauty of Tampa's greenery and Spanish moss taken by Tampa Family Photographer Calli Wickes."
              className="object-cover"
            />
          </div>
          <div className="w-full mb-[15px]">
            <Image
              src="/images/Home/couplebrickwallbackground.webp"
              height={684}
              width={456}
              className="object-cover"
              alt="Tampa Family Photography | A love story unfolds as a couple poses against an urban wall in downtown Tampa taken by Family Photographer Calli Wickes."
            />
          </div>
        </div>
        <div className="xl:flex xl:flex-col xl:justify-start xl:items-end xl:flex-1 xl:max-w-[456px]">
          <div className="w-full h-auto mb-[15px]">
            <Image
              src="/images/Home/smilingcoupleoutdoor.webp"
              height={304}
              width={456}
              className="object-cover"
              alt="Tampa Family Photography | Smiling couple embraces amidst the vibrant green landscape of Tampa's outdoors taken by Tampa Family Photographer Calli Wickes."
            />
          </div>
          <div className="w-full mb-[15px]">
            <Image
              src="/images/Home/familyofthreeintampa.webp"
              height={684}
              width={456}
              className="object-cover"
              alt="Tampa Family Photography | Joyful family of three amidst lush greenery and Spanish moss in scenic Tampa, Fl taken by Tampa, Florida Family Photographer Calli Wickes."
            />
          </div>
          <div className="w-full mb-[15px]">
            <Image
              src="/images/Home/middleagecoupleintampa.webp"
              height={456}
              width={304}
              className="object-cover w-full"
              alt="Tampa Family Photography | Middle-aged couple smiling by a white fence in a Tampa's picturesque countryside setting taken by Tampa, FL Family Photographer Calli Wickes."
            />
          </div>
        </div>
        <div className="xl:ml-[15px] xl:max-w-[456px] xl:flex xl:flex-col xl:justify-start xl:items-end xl:flex-1 xl:mr-[50px] mb-[120px]">
          <div className="w-full mb-[15px]">
            <Image
              src="/images/Home/adorablefamilyofthree.webp"
              height={684}
              width={456}
              className="object-cover"
              alt="Tampa Family Photography | Adorable family of three, including a 3-month-old little boy, against the backdrop of a rustic barn in northern Tampa taken by Tampa Photographer Calli Wickes."
            />
          </div>
          <div className="w-full mb-[15px]">
            <Image
              src="/images/Home/tampafamilyofthree.webp"
              height={684}
              width={456}
              className="object-cover"
              alt="Tampa Family Photography | Capturing love in the heart of Tampa's nature with a beautiful family of three taken by Tampa, FL Photographer Calli Wickes."
            />
          </div>
        </div>
      </section> */
}
