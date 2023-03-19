import MainLayout from '@/Layouts/MainLayout';

import Link from 'next/link';
import React from 'react';
import { Container, Grid, Breadcrumbs, Box } from '@mui/material';
import CourseDetailsCard from '@/components/CourseDetails/CourseDetailsCard/CourseDetailsCard';
import CourseAddToCartCard from '@/components/CourseDetails/CourseDetailsCard/CourseAddToCartCard/CourseAddToCartCard';
import DescriptionCard from '@/components/CourseDetails/DescriptionCard/DescriptionCard';
import CourseSummery from '@/components/CourseDetails/CourseSummery/CourseSummery';
import CourseContent from '@/components/CourseDetails/CourseContent/CourseContent';
import Instructor from '@/components/CourseDetails/Instructor/Instructor';
import FeedBack from '@/components/CourseDetails/FeedBack/FeedBack';

const CourseDetails = () => {
  return (
    <MainLayout>
      <Box
        sx={{
          width: '100%',
          padding: '120px 0px',

          //   backgroundColor: 'info.main',
        }}
      >
        {/* top  */}
        <Breadcrumbs
          separator="›"
          aria-label="breadcrumb"
          sx={{
            padding: '12px 60px',
            fontSize: '14px',
            fontWeight: '500',
            backgroundColor: 'info.main',
            width: '100%',
          }}
        >
          <Link color="secondary.contrastText" href="/">
            Home
          </Link>
          <Link color="secondary.contrastText" href="/">
            All courses
          </Link>
          <Link color="secondary.contrastText" href="/">
            User Experience Design
          </Link>
          <Link color="secondary.contrastText" href="/">
            User Interface
          </Link>
        </Breadcrumbs>
        {/* body */}
        <Grid
          className=""
          container
          spacing={5}
          sx={{
            padding: '60px',
            backgroundColor: 'info.main',
            position: 'relative',
          }}
        >
          <Grid item xs={12} lg={8} py={19}>
            <CourseDetailsCard />
            <DescriptionCard />
            <CourseSummery />
            <CourseContent />
            <Instructor />
            <FeedBack />
          </Grid>
          <Grid item xs={12} lg={4}>
            <div className="fixed min-h-[700px] ">
              <CourseAddToCartCard />
            </div>
          </Grid>
        </Grid>
      </Box>
    </MainLayout>
  );
};

export default CourseDetails;
