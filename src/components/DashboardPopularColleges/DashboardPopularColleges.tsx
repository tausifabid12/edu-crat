import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from '@mui/material';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { courses } from '@/utilities/CourseData/CourseData';

const DashboardPopularColleges = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'bg_color.main',
        borderRadius: '14px',
        py: 5,
        px: 3,
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.07)',
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
          variant="h5"
          sx={{ fontWeight: '700', color: 'secondary.main' }}
        >
          Popular Colleges
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: '700',
            color: 'secondary.main',
            textDecoration: 'underline',
          }}
        >
          view all
        </Typography>
      </Box>

      <Grid
        container
        spacing={0}
        mt={5}
        sx={{ backgroundColor: 'transparent' }}
      >
        {courses.slice(4, 8).map((item, i) => (
          <Grid key={i} item xs={12} lg={3} p={1}>
            <Card sx={{ width: '100%', minHeight: '100%', pb: 1 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="80"
                  image={item?.imgSrc}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="subtitle2"
                    component="div"
                    sx={{ fontWeight: '500', color: 'primary.main' }}
                  >
                    Acharya Narendra Dev College
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <button className="bg-secondary text-white px-2 text-sm py-1  rounded-md">
                  Apply Now
                </button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DashboardPopularColleges;
