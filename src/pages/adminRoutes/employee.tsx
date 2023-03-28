import AdminDashboardLayout from '@/Layouts/AdminDashboardLayout';
import * as React from 'react';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import EmployeeGeneralTab from '@/components/AdminDashboardComponents/EmployeeGeneralTab/EmployeeGeneralTab';
import Typography from '@mui/material/Typography';
import CreateEmployeeTab from '@/components/AdminDashboardComponents/CreateEmployeeTab/CreateEmployeeTab';
import EmployeeList from '@/components/AdminDashboardComponents/EmployeeList/EmployeeList';

const Employee = () => {
  return (
    <AdminDashboardLayout>
      <Paper sx={{ width: '100%' }} elevation={0}>
        <Box>
          <Typography
            variant="h4"
            sx={{ color: 'primary.main', pb: 2, pl: 3, fontWeight: 600 }}
          >
            Create Employee
          </Typography>
          <CreateEmployeeTab />
        </Box>
        <Box mt={4}>
          <Typography
            variant="h4"
            sx={{ color: 'primary.main', pb: 2, pl: 3, fontWeight: 600 }}
          >
            Employee List
          </Typography>
          <EmployeeList />
        </Box>
      </Paper>
    </AdminDashboardLayout>
  );
};

export default Employee;
