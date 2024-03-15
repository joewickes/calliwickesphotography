'use client';

import Image from 'next/image';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

const CarouselComponent = ({ images }: any) => {
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
        {images.map((image: any, index: any) => (
          <Image
            key={index}
            src={image.attributes.homeCarouselImage.data[0].attributes.url}
            width={image.attributes.homeCarouselImage.data[0].attributes.width}
            height={image.attributes.homeCarouselImage.data[0].attributes.height}
            alt={image.attributes.homeCarouselImage.data[0].attributes.alternativeText}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
