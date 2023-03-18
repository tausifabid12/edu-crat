import React from 'react';
import { Container, Typography, Box, styled, Grid } from '@mui/material';
import { courses } from '@/utilities/CourseData/CourseData';
import CourseCard from '../PopularCourses/CourseCard/CourseCard';

const CoursesCards = () => {
  return (
    <Grid container spacing={4} mt={0}>
      {courses.map((course) => {
        return (
          <Grid key={course?.id} item xs={12} lg={4}>
            <CourseCard data={course} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CoursesCards;
