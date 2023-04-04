import MainLayout from '@/Layouts/MainLayout';

import Link from 'next/link';
import React from 'react';
import { Container, Grid, Breadcrumbs, Box, Paper } from '@mui/material';
import CourseDetailsCard from '@/components/CourseDetails/CourseDetailsCard/CourseDetailsCard';
import CourseAddToCartCard from '@/components/CourseDetails/CourseDetailsCard/CourseAddToCartCard/CourseAddToCartCard';
import DescriptionCard from '@/components/CourseDetails/DescriptionCard/DescriptionCard';
import CourseSummery from '@/components/CourseDetails/CourseSummery/CourseSummery';
import CourseContent from '@/components/CourseDetails/CourseContent/CourseContent';
import Instructor from '@/components/CourseDetails/Instructor/Instructor';
import FeedBack from '@/components/CourseDetails/FeedBack/FeedBack';
import Navbar from '@/components/Navbar/Navbar';

const CourseDetails = () => {
  return (
    <>
      <Navbar />
      <Paper
        sx={{
          width: '100%',
          padding: { xs: '90px 0px', sm: '120px 0px' },
          backgroundColor: 'info.main',
        }}
      >
        {/* body */}
        <Grid
          className=""
          container
          spacing={5}
          sx={{
            padding: { xs: '10px', sm: '60px' },
            position: 'relative',
            overflow: 'hidden',
            maxWidth: '1536px',
            mx: 'auto',
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
      </Paper>
    </>
  );
};

export default CourseDetails;
