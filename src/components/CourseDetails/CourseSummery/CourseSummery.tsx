import React from 'react';
import { Box, Chip, Stack, Typography, Grid } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const CourseSummery = () => {
  return (
    <Box mt={10}>
      <Typography
        variant="h6"
        component="p"
        sx={{ fontWeight: '600', color: 'primary.main' }}
      >
        {`What you'll learn`}
      </Typography>
      <Grid container spacing={4} mt={0}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, i) => (
          <Grid key={i} item xs={12} md={6}>
            <div className="flex space-x-2">
              <TaskAltIcon
                fontSize="small"
                sx={{ color: 'secondary.contrastText' }}
              />
              <Typography
                variant="body1"
                component="p"
                sx={{ color: 'secondary.contrastText' }}
              >
                Phasellus enim magna, varius et commodo ut,
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CourseSummery;
