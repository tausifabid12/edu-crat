import React from 'react';
import { Button, Typography, Paper, Box, Stack } from '@mui/material';
import NearMeIcon from '@mui/icons-material/NearMe';
import DownloadIcon from '@mui/icons-material/Download';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import BoltIcon from '@mui/icons-material/Bolt';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CollegeCourses from '../CollegeCourses/CollegeCourses';
import CollegeCourseFeesDetailsCard from '../CollegeCourseFeesDetailsCard/CollegeCourseFeesDetailsCard';

const CoursesAndFeesTab = () => {
  return (
    <>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Box sx={{ display: 'grid', placeContent: 'center' }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ textAlign: 'center', color: 'primary.main' }}
          >
            Apply Online
          </Typography>
          <Typography
            variant="body2"
            mb={3}
            sx={{ textAlign: 'center', color: 'text_color.main' }}
          >
            This college accepts application fees online. Clicking on the button
            below redirects to college website.
          </Typography>
          <Button
            variant="contained"
            sx={{
              color: 'primary',
              borderColor: 'primary',
              mr: 3,
              mx: 'auto',
            }}
          >
            Apply Now <NearMeIcon sx={{ ml: 1 }} />
          </Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Stack spacing={0.5} p={2}>
            <Typography variant="h6" fontWeight="bold" sx={{ mx: 'auto' }}>
              <AccessAlarmIcon />
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              sx={{ textAlign: 'center', color: 'primary.main' }}
            >
              12 Minutes
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'text_color.main', textAlign: 'center' }}
            >
              Estimated time required to complete all application fields and
              make payment.
            </Typography>
          </Stack>
          <Stack spacing={0.5} p={2}>
            <Typography variant="h6" fontWeight="bold" sx={{ mx: 'auto' }}>
              <CurrencyRupeeIcon />
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              sx={{ textAlign: 'center', color: 'primary.main' }}
            >
              650/-
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'text_color.main', textAlign: 'center' }}
            >
              Application fees to be paid.
            </Typography>
          </Stack>
          <Stack spacing={0.5} p={2}>
            <Typography variant="h6" fontWeight="bold" sx={{ mx: 'auto' }}>
              <BoltIcon />
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              sx={{ textAlign: 'center', color: 'primary.main' }}
            >
              Instant Confirmation
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'text_color.main', textAlign: 'center' }}
            >
              Confirmation will be sent to the email address and phone number
              you enter
            </Typography>
          </Stack>
        </Box>
      </Paper>

      {/*  --------- */}
      <Box sx={{ mt: 3 }}>
        <CollegeCourses />
      </Box>
      {/* ------ */}
      {/*  --------- */}
      <Box sx={{ mt: 3 }}>
        <CollegeCourseFeesDetailsCard />
      </Box>
      {/* ------ */}
    </>
  );
};

export default CoursesAndFeesTab;
