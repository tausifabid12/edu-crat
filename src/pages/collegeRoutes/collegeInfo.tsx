import CollegeDashboardLayout from '@/Layouts/CollegeDashboardLayout';
import React from 'react';
import { Container, Stack, Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import DashboardCollegeInfo from '@/components/DashboardCollegeInfo/DashboardCollegeInfo';
import DashboardCourseInfo from '@/components/DashboardCourseInfo/DashboardCourseInfo';
import DashboardPopularCourse from '@/components/DashboardPopularCourse/DashboardPopularCourse';
import DashboardPopularColleges from '@/components/DashboardPopularColleges/DashboardPopularColleges';

const collegeInfo = () => {
  return (
    <CollegeDashboardLayout>
      <Stack spacing={3}>
        <Box sx={{}}>
          <Image
            src="/assets/college2.png"
            height={150}
            width={1200}
            objectFit="contain"
            style={{ width: '100%', height: '220px', borderRadius: '10px' }}
            alt=""
          />
        </Box>
        {/*  college bio */}
        <DashboardCollegeInfo />
        <DashboardPopularColleges />
        {/*course info section */}
        <DashboardCourseInfo />
        <DashboardPopularCourse />
      </Stack>
    </CollegeDashboardLayout>
  );
};

export default collegeInfo;
