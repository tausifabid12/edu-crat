import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Button,
  Stack,
} from '@mui/material';
import MainLayout from '@/Layouts/MainLayout';
import EventCard from '@/components/EventCard/EventCard';

const Blog = () => {
  return (
    <MainLayout>
      <Paper elevation={0} sx={{ mt: '110px', minHeight: '100vh' }}>
        <Grid container spacing={0} sx={{}}>
          <Grid item xs={12} lg={6} p={5} sx={{}}>
            <Typography variant="h1" sx={{ fontWeight: '600' }}>
              We always think
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            p={4}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderLeft: '1px solid #e0e0e0',
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: '600' }}>
              Crafting new bright brands, unique visual systems and digital
              experience focused on a wide range of original collabs.
            </Typography>
          </Grid>
        </Grid>

        <Grid container sx={{ my: 5, p: 5 }} spacing={5}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <Grid key={item} item xs={12} sm={6} lg={4}>
              <EventCard />
            </Grid>
          ))}
        </Grid>
        {/* ----- */}
      </Paper>
    </MainLayout>
  );
};

export default Blog;
