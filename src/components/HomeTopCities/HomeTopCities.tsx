import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/Feed';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Autoplay } from 'swiper';

const HomeTopCities = () => {
  const data = [
    {
      cityName: 'Delhi',
      cityImage: '/assets/cities/delhi.png',
    },
    {
      cityName: 'Delhi',
      cityImage: '/assets/cities/delhi.png',
    },
    {
      cityName: 'Delhi',
      cityImage: '/assets/cities/delhi.png',
    },
    {
      cityName: 'Delhi',
      cityImage: '/assets/cities/delhi.png',
    },
    {
      cityName: 'Delhi',
      cityImage: '/assets/cities/delhi.png',
    },
    {
      cityName: 'Delhi',
      cityImage: '/assets/cities/delhi.png',
    },
  ];

  return (
    <Paper sx={{ p: 8 }}>
      <Typography
        variant="h5"
        color="primary"
        sx={{ fontWeight: '600', textAlign: 'center', mb: 3 }}
      >
        Top Cities
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
            slidesPerView: 5,
            spaceBetween: 18,
          },
        }}
      >
        {data.map((item, i) => (
          <SwiperSlide key={item.cityName} className="py-6">
            <Box
              sx={{
                boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
                p: 2,
                display: 'flex',
                height: '150px',
                borderRadius: '10px',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                mb: 1,
                mr: 1,
              }}
            >
              <Box
                sx={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  src={item.cityImage}
                  alt={item.cityName}
                  width={70}
                  height={70}
                />
              </Box>
              <Typography
                variant="body1"
                fontWeight="bold"
                mt={1}
                sx={{ color: 'text_color.main' }}
              >
                {item.cityName}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: 'text_color.main' }}
              ></Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      <Grid container spacing={0}>
        {/* {data.map((item, i) => (
        
        ))} */}
      </Grid>
    </Paper>
  );
};

export default HomeTopCities;
