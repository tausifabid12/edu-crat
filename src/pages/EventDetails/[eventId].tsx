import MainLayout from '@/Layouts/MainLayout';
import React from 'react';
import { Button, Typography, Paper, Box, Grid, Stack } from '@mui/material';
import Image from 'next/image';
const EventDetails = () => {
  return (
    <MainLayout>
      <Paper elevation={0} sx={{ mt: '110px', minHeight: '100vh' }}>
        <Grid container spacing={0} sx={{}}>
          <Grid item xs={12} lg={8} p={4}>
            <Image
              src="/assets/hero.jpg"
              width={1000}
              height={500}
              alt="/"
              className="rounded-lg"
            />
            <Typography
              variant="body1"
              color="primary"
              sx={{ color: 'text_color.main', py: 4, lineHeight: '1.8' }}
            >
              We’re inviting the top creatives in the tech industry from all
              over the world to come learn, grow, scrape their knees, try new
              things, to be vulnerable, epic adventures his is where you’d put
              the event description. This is an example of a multi-day event.
              Great for conferences, music festivals, and other multi-day
              events.
            </Typography>
            <Typography
              variant="h4"
              sx={{ color: 'primary.main', fontWeight: '600', mb: 5 }}
            >
              Event Sponsors
            </Typography>
            <Grid container spacing={3} sx={{}} p={2}>
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Grid
                  key={item}
                  item
                  xs={12}
                  lg={3}
                  sx={{
                    bgcolor: 'bg_color.light',
                    p: 1.5,
                    mr: 1,
                    mb: 1,
                  }}
                >
                  <Image
                    src="/assets/company1.png"
                    width={150}
                    height={200}
                    alt="/"
                    className="rounded-md"
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} lg={4} p={4} sx={{}}>
            <Stack spacing={3}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ py: 2 }}
                >
                  Buy Your Ticket
                </Button>
                <Typography
                  variant="h4"
                  sx={{ color: 'primary.main', fontWeight: '600', ml: 3 }}
                >
                  $67
                </Typography>
              </Box>
              <Typography
                variant="h5"
                sx={{ color: 'primary.main', fontWeight: '600', ml: 1 }}
              >
                Details
              </Typography>

              <Box sx={{ borderBottom: '0.5px solid #ddd', pb: 1 }}>
                <Typography
                  variant="body1"
                  color="primary"
                  sx={{ fontWeight: '600' }}
                >
                  Start:
                </Typography>
                <Typography
                  variant="body2"
                  color="primary"
                  sx={{ color: 'text_color.main' }}
                >
                  September 10 @ 1:00 am
                </Typography>
              </Box>
              <Box sx={{ borderBottom: '0.5px solid #ddd', pb: 1 }}>
                <Typography
                  variant="body1"
                  color="primary"
                  sx={{ fontWeight: '600' }}
                >
                  End:
                </Typography>
                <Typography
                  variant="body2"
                  color="primary"
                  sx={{ color: 'text_color.main' }}
                >
                  September 10 @ 1:00 am
                </Typography>
              </Box>
              <Box sx={{ borderBottom: '0.5px solid #ddd', pb: 1 }}>
                <Typography
                  variant="body1"
                  color="primary"
                  sx={{ fontWeight: '600' }}
                >
                  Location:
                </Typography>
                <Typography
                  variant="body2"
                  color="primary"
                  sx={{ color: 'text_color.main' }}
                >
                  PO Box 16122 Collins Street West Victoria 8007 Newyork
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        {/* ----- */}
      </Paper>
    </MainLayout>
  );
};

export default EventDetails;
