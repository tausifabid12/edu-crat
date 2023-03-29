import UserTable from '@/components/AdminDashboardComponents/UserTable/UserTable';
import AdminDashboardLayout from '@/Layouts/AdminDashboardLayout';

import { Box, Typography } from '@mui/material';
import React from 'react';

const Users = () => {
  return (
    <AdminDashboardLayout>
      <Box mb={3}>
        <Typography
          variant="h4"
          sx={{ color: 'primary.main', fontWeight: '600' }}
        >
          Users
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ color: 'text_color.main', fontWeight: '400', mt: '2' }}
        >
          Lorem ipsum dolor sit amet, consectetur.
        </Typography>
      </Box>
      <UserTable />
    </AdminDashboardLayout>
  );
};

export default Users;
