import React from 'react';
import { A11y, Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SlideBody from './SlideBody/SlideBody';
import SwipeButtons from './SwipeButtons/SwipeButtons';
import HomeSearch from '../HomeSearch/HomeSearch';

interface CarouselItem {
  id: number;
  title: string;
  highlight: string;
  imageSrc: string;
  description: string;
}
const Hero = () => {
  let carouselItems;
  carouselItems = [
    {
      id: 1,
      title: 'Deccan College of Medical Science ',
      imageSrc: '/assets/hero.jpg',
      description:
        'A wonderful place to explore all youre knowledge and talent. ',
    },
    {
      id: 2,
      title: 'Indian Institute of Technology (IIT), Kanpur ',
      imageSrc: '/assets/Hero/bg.png',
      description: 'More than 6.500 online courses',
    },
    {
      id: 3,
      title: 'Indian Institute of Technology, Delhi  ',
      imageSrc: '/assets/Hero/bg.png',
      description: 'More than 6.500 online courses',
    },
  ];

  return (
    <section className=" lg:min-h-[500px] relative">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
      >
        <SwiperSlide>
          {carouselItems.slice(0, 1).map((item) => (
            <SlideBody key={item?.id} data={item} />
          ))}
        </SwiperSlide>
        <SwiperSlide>
          {carouselItems.slice(1, 2).map((item) => (
            <SlideBody key={item?.id} data={item} />
          ))}
        </SwiperSlide>
        <SwiperSlide>
          {carouselItems.slice(2, 3).map((item) => (
            <SlideBody key={item?.id} data={item} />
          ))}
        </SwiperSlide>

        <SwipeButtons />
      </Swiper>

      {/* title and search */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <h1 className="text-5xl  text-white font-bold text-center mt-8 ">
          FIND BEST COLLEGE <br /> FOR YOU
        </h1>
        <p className="text-white text-sm mt-3 font-bold text-center">
          The easiest way to find the best spots to visit all over the world.
        </p>
        <HomeSearch />
      </div>
    </section>
  );
};

export default Hero;
