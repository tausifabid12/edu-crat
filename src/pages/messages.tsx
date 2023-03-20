import DashboardLayout from '@/Layouts/DashboardLayout';
import { Box, Grid, Typography, Stack } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const messages = () => {
  return (
    <DashboardLayout>
      <Box sx={{ px: { xs: 1, sm: 4 } }}>
        <Box>
          <Typography
            variant="h4"
            sx={{ color: 'primary.main', fontWeight: '600' }}
          >
            Messages
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: 'secondary.contrastText', fontWeight: '400', mt: '2' }}
          >
            Lorem ipsum dolor sit amet, consectetur.
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={5} mt={0}>
            <Grid
              item
              xs={12}
              lg={4}
              sx={{
                backgroundColor: 'white',
                borderRadius: '14px',
                p: 0,
                m: 0,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: 'primary.main',
                  fontWeight: '500',
                  borderBottom: '1px solid #E5E5E5',
                  boxShadow: '0px 1px 0px #E5E5E5',
                }}
              >
                Basic Information
              </Typography>
              {/*  body */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Image src="/assets/user.png" height={50} width={50} alt="" />
                <Stack spacing={0} sx={{ py: 3 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: 'primary.main' }}
                  >
                    Darlene Robertson
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: 'secondary.contrastText' }}
                  >
                    Head of Development
                  </Typography>
                </Stack>
                <Typography
                  variant="subtitle2"
                  sx={{ color: 'secondary.contrastText' }}
                >
                  35min
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} lg={8}>
              {/* <CourseCard data={course} /> */}
              fjskfjslak
            </Grid>

            {/* {courses.map((course) => {
              return (
                <Grid key={course?.id} item xs={12} lg={6}>
                  <CourseCard data={course} />
                </Grid>
              );
            })} */}
          </Grid>
        </Box>
      </Box>
    </DashboardLayout>
  );
};

export default messages;
