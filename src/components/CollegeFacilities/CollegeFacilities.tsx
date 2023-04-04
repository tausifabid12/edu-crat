import React from 'react';
import { Button, Typography, Paper, Grid } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const CollegeFacilities = () => {
  return (
    <Paper elevation={3} sx={{ my: 8, p: 3 }}>
      <Typography color="primary" variant="h5" mb={3} fontWeight="bold">
        Our Facilities
      </Typography>
      <Grid container spacing={3}>
        {[
          'Hostel',
          'Library',
          'Cafeteria',
          'Sports',
          'Medical',
          'Transport',
          'Gym',
          'Auditorium',
          'Computer Lab',
        ].map((course, i) => (
          <Grid key={i} item xs={12} md={6} lg={4} sx={{}}>
            <Paper
              elevation={3}
              sx={{ width: '100%', py: 2, px: 3, bgcolor: 'bg_color.light' }}
            >
              <Typography color="primary" variant="h6" mb={1}>
                <AccountBalanceIcon sx={{ mr: 3 }} /> {course}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default CollegeFacilities;
