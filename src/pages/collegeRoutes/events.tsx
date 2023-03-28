import React from 'react';
import { Box, Grid, TextField, Typography } from '@mui/material';
import CollegeDashboardLayout from '@/Layouts/CollegeDashboardLayout';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CollegeEventTable from '@/components/CollegeEventTable/CollegeEventTable';
const Events = () => {
  return (
    <CollegeDashboardLayout>
      <Box
        sx={{
          width: '100%',

          bgcolor: 'white',
          borderRadius: '14px',
          px: { xs: 1, sm: 5 },
          py: 7,
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.09)',
        }}
      >
        <Box mb={3}>
          <Typography
            variant="h4"
            sx={{ color: 'primary.main', fontWeight: '600' }}
          >
            Create an Event
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: 'text_color.main', fontWeight: '400', mt: '2' }}
          >
            Lorem ipsum dolor sit amet, consectetur.
          </Typography>
        </Box>
        <Box>
          <Grid
            container
            spacing={0}
            sx={{
              backgroundColor: 'transparent',
            }}
          >
            <Grid item xs={12} lg={6} p={1}>
              <TextField fullWidth label="Event Name" id="fullWidth" />
            </Grid>

            <Grid item xs={12} lg={6} p={1}>
              <TextField
                type="file"
                fullWidth
                id="fullWidth"
                label="Image"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} lg={6} p={1}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Date" sx={{ width: '100%' }} />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} lg={6} p={1}>
              <TextField fullWidth label="Url" id="fullWidth" />
            </Grid>
            <Grid item xs={12} lg={12} p={1}>
              <TextField
                fullWidth
                id="fullWidth"
                multiline
                rows={4}
                label="Description"
              />
            </Grid>
          </Grid>
          <button className="bg-secondary text-white px-14 py-4 border-2 transition-all duration-300 border-secondary rounded-lg hover:bg-white hover:text-secondary mt-4 ml-1">
            Create Event
          </button>
        </Box>
        <Box mt={6}>
          <Typography
            variant="h4"
            sx={{ color: 'primary.main', fontWeight: '600' }}
          >
            Events
          </Typography>
          <CollegeEventTable />
        </Box>
      </Box>
    </CollegeDashboardLayout>
  );
};

export default Events;
