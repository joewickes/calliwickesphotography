'use client';

import Image from 'next/image';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Lora } from 'next/font/google';
const lora = Lora({ subsets: ['latin'] });

// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

const ReviewCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3280, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const reviews = [
    {
      image: '',
      imageHeight: 0,
      imageWidth: 0,
      imageAlt: '',
      text: 'Calli did our first family photo shoot in 2018. She captured such precious photos of us with our baby girl. I still look at these photos almost everyday. She made us feel very comfortable during the session. It was such a positive experience and I can’t wait to have Calli photograph us again next time we are in Florida.',
      name: 'Caitlin',
    },
    {
      image: '',
      imageHeight: 0,
      imageWidth: 0,
      imageAlt: '',
      text: 'You can’t go wrong with Calli! Her style and planning for her shoots makes the whole experience fun and stress free!',
      name: 'Andrew',
    },
    {
      image: '',
      imageHeight: 0,
      imageWidth: 0,
      imageAlt: '',
      text: 'Calli did an amazing job with our family photos! Great personal care and fast turn around on getting us our pictures. Will definitely use her again!!',
      name: 'Mindy',
    },
  ];

  return (
    <div id="review-carousel" className="py-[30px] w-full">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        slidesToSlide={1}
        responsive={responsive}
        // ssr={true}
        infinite={true}
        autoPlay={false}
        keyBoardControl={true}
        transitionDuration={1000}
        containerClass="w-full"
        itemClass="bg-[#faf9f7] px-[70px] sm:px-[200px] xl:px-[250px] flex items-center"
      >
        {reviews.map(({ image, imageHeight, imageWidth, imageAlt, text, name }, idx) => (
          <div className="flex flex-col w-full" key={idx}>
            {/* Top */}
            <div className="w-full">
              {/* Left */}
              {image ? (
                <div>
                  <Image src={image} height={imageHeight} width={imageWidth} alt={imageAlt} />
                </div>
              ) : null}
              {/* Right */}
              <div>
                <p className={`${lora.className} text-[15px] xl:text-[35px] font-thin xl:my-[40px]`}>{text}</p>
              </div>
            </div>
            {/* Bottom */}
            <div>
              <p className="text-[15px] xl:text-[30px] mt-[20px] xl:mb-[40px] font-thin text-right">
                {`- `}
                {name}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ReviewCarousel;
