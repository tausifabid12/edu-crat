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
          padding: { xs: '90px 0px', sm: '120px 0px' },

          //   backgroundColor: 'info.main',
        }}
      >
        {/* top  */}
        {/* <Breadcrumbs
          separator="›"
          aria-label="breadcrumb"
          sx={{
            padding: '16px 60px',
            fontSize: '14px',
            fontWeight: '500',
            backgroundColor: 'info.main',
            width: '100%',
          }}
        >
          <Link color="text_color" href="/">
            Home
          </Link>
          <Link color="text_color" href="/">
            All courses
          </Link>
          <Link color="text_color" href="/">
            User Experience Design
          </Link>
          <Link color="text_color" href="/">
            User Interface
          </Link>
        </Breadcrumbs> */}
        {/* body */}
        <Grid
          className=""
          container
          spacing={5}
          sx={{
            padding: { xs: '10px', sm: '60px' },
            backgroundColor: 'info.main',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Grid item xs={12} lg={8} pt={19}>
            <CourseDetailsCard />
            <DescriptionCard />
            <CourseSummery />
            <CourseContent />
            <Instructor />
            <FeedBack />
          </Grid>
          <Grid item xs={12} lg={4}>
            <div className="lg:fixed ">
              <CourseAddToCartCard />
            </div>
          </Grid>
        </Grid>
      </Box>
    </MainLayout>
  );
};

export default CourseDetails;
