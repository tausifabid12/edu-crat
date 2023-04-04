import React from 'react';
import { Button, Typography, Paper, Grid, Box } from '@mui/material';
import CourseCard from '../PopularCourses/CourseCard/CourseCard';
import NearMeIcon from '@mui/icons-material/NearMe';
import DownloadIcon from '@mui/icons-material/Download';

const CollegeFeaturedCourse = () => {
  const courses = [
    {
      id: 1,
      title: 'Learn Figma - UI/UX Design Essential Training',
      imgSrc: '/assets/coursesCards/1.png',
      lessons: 6,
      duration: '3h 56m',
      level: 'Beginner',
    },
    {
      id: 2,
      title: 'Complete Python Bootcamp From Zero to Hero in Python',
      imgSrc: '/assets/coursesCards/2.png',
      lessons: 6,
      duration: '3h 56m',
      level: 'Beginner',
    },
    {
      id: 3,
      title: 'Angular - The Complete Guide (2022 Edition)',
      imgSrc: '/assets/coursesCards/3.png',
      lessons: 6,
      duration: '3h 56m',
      level: 'Beginner',
    },
    // {
    //   id: 4,
    //   title: 'The Ultimate Drawing Course Beginner to Advanced',
    //   imgSrc: '/assets/coursesCards/4.png',
    //   lessons: 6,
    //   duration: '3h 56m',
    //   level: 'Beginner',
    // },
  ];

  return (
    <Paper elevation={0} sx={{ my: 8 }}>
      <Typography color="primary" variant="h5" mb={3} fontWeight="bold">
        Featured Courses
      </Typography>

      <Grid container spacing={3}>
        {[
          'Civil Engineering',
          'Computer Science',
          'Electrical Engineering',
          'Mechanical Engineering',
        ].map((course, i) => (
          <Grid key={i} item xs={12} md={6} lg={6}>
            <Paper elevation={3} sx={{ width: '100%', py: 3, px: 3 }}>
              <Typography color="primary" variant="h6" mb={1}>
                {course}
              </Typography>
              <Typography variant="body1">Study Mode - Full Time</Typography>
              <Typography variant="body1">Seats - 60</Typography>
              <Box mt={3}>
                <Button
                  variant="outlined"
                  sx={{ color: 'primary', borderColor: 'primary', mr: 3 }}
                >
                  Apply Now <NearMeIcon sx={{ ml: 1 }} />
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    color: 'primary',
                    borderColor: 'primary',
                    mt: { xs: 2, md: 0 },
                  }}
                >
                  Brochure <DownloadIcon sx={{ ml: 1 }} />
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* <Grid container spacing={1}>
        {courses.map((course, i) => (
          <Grid key={i} item xs={12} md={6} lg={4}>
            <CourseCard data={course} />
          </Grid>
        ))}
      </Grid> */}
    </Paper>
  );
};

export default CollegeFeaturedCourse;
