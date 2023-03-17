import React from 'react';
import EventCard from '../EventCard/EventCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination } from 'swiper';
import { BsArrowUpRight } from 'react-icons/bs';

const UpcomingEvent = () => {
  return (
    <section className="bg-[#eef2f6] min-h-screen px-3 lg:px-16 py-20">
      <div>
        <h1 className="text-3xl text-primary font-bold">Upcoming Events</h1>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur.
        </p>
      </div>
      <div className="mt-16 ">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={10}
          // loop={true}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            900: {
              slidesPerView: 3.3,
              spaceBetween: 18,
            },
          }}
        >
          <SwiperSlide className="pb-28">
            <EventCard />
          </SwiperSlide>
          <SwiperSlide>
            <EventCard />
          </SwiperSlide>
          <SwiperSlide>
            <EventCard />
          </SwiperSlide>
          <SwiperSlide>
            <EventCard />
          </SwiperSlide>
          <SwiperSlide>
            <EventCard />
          </SwiperSlide>
        </Swiper>
      </div>

      <button className="bg-white text-secondary py-3 px-9 mt-10 rounded-lg border-2 border-secondary hover:bg-secondary hover:text-white transition-all duration-300 flex items-center justify-center ">
        View All Event{' '}
        <span className="ml-2">
          <BsArrowUpRight />
        </span>
      </button>
    </section>
  );
};

export default UpcomingEvent;
