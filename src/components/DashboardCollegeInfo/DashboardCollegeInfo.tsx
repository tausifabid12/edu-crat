import React from 'react';
import { Container, Stack, Box, Typography, Grid } from '@mui/material';
import DashboardBlogs from '../DashboardBlogs/DashboardBlogs';
import DashboardEvents from '../DashboardEvents/DashboardEvents';

const DashboardCollegeInfo = () => {
  const collegeData = [
    {
      title: 'Address:',
      value: 'CV Raman Rd, Bengaluru, Karnataka, India',
    },

    {
      title: 'Phone:',
      value: '+91 80 2293 2004',
    },
    {
      title: 'Rankings:',
      value: '1st in India',
    },
    {
      title: 'Total students:',
      value: '1,035',
    },
  ];

  return (
    <>
      <Grid container spacing={0} sx={{ backgroundColor: 'transparent' }}>
        <Grid item xs={12} lg={6} p={1}>
          <Box
            sx={{
              width: '100%',
              minHeight: '100%',
              bgcolor: 'white',
              borderRadius: '14px',
              px: 5,
              py: 3,
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.09)',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: 'secondary.main',
                fontWeight: '600',
              }}
            >
              Indian Institute of Science
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                color: 'secondary.contrastText',
                fontWeight: '600',
              }}
            >
              Public university in Bengaluru, India
            </Typography>
            <Typography
              variant="subtitle2"
              mt={2}
              sx={{
                color: 'secondary.contrastText',
                fontWeight: '500',
              }}
            >
              The Indian Institute of Science is a public, deemed, research
              university for higher education and research in science,
              engineering, design, and management. It is located in the southern
              Indian city of Bangalore, Karnataka.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6} p={1}>
          <Stack
            spacing={1}
            sx={{
              width: '100%',
              bgcolor: 'white',
              borderRadius: '14px',
              px: 5,
              py: 3,
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.03)',
            }}
          >
            {collegeData.map((item) => (
              <Box
                key={item.title}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: 'secondary.main',
                    fontWeight: '600',
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'secondary.contrastText',
                    fontWeight: '600',
                    ml: 1,
                  }}
                >
                  {item.value}
                </Typography>
              </Box>
            ))}

            <Stack direction="row" spacing={2} pt={2}>
              <button className="bg-secondary text-white px-5 py-1 w-32 rounded-md">
                Website
              </button>
              <button className="bg-secondary text-white px-5 py-1 w-32 rounded-md">
                Apply Now
              </button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardCollegeInfo;
