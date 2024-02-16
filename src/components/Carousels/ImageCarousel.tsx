'use client';

import Image from 'next/image';

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
        <Image src="/images/Carousel/Carousel1.webp" width={3751} height={5627} alt="Family photo taken by Tampa Family Photographer, Calli Wickes" />
        <Image src="/images/Carousel/Carousel2.webp" width={3276} height={4914} alt="Family photo taken by Tampa Family Photographer, Calli Wickes" />
        <Image src="/images/Carousel/Carousel3.webp" width={3845} height={5767} alt="Family photo taken by Tampa Family Photographer, Calli Wickes" />
        <Image src="/images/Carousel/Carousel4.webp" width={4000} height={6000} alt="Family photo taken by Tampa Family Photographer, Calli Wickes" />
        <Image src="/images/Carousel/Carousel5.webp" width={3909} height={5863} alt="Family photo taken by Tampa Family Photographer, Calli Wickes" />
        <Image src="/images/Carousel/Carousel6.webp" width={3439} height={5158} alt="Family photo taken by Tampa Family Photographer, Calli Wickes" />
        <Image src="/images/Carousel/Carousel7.webp" width={4000} height={6000} alt="Family photo taken by Tampa Family Photographer, Calli Wickes" />
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
