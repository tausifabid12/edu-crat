import React from 'react';
import { Box, Paper, Typography, Grid } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Autoplay } from 'swiper';
import { BsArrowUpRight } from 'react-icons/bs';
import Image from 'next/image';
import CollegeAdvertiseCard from '../CollegeAdvertiseCard/CollegeAdvertiseCard';

const CollegeAdvertise = () => {
  return (
    <Paper elevation={0} sx={{ p: 3, my: 3 }}>
      <Typography
        variant="h5"
        fontWeight="bold"
        mb={3}
        sx={{ color: 'primary.main' }}
      >
        Similar Colleges
      </Typography>
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
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
        <SwiperSlide className="py-5">
          <CollegeAdvertiseCard />
        </SwiperSlide>
        <SwiperSlide className="py-5">
          <CollegeAdvertiseCard />
        </SwiperSlide>
        <SwiperSlide className="py-5">
          <CollegeAdvertiseCard />
        </SwiperSlide>
        <SwiperSlide className="py-5">
          <CollegeAdvertiseCard />
        </SwiperSlide>
        <SwiperSlide className="py-5">
          <CollegeAdvertiseCard />
        </SwiperSlide>
        <SwiperSlide className="py-5">
          <CollegeAdvertiseCard />
        </SwiperSlide>
        <SwiperSlide className="py-5">
          <CollegeAdvertiseCard />
        </SwiperSlide>
      </Swiper>
    </Paper>
  );
};

export default CollegeAdvertise;
