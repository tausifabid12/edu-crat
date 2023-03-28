import React, { useState } from 'react';
import { Container, Typography, Box, styled, Grid } from '@mui/material';
import Navbar from '@/components/Navbar/Navbar';
import CoursesSideBar from '@/components/CoursesSideBar/CoursesSideBar';
import CoursesCards from '@/components/CoursesCards/CoursesCards';

// const coursesBody = styled(Box)(({ theme }) => ({
//   width: '100%',
// }));

const Courses = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <Box
          mt={20}
          mb={0}
          sx={{
            width: '100%',
            height: 100,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: 'primary.main', fontWeight: '600' }}
            >
              Courses
            </Typography>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden px-3 py-1 bg-secondary text-white rounded-lg"
            >
              Filter
            </button>
          </Box>
          <Typography variant="body2" mt={1} sx={{ color: 'text_color.main' }}>
            Write an introductory description of the category.
          </Typography>
        </Box>
        <Grid container spacing={5} mt={0}>
          <Grid
            item
            xs={12}
            md={3}
            className={`${isOpen ? 'block' : 'hidden'} lg:block w-full `}
          >
            <CoursesSideBar />
          </Grid>
          <Grid item xs={12} lg={9}>
            <CoursesCards />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Courses;
