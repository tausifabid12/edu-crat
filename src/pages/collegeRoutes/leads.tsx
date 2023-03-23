import * as React from 'react';
import CollegeDashboardLayout from '@/Layouts/CollegeDashboardLayout';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';

const leads = [
  {
    name: 'Rahul',
    email: 'a@gmail.com',
    mobile: '1234567890',
    class: '12th',
    steam: 'Engineering',
  },
  {
    name: 'Rahul',
    email: 'a@gmail.com',
    mobile: '1234567890',
    class: '12th',
    steam: 'Engineering',
  },
  {
    name: 'Rahul',
    email: 'a@gmail.com',
    mobile: '1234567890',
    class: '12th',
    steam: 'Engineering',
  },
  {
    name: 'Rahul',
    email: 'a@gmail.com',
    mobile: '1234567890',
    class: '12th',
    steam: 'Engineering',
  },
  {
    name: 'Rahul',
    email: 'a@gmail.com',
    mobile: '1234567890',
    class: '12th',
    steam: 'Engineering',
  },
  {
    name: 'Rahul',
    email: 'a@gmail.com',
    mobile: '1234567890',
    class: '12th',
    steam: 'Engineering',
  },
  {
    name: 'Rahul',
    email: 'a@gmail.com',
    mobile: '1234567890',
    class: '12th',
    steam: 'Engineering',
  },
];

const Leads = () => {
  return (
    <CollegeDashboardLayout>
      <Box
        sx={{
          width: '100%',
          minHeight: '100%',
          bgcolor: 'white',
          borderRadius: '14px',
          px: { xs: 1, sm: 5 },
          py: 3,
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.09)',
        }}
      >
        <Box mb={3}>
          <Typography
            variant="h4"
            sx={{ color: 'primary.main', fontWeight: '600' }}
          >
            Leads
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: 'secondary.contrastText', fontWeight: '400', mt: '2' }}
          >
            Lorem ipsum dolor sit amet, consectetur.
          </Typography>
        </Box>
        <TableContainer
          component={'div'}
          sx={{
            width: '100%',
            minHeight: '100%',
            bgcolor: 'white',
          }}
        >
          <Table sx={{ minWidth: '100%' }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Class</TableCell>
                <TableCell align="right">Steam</TableCell>
                <TableCell align="right">Mobile</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leads.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" sx={{ py: 3 }}>
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.class}</TableCell>
                  <TableCell align="right">{row.steam}</TableCell>
                  <TableCell align="right">{row.mobile}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </CollegeDashboardLayout>
  );
};
export default Leads;
