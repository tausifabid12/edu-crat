import React from 'react';
import { A11y, Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SlideBody from './SlideBody/SlideBody';
import SwipeButtons from './SwipeButtons/SwipeButtons';

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
      title: 'Learn Your Way With Educrat To ',
      highlight: 'Web Design',
      imageSrc: '/assets/Hero/bg.png',
      description: 'More than 6.500 online courses',
    },
    {
      id: 2,
      title: 'Learn Your Way With Educrat To',
      highlight: 'Graphics Design',
      imageSrc: '/assets/Hero/bg.png',
      description: 'More than 6.500 online courses',
    },
    {
      id: 3,
      title: 'Learn Your Way With Educrat To ',
      highlight: '3D Animation',
      imageSrc: '/assets/Hero/bg.png',
      description: 'More than 6.500 online courses',
    },
  ];

  return (
    <section className=" lg:min-h-screen ">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 2500,
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
    </section>
  );
};

export default Hero;
