import AdminDashboardLayout from '@/Layouts/AdminDashboardLayout';
import LeadsTable from '@/components/AdminDashboardComponents/LeadsTable/LeadsTable';
import { Box, Typography } from '@mui/material';
import React from 'react';

const leads = () => {
  return (
    <AdminDashboardLayout>
      <Box mb={3}>
        <Typography
          variant="h4"
          sx={{ color: 'primary.main', fontWeight: '600' }}
        >
          Leads
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ color: 'text_color.main', fontWeight: '400', mt: '2' }}
        >
          Lorem ipsum dolor sit amet, consectetur.
        </Typography>
      </Box>
      <LeadsTable />
    </AdminDashboardLayout>
  );
};

export default leads;
