import React from 'react';
import { Box, Grid, TextField, Typography } from '@mui/material';
import CollegeDashboardLayout from '@/Layouts/CollegeDashboardLayout';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CollegeEventTable from '@/components/CollegeEventTable/CollegeEventTable';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CollegeEventModal from '@/components/CollegeEventModal/CollegeEventModal';
const Events = () => {
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <>
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
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box mb={3}>
              <Typography
                variant="h4"
                sx={{ color: 'primary.main', fontWeight: '600' }}
              >
                Events
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  color: 'text_color.main',
                  fontWeight: '400',
                  mt: '2',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur.
              </Typography>
            </Box>
            <Typography
              onClick={() => setOpenModal(true)}
              variant="body1"
              sx={{
                color: 'secondary.main',
                fontweight: '700',
                fontSize: { xs: '12px', sm: '16px' },
                mt: 1,
                cursor: 'pointer',
              }}
            >
              <AddCircleOutlineIcon /> Add New
            </Typography>
          </Box>

          <Box mt={6}>
            <CollegeEventTable />
          </Box>
        </Box>
      </CollegeDashboardLayout>
      <CollegeEventModal setOpenModal={setOpenModal} openModal={openModal} />
    </>
  );
};

export default Events;
