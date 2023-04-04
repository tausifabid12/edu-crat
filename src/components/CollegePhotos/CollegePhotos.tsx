import React from 'react';
import { Box, Paper, Typography, Grid } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Autoplay } from 'swiper';
import { BsArrowUpRight } from 'react-icons/bs';
import Image from 'next/image';

const CollegePhotos = () => {
  return (
    <Paper elevation={0} sx={{ p: 3 }}>
      <Typography
        variant="h5"
        fontWeight="bold"
        mb={3}
        sx={{ color: 'primary.main' }}
      >
        Photos
      </Typography>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
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
          <Image
            src="/assets/coursesCards/1.png"
            height={500}
            width={500}
            alt="/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/coursesCards/2.png"
            height={500}
            width={500}
            alt="/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/coursesCards/3.png"
            height={500}
            width={500}
            alt="/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/coursesCards/4.png"
            height={500}
            width={500}
            alt="/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/coursesCards/5.png"
            height={500}
            width={500}
            alt="/"
          />
        </SwiperSlide>
      </Swiper>
    </Paper>
  );
};

export default CollegePhotos;
