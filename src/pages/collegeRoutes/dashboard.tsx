import CollegeDashboardLayout from '@/Layouts/CollegeDashboardLayout';
import React from 'react';
import { Container, Stack, Box, Typography } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DashboardBlogs from '@/components/DashboardBlogs/DashboardBlogs';
import DashboardEvents from '@/components/DashboardEvents/DashboardEvents';
import DashboardReviews from '@/components/DashboardReviews/DashboardReviews';
import DashboardPackages from '@/components/DashboardPackages/DashboardPackages';

const Dashboard = () => {
  const statistics = [
    {
      title: 'Total Leads',
      value: 100,
      icon: <PeopleIcon />,
    },
    {
      title: 'Brochure Download',
      value: 50,
      icon: <DownloadForOfflineIcon />,
    },
    {
      title: 'Package purchased',
      value: 'Pro',
      icon: <AnalyticsIcon />,
    },
    {
      title: 'Validity',
      value: 30 + ' ',
      icon: <AnalyticsIcon />,
    },
  ];

  return (
    <CollegeDashboardLayout>
      <Stack spacing={3}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          {statistics.map((statistic, i) => (
            <Box
              key={i}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                backgroundColor: '#fff',
                width: '100%',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.07)',
                borderRadius: '14px',
                mx: '10px',
                py: 2,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: 'secondary.main',
                  border: '1px solid #E5E5E5',
                  height: '50px',
                  width: '50px',
                  borderRadius: '20%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {statistic?.icon}
              </Typography>
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'secondary.contrastText',
                    textAlign: 'center',
                    mt: 1,
                  }}
                >
                  {statistic?.title}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    color: 'primary.main',
                    fontWeight: '600',
                    textAlign: 'center',
                  }}
                >
                  {statistic?.value}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* blog and event section */}

        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <DashboardBlogs />
          </Grid>
          <Grid item xs={12} lg={6}>
            <DashboardEvents />
          </Grid>
        </Grid>

        {/* {/* review anf packages section section */}
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <DashboardReviews />
          </Grid>
          <Grid item xs={12} lg={6}>
            <DashboardPackages />
          </Grid>
        </Grid>
      </Stack>
    </CollegeDashboardLayout>
  );
};

export default Dashboard;
