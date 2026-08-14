'use client';

import Image from 'next/image';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import type { StrapiImageAttributes, StrapiMediaList } from '@/lib/types/strapi';

type CarouselImage = {
  attributes: {
    homeCarouselImage: StrapiMediaList;
  };
};

const CarouselComponent = ({ images }: { images: CarouselImage[] }) => {
  // homeCarouselImage is a multiple-media field, so an item whose image was
  // never attached in the CMS arrives as an empty `data` array. Indexing [0]
  // blindly threw and took down every page that renders the carousel — the
  // home page and all of the location pages — so unattached items are skipped.
  const slides = images
    .map((image) => image.attributes.homeCarouselImage.data[0]?.attributes)
    .filter((slide): slide is StrapiImageAttributes => slide != null);

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
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        keyBoardControl={true}
        transitionDuration={1000}
        containerClass=""
        itemClass="flex justify-center px-[10px] w-auto"
      >
        {slides.map((slide, index: number) => (
          <Image
            key={index}
            src={slide.url}
            width={slide.width}
            height={slide.height}
            alt={slide.alternativeText}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
