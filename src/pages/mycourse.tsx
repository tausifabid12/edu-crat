import MyCourseTab from '@/components/MyCoursesTab/MyCourseTab';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Box, Typography } from '@mui/material';
import React from 'react';

const MyCourse = () => {
  return (
    <DashboardLayout>
      <Box sx={{ px: 4 }}>
        <Box>
          <Typography
            variant="h4"
            sx={{ color: 'primary.main', fontWeight: '600' }}
          >
            My Courses
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: 'secondary.contrastText', fontWeight: '400', mt: '2' }}
          >
            Lorem ipsum dolor sit amet, consectetur.
          </Typography>
        </Box>
        <Box
          sx={{ backgroundColor: 'white', p: 2, my: 3, borderRadius: '14px' }}
        >
          <MyCourseTab />
        </Box>
      </Box>
    </DashboardLayout>
  );
};

export default MyCourse;