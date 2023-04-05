import MainLayout from '@/Layouts/MainLayout';
import EventCard from '@/components/EventCard/EventCard';
import { Box, Paper, Typography, Grid } from '@mui/material';
import React from 'react';

const Events = () => {
  return (
    <MainLayout>
      <Paper elevation={0} sx={{ mt: '110px' }}>
        <Box
          sx={{
            background: `linear-gradient( rgba(0,0,0, .5), rgba(0,0,0, .5)),  url('/assets/hero.jpg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h3" sx={{ color: 'white', fontWeight: '600' }}>
            Events
          </Typography>
        </Box>

        <Grid container sx={{ my: 5, p: 5 }} spacing={5}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <Grid key={item} item xs={12} sm={6} lg={4}>
              <EventCard />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </MainLayout>
  );
};

export default Events;
