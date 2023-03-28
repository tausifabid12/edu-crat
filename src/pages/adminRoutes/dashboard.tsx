import DashboardTopCards from '@/components/AdminDashboardComponents/DashboardTopCards/DashboardTopCards';
import AdminDashboardLayout from '@/Layouts/AdminDashboardLayout';
import React from 'react';
import { Stack, Grid } from '@mui/material';

import DashboardCharts from '@/components/AdminDashboardComponents/DashboardCharts/DashboardCharts';
import SupportCard from '@/components/AdminDashboardComponents/SupportCard/SupportCard';
import NotificationCard from '@/components/AdminDashboardComponents/NotificationCard/NotificationCard';
import BlogCard from '@/components/AdminDashboardComponents/BlogCard/BlogCard';

const dashboard = () => {
  return (
    <AdminDashboardLayout>
      <Stack spacing={5}>
        <DashboardTopCards />
        <DashboardCharts />
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <SupportCard />
          </Grid>
          <Grid item xs={12} lg={6}>
            <NotificationCard />
          </Grid>
        </Grid>
        <BlogCard />
      </Stack>
    </AdminDashboardLayout>
  );
};

export default dashboard;
