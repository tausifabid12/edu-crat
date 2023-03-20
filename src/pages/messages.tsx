import MessageInfo from '@/components/MessageInfo/MessageInfo';
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
          <Grid
            container
            spacing={1}
            mt={5}
            mb={10}
            sx={{
              p: 0,
            }}
          >
            <Grid
              item
              xs={12}
              lg={4}
              sx={{
                backgroundColor: 'white',
                borderRadius: '14px',
                p: 2,
                boxShadow: '0px 0px 1px 3px rgba(0, 0, 0, 0.03)',
              }}
            >
              <MessageInfo />
            </Grid>
            <Grid item xs={12} lg={8}>
              {/* <CourseCard data={course} /> */}
              fjskfjslak
            </Grid>
          </Grid>
        </Box>
      </Box>
    </DashboardLayout>
  );
};

export default messages;
