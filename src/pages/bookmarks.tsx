import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { courses } from '@/utilities/CourseData/CourseData';
import CourseCard from '@/components/PopularCourses/CourseCard/CourseCard';
import DashboardLayout from '@/Layouts/DashboardLayout';

const Bookmarks = () => {
  return (
    <DashboardLayout>
      <Box sx={{ px: { xs: 1, sm: 4 } }}>
        <Box>
          <Typography
            variant="h4"
            sx={{ color: 'primary.main', fontWeight: '600' }}
          >
            Bookmarks
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: 'text_color.main', fontWeight: '400', mt: '2' }}
          >
            Lorem ipsum dolor sit amet, consectetur.
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: 'bg_color.main',
            px: 3,
            my: 3,
            borderRadius: '14px',
          }}
        >
          <Grid container spacing={5} mt={0}>
            {courses.map((course) => {
              return (
                <Grid key={course?.id} item xs={12} lg={6}>
                  <CourseCard data={course} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </DashboardLayout>
  );
};

export default Bookmarks;
